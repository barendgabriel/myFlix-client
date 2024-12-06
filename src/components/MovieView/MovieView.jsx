import React from 'react';

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`/images/${movie.imagePath}`} // Image path from public/images
        alt={movie.title}
        style={{ width: '300px', height: 'auto' }} // Styling the image size
      />
      <p>
        <strong>Genre:</strong> {movie.genre} {/* Display the genre */}
      </p>
      <p>
        <strong>Description:</strong> {movie.description}{' '}
        {/* Display the description */}
      </p>
      <button onClick={onBackClick}>Back</button>{' '}
      {/* Back button with callback */}
    </div>
  );
};
