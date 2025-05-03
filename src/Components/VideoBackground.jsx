import React, { useEffect, useState } from 'react';
import { options } from '../Utils/constants';

const VideoBackground = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  const getMovieVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
      );
      const jsonData = await data.json();

      const filteredData = jsonData.results.filter(
        (item) => item.type === 'Official Trailer' || item.type === 'Trailer'
      );
      const trailer = filteredData.length > 0 ? filteredData[0] : jsonData.results[0];

      if (trailer) {
        setTrailerKey(trailer.key);
        // console.log('Trailer:', trailer);
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideo();
    }
  }, [movieId]);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {trailerKey && (
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=${trailerKey}`}
          title="Movie Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
