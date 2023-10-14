import SearchIcon from '@mui/icons-material/Menu';
import {TextField,InputAdornment,Container} from '@mui/material';
import axios from 'axios';
import { useState,useEffect } from 'react';

function SearchBar() {
  const [searchTerm,setSearchTerm] = useState('')
  const [movie,setMovie] = useState([])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchTerm)
      handleSearch()
      // Send Axios request here
    }, 3000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

   
  const handleSearch = async () => {
    // Make your API request here using the `searchTerm` state
    // For example, you can use the fetch or Axios library.
    // Replace the URL with your API endpoint.
    const apiUrl = `http://www.omdbapi.com/?apikey=7a708271&s=${searchTerm}`;
    
    await axios.get(apiUrl)
    .then(res => {
        console.log(res.data)
        setMovie(res.data.Search)
        console.log(movie)
    }).catch(err => {
        console.error(err)
    })
    
  };


  const handleChange = (event) => {
    const {value} = event.target
    setSearchTerm(value)
  }


  return (
    <Container>
    <TextField
      label="Search Movies"
      variant="outlined"
      value={searchTerm}
      onChange={handleChange}
    />
    </Container>
  );
}

export default SearchBar;
