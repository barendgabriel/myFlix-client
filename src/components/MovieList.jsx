import Movie from './Movie';

export function MovieList({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
}
