import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

export default function Main({
  dataMovies,
  onOpen1,
  isOpen1,
  isOpen2,
  onOpen2,
  dataWatchedMovies,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
}) {
  return (
    <main className="main">
      <ListBox isOpen1={isOpen1} onOpen1={onOpen1} dataMovies={dataMovies} />
      <WatchedBox
        isOpen2={isOpen2}
        onOpen2={onOpen2}
        dataWatchedMovies={dataWatchedMovies}
        avgImdbRating={avgImdbRating}
        avgUserRating={avgUserRating}
        avgRuntime={avgRuntime}
      />
    </main>
  );
}
