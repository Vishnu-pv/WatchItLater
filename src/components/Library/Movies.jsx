import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { useUserAuth
 } from '../context/UserAuthContext'
 import { getUserWatchlist } from '../../firebase'
import SearchResults from '../Search/SearchResults'
 
const Movies = () => {
  const { signIn,user,logOut } = useUserAuth()
  const [movies,setMovies] = useState([])

  const fetchMovieList = async () => {
    
    const result = await getUserWatchlist(user.uid)
    console.log(result)
    setMovies(result)
  }

  useEffect(()=>{
     fetchMovieList()
  },[user])

  return (
    <>
        <NavBar/>
        <SearchResults results={movies}/>
    </>
  )
}

export default Movies