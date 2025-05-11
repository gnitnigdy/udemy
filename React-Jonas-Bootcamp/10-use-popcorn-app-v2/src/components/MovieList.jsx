//import { useState } from "react";
import Movie from "./Movie";

export default function MovieList({ dataMovies }) {
  //const [movies, setMovies] = useState(dataMovies);
  return (
    <ul className="list">
      {dataMovies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
