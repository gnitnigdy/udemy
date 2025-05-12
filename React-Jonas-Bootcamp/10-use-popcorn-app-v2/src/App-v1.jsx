import { useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import NumResults from "./components/NumResults";
import Logo from "./components/Logo";
import Main from "./components/Main";
import WatchedSummary from "./components/WatchedSummary";
import WatchedList from "./components/WatchedList";
import MovieList from "./components/MovieList";
import Box from "./components/Box";
import { useEffect } from "react";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

const API_KEY = "f00fb339";

export default function App() {
  //const dataFromAPI =
  const [tempMovieData, setTempMovieData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedID, setSelectedID] = useState(null);

  //tanpa menggunakan async function
  // useEffect(function () {
  //   fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=interstellar`)
  //     .then((res) => res.json())
  //     .then((data) => setTempMovieData(data.Search));
  // }, []);

  //menggunakan async function

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getMovieData = async () => {
      try {
        setIsLoading(true);
        //always clear error state
        setError("");
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
          { signal }
        );

        if (!response.ok) {
          throw new Error("Something went wrong with fetching movies");
        }

        const data = await response.json();
        //console.log("ini dari dalam async");
        console.log(data);
        setTempMovieData(data.Search);
        if (data.Response === "False") {
          throw new Error("Movie not found!");
        }
        setIsLoading(false);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch dibatalkan karena query baru masuk");
        } else {
          console.log(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    if (query.length < 3) {
      setTempMovieData([]);
      setError("");
      return;
    }
    getMovieData();

    return () => {
      controller.abort();
    };
  }, [query]);

  /*
  //for reference

  useEffect(() => {
    console.log(`After initial render`);
  }, []);

  useEffect(() => {
    console.log(`Every render`);
  });

  console.log(`Logical Component Render`);

  useEffect(() => {
    console.log(`Render jika query berubah`);
  }, [query]);

  */

  // const [tempMovieData, setTempMovieData] = useState([
  //   {
  //     imdbID: "tt1375666",
  //     Title: "Inception",
  //     Year: "2010",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  //   },
  //   {
  //     imdbID: "tt0133093",
  //     Title: "The Matrix",
  //     Year: "1999",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  //   },
  //   {
  //     imdbID: "tt6751668",
  //     Title: "Parasite",
  //     Year: "2019",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  //   },
  // ]);

  const [tempWatchedData, setTempWatchedData] = useState([
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      runtime: 148,
      imdbRating: 8.8,
      userRating: 10,
    },
    {
      imdbID: "tt0088763",
      Title: "Back to the Future",
      Year: "1985",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      runtime: 116,
      imdbRating: 8.5,
      userRating: 9,
    },
  ]);

  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(
    tempWatchedData.map((movie) => movie.imdbRating)
  );
  const avgUserRating = average(
    tempWatchedData.map((movie) => movie.userRating)
  );
  const avgRuntime = average(tempWatchedData.map((movie) => movie.runtime));

  return (
    <>
      <Navbar>
        <Logo />
        <Searchbar query={query} setQuery={setQuery} />
        <NumResults dataMovies={tempMovieData} />
      </Navbar>
      <Main>
        <Box>
          {/* {isLoading ? (
            <Loader>{error}</Loader>
          ) : (
            <MovieList dataMovies={tempMovieData} />
          )} */}
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList dataMovies={tempMovieData} />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box
          element={
            <>
              <WatchedSummary
                watched={tempWatchedData}
                avgImdbRating={avgImdbRating}
                avgUserRating={avgUserRating}
                avgRuntime={avgRuntime}
              />
              <WatchedList watched={tempWatchedData} />
            </>
          }
        />
      </Main>
    </>
  );
}
