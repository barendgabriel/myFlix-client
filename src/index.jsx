// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use React 18+ import
import './index.scss'; // Import your styles
import { MainView } from './components/MainView/MainView'; // Import MainView
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components

// Define some sample movie data
const movies = [
  { title: 'Jurassic Park', genre: 'Thriller' },
  { title: 'Godzilla', genre: 'Comedy' },
  { title: 'Evil Dead', genre: 'Horror' },
];

// App component with routing setup
const App = () => {
  return (
    <Router>
      {' '}
      {/* Wrapping app with BrowserRouter */}
      <h1>Netflix</h1>
      <Routes>
        {' '}
        {/* Define routing */}
        <Route path="/" element={<MainView movies={movies} />} />
        {/* You can add more routes here as needed */}
      </Routes>
    </Router>
  );
};

// Create root element and render App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // Render App using createRoot
