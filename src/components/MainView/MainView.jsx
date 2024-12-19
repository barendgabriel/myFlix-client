// src/components/MainView/MainView.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { MovieCard } from '../MovieCard/MovieCard';
import MovieView from '../MovieView/MovieView'; // Corrected import for MovieView
import { NavigationBar } from '../NavigationBar/NavigationBar';
import ProfileView from '../ProfileView/ProfileView'; // Importing the default export
import LoginView from '../LoginView/LoginView'; // Importing the default export
import SignupView from '../SignupView/SignupView'; // Importing the default export

const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get('https://myflixmovieapp.onrender.com/movies', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
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
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setMovies([]); // Clear movies when logging out
  };

  if (!isLoggedIn) {
    return (
      <Router>
        <NavigationBar isAuthenticated={isLoggedIn} />
        <Routes>
          <Route path="/" element={<LoginView onLoggedIn={handleLogin} />} />
          <Route path="/signup" element={<SignupView />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <NavigationBar isAuthenticated={isLoggedIn} />
      <Routes>
        <Route
          path="/movies"
          element={
            <div>
              {loading ? (
                <div>Loading movies...</div>
              ) : error ? (
                <div>{error}</div>
              ) : (
                <div>
                  <h1>Movies List</h1>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '10px',
                    }}
                  >
                    {movies.map((movie) => (
                      <MovieCard key={movie._id} movie={movie} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          }
        />
        <Route path="/movies/:movieId" element={<MovieView />} />
        <Route path="/profile" element={<ProfileView />} />
      </Routes>
      <button onClick={handleLogout}>Logout</button>
    </Router>
  );
};

export default MainView;
