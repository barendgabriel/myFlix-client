import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom'; // Import useParams for MovieView

// Main View Component to display the movie list
const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const token = localStorage.getItem('jwt'); // Get JWT from localStorage
        const response = await fetch('http://localhost:3000/movies', {
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
      {error && <p>Error: {error}</p>}
      <div>
        {movies.map((movie) => (
          <div key={movie._id}>
            <h3>{movie.title}</h3>
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
        const response = await fetch(
          `http://localhost:3000/movies/${movieTitle}`
        );
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

  if (error) return <p>Error: {error}</p>;

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>{movie.genre}</p>
      <p>{movie.director}</p>
      <p>{movie.year}</p>
    </div>
  );
};

// Main App Component with Routing
const App = () => {
  return (
    <Router>
      {' '}
      {/* Ensure Router wraps everything here */}
      <Routes>
        {/* Main view for the movie list */}
        <Route path="/" element={<MainView />} />

        {/* Movie view for displaying details of a specific movie */}
        <Route path="/movies/:movieTitle" element={<MovieView />} />
      </Routes>
    </Router>
  );
};

// Find the root element in index.html
const rootElement = document.getElementById('root');

// Create a root for React rendering
const root = ReactDOM.createRoot(rootElement);

// Render the main App component
root.render(<App />);
