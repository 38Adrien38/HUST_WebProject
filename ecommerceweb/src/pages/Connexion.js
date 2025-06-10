import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import './Connexion.css';
import bcrypt from 'bcryptjs';

function Connexion({ setUser, setPage, setId }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [showRecovery, setShowRecovery] = useState(false);

  // Password policy validation
  const validatePassword = (pass) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(pass);
    const hasLowerCase = /[a-z]/.test(pass);
    const hasNumbers = /\d/.test(pass);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
    
    return {
      isValid: pass.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecial,
      errors: [
        pass.length >= minLength ? null : `Minimum ${minLength} characters`,
        hasUpperCase ? null : 'At least one uppercase letter',
        hasLowerCase ? null : 'At least one lowercase letter',
        hasNumbers ? null : 'At least one number',
        hasSpecial ? null : 'At least one special character'
      ].filter(Boolean)
    };
  };

  // Brute force protection
  const checkBruteForce = (email) => {
    const failedAttempts = JSON.parse(localStorage.getItem('failedAttempts') || '{}');
    const attempts = failedAttempts[email] || 0;
    
    if (attempts >= 5) {
      const lastAttempt = localStorage.getItem(`lastAttempt_${email}`);
      if (Date.now() - lastAttempt < 15 * 60 * 1000) { // 15 minute lockout
        throw new Error('Too many attempts. Please try again later.');
      } else {
        failedAttempts[email] = 0;
        localStorage.setItem('failedAttempts', JSON.stringify(failedAttempts));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      checkBruteForce(email);
      
      if (!email || !password) {
        throw new Error('All fields are required');
      }

      if (!email.includes('@')) {
        throw new Error('Invalid email address');
      }

      const { isValid, errors } = validatePassword(password);
      if (!isValid) {
        throw new Error(`Weak password: ${errors.join(', ')}`);
      }

      // Simulate secure password verification
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (!storedUser) throw new Error('Invalid credentials');
      
      const isMatch = await bcrypt.compare(password, storedUser.passwordHash);
      if (!isMatch) throw new Error('Invalid credentials');

      // Reset failed attempts on success
      const failedAttempts = JSON.parse(localStorage.getItem('failedAttempts') || '{}');
      failedAttempts[email] = 0;
      localStorage.setItem('failedAttempts', JSON.stringify(failedAttempts));

      // Successful login
      setUser({ email, name: storedUser.name });
      setPage('home');
      
    } catch (err) {
      // Track failed attempts
      const failedAttempts = JSON.parse(localStorage.getItem('failedAttempts') || '{}');
      failedAttempts[email] = (failedAttempts[email] || 0) + 1;
      localStorage.setItem('failedAttempts', JSON.stringify(failedAttempts));
      localStorage.setItem(`lastAttempt_${email}`, Date.now());
      
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordRecovery = () => {
    // In a real app, send recovery email here
    localStorage.setItem('recoveryToken', Math.random().toString(36).substring(2));
    alert(`Password reset link sent to ${recoveryEmail}`);
    setShowRecovery(false);
  };

  return (
    <>
      <NavBar setPage={setPage} setId={setId} />
      <div className="connexion-page">
        <div className="connexion-container">
          <h1>Login</h1>
          
          {error && <div className="error-message">{error}</div>}

          {!showRecovery ? (
            <>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    autoComplete="username"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="password-input">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      autoComplete="current-password"
                    />
                    <button 
                      type="button" 
                      className="show-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="connexion-btn"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </button>
              </form>

              <div className="connexion-links">
                <p>Don't have an account? <span onClick={() => setPage('creerCompte')}>Register</span></p>
                <p>Forgot password? <span onClick={() => setShowRecovery(true)}>Reset password</span></p>
              </div>
            </>
          ) : (
            <div className="recovery-form">
              <h2>Password Recovery</h2>
              <div className="form-group">
                <label>Enter your email</label>
                <input
                  type="email"
                  value={recoveryEmail}
                  onChange={(e) => setRecoveryEmail(e.target.value)}
                  placeholder="your@email.com"
                />
              </div>
              <button 
                className="connexion-btn"
                onClick={handlePasswordRecovery}
              >
                Send Recovery Link
              </button>
              <button 
                className="back-btn"
                onClick={() => setShowRecovery(false)}
              >
                Back to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Connexion;