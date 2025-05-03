import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  // console.log("hi", movies);
  return (
    <div className="my-4 ">
      <h1 className="text-2xl font-semibold mb-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0">
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No movies available.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
