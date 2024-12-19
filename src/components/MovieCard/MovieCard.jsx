import React from 'react';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movies/${movie._id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
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
    </Link>
  );
};
