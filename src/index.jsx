import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const MovieDetails = ({ movies }) => {
  if (!movies) {
    return <div>Loading...</div>; // If no movies are passed
  }

  const { movieTitle } = useParams();
  const movie = movies.find((m) => m.title === decodeURIComponent(movieTitle));

  if (!movie) {
    return <div>Movie not found!</div>;
  }

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
        src={`/images/${movie.imagePath}`}
        alt={`${movie.title} Poster`}
        style={{ width: '300px', height: 'auto' }}
      />
      <br />
      <Link to="/">Back to Movie List</Link>
    </div>
  );
};
