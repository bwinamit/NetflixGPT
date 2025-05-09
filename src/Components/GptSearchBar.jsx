import React from 'react';
import { useSelector } from 'react-redux';
import Lang from '../Utils/LanguageConstants';

const langMap = {
  en: 'english',
  hi: 'hindi',
  es: 'spanish'
};

const GptSearchBar = () => {
  const languageCode = useSelector((store) => store.config.Language);
  const langKey = langMap[languageCode] || 'english';

  return (
    <div className="relative w-full h-screen">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full">
        <form className="flex bg-white rounded-md overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder={Lang[langKey]?.WhatWouldYouLikeToWatch || 'What would you like to watch?'}
            className="px-4 py-2 w-64 text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 text-white font-semibold hover:bg-red-700"
          >
            {Lang[langKey]?.Search || 'Search'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
