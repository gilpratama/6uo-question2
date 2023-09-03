import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Login successful, you can store the session token in localStorage or a state variable
        alert('Login successful');
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Email or password is incorrect.');
      } else {
        setError('Unable to login. Please try again later.');
        console.error(err); // Log the error for debugging
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
