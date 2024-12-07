import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const MovieDetails = ({ movies }) => {
  const { movieTitle } = useParams(); // Get the movieTitle from the URL
  const movie = movies.find((m) => m.title === decodeURIComponent(movieTitle)); // Match the movie

  if (!movie) {
    return <div>Movie not found!</div>; // Handle missing movie
  }

  const handleError = (e) => {
    e.target.src = '/images/default-image.jpeg'; // Placeholder image in case the poster is missing
    console.error(`Error loading image for ${movie.title}`);
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>
      <p>
        <strong>Description:</strong> {movie.description}
      </p>
      <img
        src={`/images/${movie.imagePath}`} // This is your image path
        alt={`${movie.title} Poster`}
        style={{ width: '300px', height: 'auto' }}
        onError={(e) => (e.target.src = '/images/default-image.jpeg')} // Fallback image in case of error
      />
      <br />
      <Link to="/">Back to Movie List</Link>
    </div>
  );
};
