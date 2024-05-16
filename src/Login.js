import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <img src="logo192.png" alt="logo" className="logo" />
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <a href="#" className="forgot-password">Forgot your password?</a>
      </div>
    </div>
  );
};

export default Login;