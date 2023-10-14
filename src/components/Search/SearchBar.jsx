import SearchIcon from '@mui/icons-material/Menu';
import {TextField,InputAdornment,Container} from '@mui/material';
import axios from 'axios';
import { useState,useEffect } from 'react';
import SearchResults from './SearchResults';

function SearchBar() {
  const [searchTerm,setSearchTerm] = useState('')
  const [searchResults,setSearchResults] = useState([])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if(searchTerm.length >= 3){
        const apiUrl = `http://www.omdbapi.com/?apikey=7a708271&s=${searchTerm}`;
        axios.get(apiUrl)
        .then(res => {
            setSearchResults(res.data.Search)
        }).catch(err => {
            console.error(err)
        })
  
      }
     
     
    }, 3000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

   
  const handleSearch = async () => {
    // Make your API request here using the `searchTerm` state
    // For example, you can use the fetch or Axios library.
    // Replace the URL with your API endpoint.
  
    
  };


  const handleChange = (event) => {
    const {value} = event.target
    setSearchTerm(value)
  }


  return (
    <Container>
    <TextField
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={handleChange}
    />
    <SearchResults results={searchResults}/>
    </Container>
  );
}

export default SearchBar;
