import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'
const Browse = () => {
const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  
useNowPlayingMovies()
  return (
    <div>
      <Header />
      {showGptSearch ? <GptSearch />:<><MainContainer/>
        <SecondaryContainer/></>}
      
    </div>
  )
}

export default Browse
Browse