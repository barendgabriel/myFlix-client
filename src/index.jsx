// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use React 18+ import
import './index.scss'; // Import your styles
import { MainView } from './components/MainView/MainView'; // Import MainView
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components

// Define some sample movie data
const movies = [
  {
    title: 'Jurassic Park',
    genre: 'Thriller',
    description: 'A thrilling dinosaur adventure.',
    imagePath: 'jurassic-park.jpg',
  },
  {
    title: 'Godzilla',
    genre: 'Comedy',
    description: 'A lighthearted monster tale.',
    imagePath: 'godzilla.jpg',
  },
  {
    title: 'Evil Dead',
    genre: 'Horror',
    description: 'A spine-chilling classic.',
    imagePath: 'evil-dead.jpg',
  },
];

// App component with routing setup
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routing */}
        <Route path="/" element={<MainView movies={movies} />} />
      </Routes>
    </Router>
  );
};

// Create root element and render App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // Render App using createRoot
