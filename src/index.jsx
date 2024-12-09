import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

// Movie List Component
const MovieList = ({ movies }) => (
  <div>
    <h1>Movie List</h1>
    <ul>
      {movies.map((movie) => (
        <li key={movie.title}>
          <Link to={`/movies/${encodeURIComponent(movie.title)}`}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Movie Details Component
const MovieDetails = ({ title, description, genre, director, year, image }) => (
  <div>
    <h1>{title}</h1>
    <img
      src={image}
      alt={title}
      style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
    />
    <p>
      <strong>Description:</strong> {description}
    </p>
    <p>
      <strong>Genre:</strong> {genre}
    </p>
    <p>
      <strong>Director:</strong> {director}
    </p>
    <p>
      <strong>Year:</strong> {year}
    </p>
    <Link to="/">Back to Movie List</Link>
  </div>
);

// App Component
const App = () => {
  const movies = [
    {
      title: 'Evil Dead',
      description: 'A group of friends unleash an evil force.',
      genre: 'Horror',
      director: 'Sam Raimi',
      year: 1981,
      image: '/images/evil-dead.jpg', // Add image path
    },
    {
      title: 'Godzilla',
      description: 'A giant lizard wreaks havoc on a city.',
      genre: 'Sci-Fi',
      director: 'Ishirō Honda',
      year: 1954,
      image: '/images/godzilla.jpg', // Add image path
    },
    {
      title: 'Jurassic Park',
      description: 'Dinosaurs are brought back to life.',
      genre: 'Adventure',
      director: 'Steven Spielberg',
      year: 1993,
      image: '/images/jurassic-park.jpg', // Add image path
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route
          path="/movies/:movieTitle"
          element={<MovieDetails movies={movies} />}
        />
      </Routes>
    </Router>
  );
};

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
