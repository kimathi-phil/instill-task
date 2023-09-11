import axios from "axios";

const API_URL = "http://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchMovies = async (searchTerm: string, page: number = 1) => {
  const response = await axios.get(
    `${API_URL}?apikey=${API_KEY}&s=${searchTerm}&page=${page}`
  );
  const data = await response.data;
  return data.Search;
};
