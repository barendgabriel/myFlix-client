// src/components/MovieView/MovieView.jsx
import React from 'react';

export const MovieView = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Genre: {movie.genre}</p>
      <p>Details: Additional movie details go here.</p>
    </div>
  );
};
