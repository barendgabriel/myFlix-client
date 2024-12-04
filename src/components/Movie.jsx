import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div>
      {movie.title}-{movie.genre}
    </div>
  );
};

export default Movie;
