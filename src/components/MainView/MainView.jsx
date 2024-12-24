import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MovieCard } from '../MovieCard/MovieCard';
import MovieView from '../MovieView/MovieView';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import ProfileView from '../ProfileView/ProfileView';
import LoginView from '../LoginView/LoginView';
import SignupView from '../SignupView/SignupView';

const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

  useEffect(() => {
    if (!token) return;

    axios
      .get('https://myflixmovieapp.onrender.com/movies', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        console.log('Fetching movies successful');
        setMovies(response.data); // Assuming your API returns a 'data' array
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch movies. Please try again.');
        setLoading(false);
      });
  }, [token]);

  const handleLogin = (user, token) => {
    setUser(user);
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setMovies([]); // Clear movies when logging out
  };

  return (
    <BrowserRouter>
      <NavigationBar user={user} onLoggedOut={handleLogout} />
      <Routes>
        {!token ? (
          <>
            <Route path="/" element={<LoginView onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignupView />} />
          </>
        ) : (
          <>
            <Route
              path="/"
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
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default MainView;
