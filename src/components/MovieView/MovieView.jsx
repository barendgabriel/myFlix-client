import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieView = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null); // To handle errors if any occur

  useEffect(() => {
    // Fetch movies from the API
    const token = localStorage.getItem('token');
    fetch(`https://myflixmovieapp.onrender.com/movies/${movieId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch movie data.');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Movie from api', data);
        setMovie(data);
      })
      .catch((err) => {
        console.error('Error fetching movie data:', err);
        setError('Failed to load movie details.');
      });
  }, [movieId]);

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
        src={movie.imageURL}
        alt={movie.title}
        style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
      />
      <p>
        <strong>Description:</strong> {movie.description}
      </p>
      <p>
        <strong>Genre:</strong> {movie.genre.name}
      </p>
      <p>
        <strong>Director:</strong> {movie.director.name}
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
