// src/components/MovieCard/MovieCard.jsx
import React from 'react';

export const MovieCard = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
    </div>
  );
};
