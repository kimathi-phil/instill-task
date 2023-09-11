import React from "react";
import Movie from "../utils/shared.ts";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (
    <div className="bg-white dark:bg-gray-200 p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
      <div className="mb-4">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <h2 className="text-xl font-semibold">{movie.Title}</h2>
      <p className="text-gray-600">
        Year: {movie.Year} | Type: {movie.Type}
      </p>
    </div>
  );
};

export default MovieItem;
