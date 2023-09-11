import { useState } from "react";
import { fetchMovies } from "../data/movieAPI";

const useMovies = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (searchTerm: string) => {
    const result = await fetchMovies(searchTerm);
    setMovies(result);
  };

  return { movies, searchMovies };
};

export default useMovies;
