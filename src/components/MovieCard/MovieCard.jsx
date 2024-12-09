// src/components/MovieCard/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div
    style={{
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px',
      borderRadius: '8px',
      cursor: 'pointer',
      maxWidth: '200px',
    }}
  >
    <h3>{movie.title}</h3>
    <Link to={`/movies/${encodeURIComponent(movie.title)}`}>View Details</Link>
  </div>
);

export default MovieCard;
