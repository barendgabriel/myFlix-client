import React from 'react';

export const MovieCard = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      {/* Correct image reference from the public folder */}
      <img
        src={`/images/${movie.image}`} // Path starting from the public folder
        alt={`${movie.title} Poster`} // Alt text with movie title for accessibility
        style={{ width: '150px', height: 'auto' }} // Basic styling for the image
      />
    </div>
  );
};
