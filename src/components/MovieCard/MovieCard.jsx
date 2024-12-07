import React from 'react';

export const MovieCard = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      {/* Display the movie poster on click */}
      <img
        src={`/images/${movie.imagePath}`} // Correct path to images
        alt={`${movie.title} Poster`} // Alt text for accessibility
        style={{ width: '150px', height: 'auto' }} // Basic styling for image
      />
    </div>
  );
};
