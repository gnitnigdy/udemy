export default function NumResults({ dataMovies }) {
  return (
    <p className="num-results">
      Found <strong>{dataMovies ? dataMovies.length : 0}</strong> results
    </p>
  );
}
