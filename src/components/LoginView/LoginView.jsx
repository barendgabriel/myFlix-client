import React, { useState } from 'react';

const LoginView = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Updated URL to the local backend
      const response = await fetch(
        'https://myflixmovieapp.onrender.com/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data.user)); // Store token in localStorage
        localStorage.setItem('token', data.token); // Store token in localStorage
        onLogin(data.user, data.token); // Pass token to parent component
      } else {
        const error = await response.json();
        setErrorMessage(error.message); // Set error message from backend
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('Login failed. Please try again later.'); // Handle network or other errors
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p>{errorMessage}</p>} {/* Display error message */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginView;
