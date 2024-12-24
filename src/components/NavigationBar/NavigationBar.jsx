import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationBar = ({ user, onLoggedOut }) => (
  <nav>
    {!user ? (
      <>
        <Link to="/">Login</Link>
        <Link to="/signup">Signup</Link>
      </>
    ) : (
      <>
        <span>Welcome {user.username}</span>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/" onClick={onLoggedOut}>
          Logout
        </Link>
      </>
    )}
  </nav>
);
