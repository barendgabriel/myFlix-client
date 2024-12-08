import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieView = () => {
  const { movieTitle } = useParams();
  const navigate = useNavigate(); // Hook for navigation

  // Movie data (replace with your actual movie data source)
  const movies = [
    {
      title: 'Evil Dead',
      description: 'A group of friends unleash an evil force.',
      genre: 'Horror',
      director: 'Sam Raimi',
      year: 1981,
      image: 'evil-dead.jpg',
    },
    {
      title: 'Godzilla',
      description: 'A giant lizard wreaks havoc on a city.',
      genre: 'Sci-Fi',
      director: 'Ishirō Honda',
      year: 1954,
      image: 'godzilla.jpg',
    },
    {
      title: 'Jurassic Park',
      description: 'Dinosaurs are brought back to life.',
      genre: 'Adventure',
      director: 'Steven Spielberg',
      year: 1993,
      image: 'jurassic-park.jpg',
    },
  ];

  const movie = movies.find(
    (movie) => movie.title === decodeURIComponent(movieTitle)
  );

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{movie.title}</h1>
      <img
        src={`/images/${movie.image}`}
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
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Back to Movie List
      </button>
    </div>
  );
};

export default MovieView;
