import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate(); // Use navigate for going back to the list

  // Find the movie based on the title
  const movie = movies.find((movie) => movie.title === title);

  // If the movie is not found, show an error message
  if (!movie) {
    return <p>Movie not found!</p>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>Genre: {movie.genre}</p>
      <p>{movie.description}</p>
      <button onClick={() => navigate('/')}>Back to List</button>
    </div>
  );
};
