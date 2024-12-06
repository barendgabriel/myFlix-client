import React from 'react';
import ReactDOM from 'react-dom/client'; // Use new import for React 18+
import './index.scss'; // Import your styles
import { MainView } from './components/MainView/MainView'; // Import MainView
import { MovieView } from './components/MovieView/MovieView'; // Import MovieView
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components

const movies = [
  { title: 'Jurassic Park', genre: 'Thriller' },
  { title: 'Godzilla', genre: 'Comedy' },
  { title: 'Evil Dead', genre: 'Horror' },
];

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<MainView movies={movies} />} />
        <Route path="/movie/:id" element={<MovieView />} />
      </Routes>
    </Router>
  );
};

// Create root element and render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // Render App using createRoot
