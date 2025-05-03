import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-1/3 left-0 px-6 md:px-16 text-white max-w-2xl">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
        {title}
      </h1>
      <p className="text-sm md:text-lg mb-6 drop-shadow-lg line-clamp-3 leading-relaxed">
        {overview}
      </p>
      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-2 text-sm md:text-base font-semibold rounded-lg hover:bg-opacity-80 transition-shadow shadow-lg hover:shadow-xl focus:outline-none">
          ▶ Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white px-6 py-2 text-sm md:text-base font-semibold rounded-lg hover:bg-opacity-50 transition-shadow shadow-lg hover:shadow-xl focus:outline-none">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
