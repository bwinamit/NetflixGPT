import React from 'react';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-[80vh]">
      {/* Background Video */}
      <VideoBackground movieId={id} />

      {/* Movie Title and Overview */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start px-8 bg-gradient-to-r from-black via-transparent">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
