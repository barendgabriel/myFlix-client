import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieView = () => {
  const { movieTitle } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null); // To handle errors if any occur

  useEffect(() => {
    // Fetch movies from the API
    fetch('https://myflixmovieapp.onrender.com/movies')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch movie data.');
        }
        return response.json();
      })
      .then((data) => {
        // Find the movie by title
        const selectedMovie = data.find(
          (movie) => movie.title === decodeURIComponent(movieTitle)
        );
        if (!selectedMovie) {
          setError('Movie not found.');
        }
        setMovie(selectedMovie);
      })
      .catch((err) => {
        console.error('Error fetching movie data:', err);
        setError('Failed to load movie details.');
      });
  }, [movieTitle]);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!movie) {
    return <h2>Loading movie details...</h2>;
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
