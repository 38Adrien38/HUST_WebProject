import React, { useState } from 'react';
import './Connexion.css'; // Reusing the same CSS file
import bcrypt from 'bcryptjs';

function FormulaireConnexion({ setPage }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Basic validation
      if (!email || !name || !password || !confirmPassword) {
        throw new Error('All fields are required');
      }

      if (!email.includes('@')) {
        throw new Error('Invalid email address');
      }

      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      const { isValid, errors } = validatePassword(password);
      if (!isValid) {
        throw new Error(`Password doesn't meet requirements: ${errors.join(', ')}`);
      }

      // Hash password before storing
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);

      // Save user data (in a real app, this would be an API call)
      const userData = {
        email,
        name,
        passwordHash,
        createdAt: new Date().toISOString()
      };

      localStorage.setItem('user', JSON.stringify(userData));
      alert('Registration successful! Please log in.');
      setPage('connexion');
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="connexion-page">
      <div className="connexion-container">
        <h1>Create Account</h1>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
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
              />
              <button 
                type="button" 
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <div className="password-hints">
              <strong>Password Requirements:</strong>
              <ul>
                <li>Minimum 8 characters</li>
                <li>At least one uppercase letter (A-Z)</li>
                <li>At least one lowercase letter (a-z)</li>
                <li>At least one number (0-9)</li>
                <li>At least one special character (!@#$%^&*)</li>
              </ul>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            className="connexion-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <div className="connexion-links">
          <p>Already have an account? <span onClick={() => setPage('connexion')}>Log in</span></p>
        </div>
      </div>
    </div>
  );
}

export default FormulaireConnexion;