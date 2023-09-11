import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import useMovies from "./hooks/useMovies";

const App: React.FC = () => {
  const { movies, searchMovies } = useMovies();

  return (
    <div className="App">
      <h1 className="text-3xl font-bold p-4">Movie Search</h1>
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
