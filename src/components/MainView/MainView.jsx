// src/components/MainView/MainView.jsx
import React, { useState } from 'react';
import { MovieCard } from '../MovieCard/MovieCard';

export const MainView = () => {
  const [movies] = useState([
    {
      title: 'Evil Dead',
      genre: 'Horror',
      director: 'Sam Raimi',
      description:
        'Five friends travel to a cabin in the woods, where they unknowingly release demons.',
      year: 1981,
      imagePath: 'evil-dead.jpg',
    },
    {
      title: 'Godzilla',
      genre: 'Science Fiction',
      director: 'Ishirō Honda',
      description:
        'A giant monster emerges from the sea, wreaking havoc across Japan.',
      year: 1954,
      imagePath: 'godzilla.jpg',
    },
    {
      title: 'Jurassic Park',
      genre: 'Adventure',
      director: 'Steven Spielberg',
      description:
        'Dinosaurs are brought back to life in a theme park, with disastrous consequences.',
      year: 1993,
      imagePath: 'jurassic-park.jpg',
    },
  ]);

  return (
    <div>
      <h1>Welcome to myFlix</h1>
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};
