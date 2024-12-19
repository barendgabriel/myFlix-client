import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationBar = ({ isAuthenticated }) => (
  <nav>
    {!isAuthenticated ? (
      <>
        <Link to="/">Login</Link>
        <Link to="/signup">Signup</Link>
      </>
    ) : (
      <>
        <Link to="/movies">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/" onClick={() => localStorage.clear()}>
          Logout
        </Link>
      </>
    )}
  </nav>
);
