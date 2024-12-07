import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Sample movie data
const movies = [
  {
    title: 'Evil Dead',
    description:
      'A group of friends encounter supernatural forces at a remote cabin.',
    genre: 'Horror',
    director: 'Sam Raimi',
    year: 1981,
    imagePath: 'evil-dead.jpeg', // Ensure this image is in the correct directory
  },
  {
    title: 'Godzilla',
    description: 'A giant monster emerges and causes chaos in a major city.',
    genre: 'Sci-Fi',
    director: 'Ishirô Honda',
    year: 1954,
    imagePath: 'godzilla.jpeg', // Ensure this image is in the correct directory
  },
  {
    title: 'Jurassic Park',
    description:
      'Scientists create a theme park with genetically engineered dinosaurs.',
    genre: 'Adventure',
    director: 'Steven Spielberg',
    year: 1993,
    imagePath: 'jurassic-park.png', // Ensure this image is in the correct directory
  },
];

// Movie List component
const MovieList = () => {
  return (
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
};

// Movie Details component
const MovieDetails = ({ movies }) => {
  const { movieTitle } = useParams(); // Get the movieTitle from the URL
  const movie = movies.find((m) => m.title === decodeURIComponent(movieTitle)); // Match the movie

  if (!movie) {
    return <div>Movie not found!</div>; // Handle missing movie
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>
      <p>
        <strong>Description:</strong> {movie.description}
      </p>
      <img
        src={`/images/${movie.imagePath}`} // Display the poster here
        alt={`${movie.title} Poster`}
        style={{ width: '300px', height: 'auto' }}
      />
      <br />
      <Link to="/">Back to Movie List</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route
          path="/movies/:movieTitle"
          element={<MovieDetails movies={movies} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
