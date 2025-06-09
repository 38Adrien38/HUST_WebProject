// src/utils/authUtils.js
export const generateToken = (userEmail) => {
  const payload = {
    email: userEmail,
    timestamp: Date.now(),
    expiresIn: 1000 * 60 * 30, // 30 minutes
    userAgent: navigator.userAgent,
  };
  const token = btoa(JSON.stringify(payload));
  localStorage.setItem('access_token', token);
  return token;
};

export const isTokenValid = () => {
  try {
    const token = localStorage.getItem('access_token');
    if (!token) return false;

    const payload = JSON.parse(atob(token));
    const now = Date.now();

    if (
      now - payload.timestamp > payload.expiresIn ||
      payload.userAgent !== navigator.userAgent
    ) {
      logout();
      return false;
    }

    return true;
  } catch (err) {
    logout();
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('csrf_token');
  localStorage.removeItem('current_user');
};

export const generateCSRFToken = () => {
  const token = Math.random().toString(36).substring(2) + Date.now();
  localStorage.setItem('csrf_token', token);
  return token;
};

export const validateCSRFToken = (token) => {
  return token === localStorage.getItem('csrf_token');
};
