export default function NumResults({ dataMovies }) {
  return (
    <p className="num-results">
      Found <strong>{dataMovies.length}</strong> results
    </p>
  );
}
