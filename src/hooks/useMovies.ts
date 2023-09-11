import { useState } from "react";
import { fetchMovies } from "../data/movieAPI";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");

  const searchMovies = async (searchTerm: string) => {
    const result = await fetchMovies(searchTerm, currentPage);
    setMovies(result);
  };

  return {
    movies,
    searchMovies,
    currentPage,
    setCurrentPage,
    currentSearchTerm,
    setCurrentSearchTerm
  };
};

export default useMovies;
