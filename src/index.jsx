// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use new import for React 18+
import './index.scss'; // Import your styles
import { MainView } from './components/MainView/MainView'; // Import MainView

const movies = [
  { title: 'Jurassic Park', genre: 'Thriller' },
  { title: 'Godzilla', genre: 'Comedy' },
  { title: 'Evil Dead', genre: 'Horror' },
];

const App = () => {
  return (
    <div>
      <h1>Netflix</h1>
      <MainView movies={movies} /> {/* Pass movies to MainView */}
    </div>
  );
};

// Create root element and render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // Render App using createRoot
