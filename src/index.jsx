import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { MainView } from './components/MainView/MainView';
import { MovieDetails } from './components/MovieDetails/MovieDetails'; // Import MovieDetails
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const movies = [
  {
    title: 'Jurassic Park',
    genre: 'Thriller',
    description: 'A thrilling dinosaur adventure.',
    director: 'Steven Spielberg', // Added director
    imagePath: 'jurassic-park.png',
  },
  {
    title: 'Godzilla',
    genre: 'Comedy',
    description: 'A lighthearted monster tale.',
    director: 'Ishirō Honda', // Added director
    imagePath: 'godzilla.jpeg',
  },
  {
    title: 'Evil Dead',
    genre: 'Horror',
    description: 'A spine-chilling classic.',
    director: 'Sam Raimi', // Added director
    imagePath: 'evil-dead.jpeg',
  },
];

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main view route */}
        <Route path="/" element={<MainView movies={movies} />} />

        {/* Movie details route */}
        <Route
          path="/movie/:movieTitle"
          element={<MovieDetails movies={movies} />}
        />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
