import Movie from "./Movie";

export default function MovieList({ dataMovies }) {
  return (
    <ul className="list">
      {dataMovies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
