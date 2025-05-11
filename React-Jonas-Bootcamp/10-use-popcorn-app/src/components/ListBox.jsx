import MovieList from "./MovieList";

export default function ListBox({ isOpen1, onOpen1, dataMovies }) {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => onOpen1((open) => !open)}>
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MovieList dataMovies={dataMovies} />}
    </div>
  );
}
