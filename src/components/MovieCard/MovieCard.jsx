import React from 'react';

export const MovieCard = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      {/* Display the movie image */}
      <img
        src={`/images/${movie.image}`}
        alt={`${movie.title} Poster`}
        style={{ width: '150px', height: 'auto' }}
      />
    </div>
  );
};
