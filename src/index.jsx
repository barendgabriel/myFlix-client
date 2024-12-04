import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'; // Import your styles
import { MovieList } from './components/MovieList';

const movies = [
  {
    title: 'Jurrassic Park',
    genre: 'Thriller',
  },
  {
    title: 'Godzilla',
    genre: 'Comedy',
  },
  {
    title: 'Evil Dead',
    genre: 'Horror',
  },
];
const App = () => {
  return (
    <div>
      <h1>Netflix</h1>
      <div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
