// LoginPage.js
import React from 'react';
import './LoginPage.css'; // You can create a CSS file for styling

import LoginForm from './LoginForm';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2>Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
