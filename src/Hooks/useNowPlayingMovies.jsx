import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../Utils/movieSlice'
import { options } from '../Utils/constants'
const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()
  const nowPlayingMovies = async () =>{
    const Data = await 
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)

    const jsonData = await Data.json()
    // console.log(jsonData.results)
    dispatch(addNowPlayingMovies(jsonData.results))
  } 

  useEffect(() => {
    nowPlayingMovies()
  }, [])   
}

export default useNowPlayingMovies