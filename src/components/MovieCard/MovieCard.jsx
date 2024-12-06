import React from 'react';

export const MovieCard = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      {/* Display the movie image */}
      <img
        src={`/images/${movie.image}`} // Path to the images folder inside public
        alt={`${movie.title} Poster`} // Accessible alt text with the movie title
        style={{ width: '150px', height: 'auto' }} // Basic styling for the image
      />
    </div>
  );
};
