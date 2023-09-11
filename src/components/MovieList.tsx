import React from "react";
import MovieItem from "./MovieItem";
import Movie from "../utils/shared.ts";

interface Props {
  movies: Movie[];
}

const MovieList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies &&
          movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieList;
