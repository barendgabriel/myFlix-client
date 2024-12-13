// src/components/MainView/MainView.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieCard } from '../MovieCard/MovieCard';

const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks if the user is logged in
  const [form, setForm] = useState('login'); // Tracks whether to show login or signup form

  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get('https://myflixmovieapp.onrender.com/movies') // Correct API URL
        .then((response) => {
          setMovies(response.data); // Assuming your API returns a 'data' array
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError('Failed to fetch movies. Please try again.');
          setLoading(false);
        });
    }
  }, [isLoggedIn]); // Fetch movies only if logged in

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with actual login logic
    setIsLoggedIn(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Replace with actual signup logic
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div>
        <h1>{form === 'login' ? 'Login' : 'Signup'}</h1>
        <form onSubmit={form === 'login' ? handleLogin : handleSignup}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => setForm(form === 'login' ? 'signup' : 'login')}>
          Switch to {form === 'login' ? 'Signup' : 'Login'}
        </button>
      </div>
    );
  }

  if (loading) {
    return <div>Loading movies...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Movies List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MainView;
