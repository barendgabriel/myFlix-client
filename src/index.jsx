import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom'; // Import useParams for MovieView

// Base URL for the backend API
const API_BASE_URL = 'https://myflixmovieapp.onrender.com'; // Update this with your Render backend URL

// Main View Component to display the movie list
const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const token = localStorage.getItem('jwt'); // Get JWT from localStorage
        const response = await fetch(`${API_BASE_URL}/movies`, {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in the Authorization header
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }

        const data = await response.json();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies List</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <div>
        {movies.map((movie) => (
          <div key={movie._id}>
            <h3>{movie.title}</h3>
            <img
              src={movie.imageUrl} // Ensure this property exists in your API response
              alt={movie.title}
              style={{ width: '200px', height: 'auto' }} // Adjust size as needed
            />
            <p>{movie.description}</p>
            <Link to={`/movies/${movie.title}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// Movie View Component to display details of a specific movie
const MovieView = () => {
  const { movieTitle } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const token = localStorage.getItem('jwt'); // Get JWT from localStorage
        const response = await fetch(`${API_BASE_URL}/movies/${movieTitle}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in the Authorization header
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovie();
  }, [movieTitle]);

  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={movie.imageUrl} // Ensure this property exists in your API response
        alt={movie.title}
        style={{ width: '300px', height: 'auto' }} // Adjust size as needed
      />
      <p>{movie.description}</p>
      <p>Genre: {movie.genre.name}</p>
      <p>Director: {movie.director.name}</p>
      <p>Year: {movie.year}</p>
    </div>
  );
};

// Main App Component with Routing
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main view for the movie list */}
        <Route path="/" element={<MainView />} />

        {/* Movie view for displaying details of a specifi
