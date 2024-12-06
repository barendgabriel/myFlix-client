import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard'; // Import MovieCard component
import { Link } from 'react-router-dom'; // Import Link for navigation

export const MainView = ({ movies }) => {
  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie, index) => (
        <Link to={`/movie/${movie.title}`} key={index}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};
