import React from 'react';

export const MovieCard = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      {/* Use the correct property name for image path */}
      <img
        src={`/images/${movie.imagePath}`} // Reference imagePath correctly
        alt={`${movie.title} Poster`} // Alt text with movie title for accessibility
        style={{ width: '150px', height: 'auto' }} // Basic styling for the image
      />
    </div>
  );
};
