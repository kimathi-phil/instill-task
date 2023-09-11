import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import useMovies from "./hooks/useMovies";

const App: React.FC = () => {
  const {
    movies,
    searchMovies,
    currentPage,
    setCurrentPage,
    currentSearchTerm,
  } = useMovies();
  const totalPages = 100;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    searchMovies(currentSearchTerm);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold p-4">Movie Search</h1>
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
