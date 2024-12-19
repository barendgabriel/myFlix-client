import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainView from './components/MainView/MainView';
import MovieView from './components/MovieView/MovieView';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main view for the movie list */}
        <Route path="*" element={<MainView />} />

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
