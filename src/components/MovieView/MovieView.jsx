// src/components/MovieView/MovieView.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieView = () => {
  const { movieTitle } = useParams();

  // Movie data (replace with your actual movie data source)
  const movies = [
    {
      title: 'Evil Dead',
      description: 'A group of friends unleash an evil force.',
      genre: 'Horror',
      director: 'Sam Raimi',
      year: 1981,
      image: '/images/evil-dead.jpg',
    },
    {
      title: 'Godzilla',
      description: 'A giant lizard wreaks havoc on a city.',
      genre: 'Sci-Fi',
      director: 'Ishirō Honda',
      year: 1954,
      image: '/images/godzilla.jpg',
    },
    {
      title: 'Jurassic Park',
      description: 'Dinosaurs are brought back to life.',
      genre: 'Adventure',
      director: 'Steven Spielberg',
      year: 1993,
      image: '/images/jurassic-park.jpg',
    },
  ];

  const movie = movies.find(
    (movie) => movie.title === decodeURIComponent(movieTitle)
  );

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={movie.image}
        alt={movie.title}
        style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
      />
      <p>
        <strong>Description:</strong> {movie.description}
      </p>
      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>
      <p>
        <strong>Director:</strong> {movie.director}
      </p>
      <p>
        <strong>Year:</strong> {movie.year}
      </p>
    </div>
  );
};

export default MovieView;
