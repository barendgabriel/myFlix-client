import React from 'react';

export const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      {/* Correct image reference from the public folder */}
      <img
        src={`/images/${movie.image}`} // Path starting from the public folder
        alt={`${movie.title} Movie Poster`} // More specific alt text
        className="movie-card-img" // Use class for styling
      />
    </div>
  );
};
