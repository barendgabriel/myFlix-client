// src/components/MovieCard/MovieCard.jsx
import React from 'react';

export const MovieCard = ({ movie }) => {
  return (
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
      <img
        src={`./images/${movie.image}`}
        alt={movie.title}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};
