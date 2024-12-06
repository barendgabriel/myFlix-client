import React from 'react';

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`/images/${movie.imagePath}`}
        alt={movie.title}
        style={{ width: '300px', height: 'auto' }}
      />
      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>
      <p>
        <strong>Description:</strong> {movie.description}
      </p>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
