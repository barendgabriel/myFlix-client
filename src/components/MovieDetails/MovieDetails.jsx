// src/components/MovieDetails/MovieDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { title } = useParams();

  return (
    <div className="movie-details">
      {' '}
      {/* Add the movie-details class */}
      <h2>{title}</h2>
      <p>Genre: Thriller (or other genre based on movie title)</p>
      <p>Some detailed description of the movie...</p>
      <button>Back to List</button>
    </div>
  );
};
