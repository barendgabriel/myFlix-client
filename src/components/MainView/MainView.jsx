import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieCard } from '../MovieCard/MovieCard';

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://movie_api/movies') // Replace with your API URL
      .then((response) => {
        setMovies(response.data); // Assuming your API returns a 'data' array
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch movies. Please try again.');
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs once on component mount

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
