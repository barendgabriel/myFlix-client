// src/components/MainView/MainView.jsx
import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard'; // Import MovieCard component

export const MainView = ({ movies }) => {
  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};
