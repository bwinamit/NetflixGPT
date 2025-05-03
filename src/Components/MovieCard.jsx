import React from 'react';
import { CDN_IMG_URL } from '../Utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 transform transition-transform duration-300 hover:scale-105">
      <img
        src={CDN_IMG_URL + posterPath}
        alt="Movie Poster"
        className="w-full h-auto rounded-lg shadow-lg object-cover"
      />
    </div>
  );
};

export default MovieCard;
