import Logo from "./Logo";
import NumResults from "./NumResults";
import Searchbar from "./Searchbar";

export default function Navbar({ query, onSetQuery, dataMovies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Searchbar query={query} onSetQuery={onSetQuery} />
      <NumResults dataMovies={dataMovies} />
    </nav>
  );
}
