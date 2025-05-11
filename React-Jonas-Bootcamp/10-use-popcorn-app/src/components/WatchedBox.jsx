import Summary from "./Summary";
import WatchedList from "./WatchedList";

export default function WatchedBox({
  isOpen2,
  onOpen2,
  dataWatchedMovies,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
}) {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => onOpen2((open) => !open)}>
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <Summary
            dataWatchedMovies={dataWatchedMovies}
            avgImdbRating={avgImdbRating}
            avgUserRating={avgUserRating}
            avgRuntime={avgRuntime}
          />

          <WatchedList dataWatchedMovies={dataWatchedMovies} />
        </>
      )}
    </div>
  );
}
