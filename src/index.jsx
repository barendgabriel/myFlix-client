// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainView from './components/MainView/MainView'; // Adjusted path
import MovieView from './components/MovieView/MovieView'; // Adjusted path

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/movies/:movieTitle" element={<MovieView />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
