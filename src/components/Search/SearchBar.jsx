import SearchIcon from '@mui/icons-material/Menu';
import {TextField,InputAdornment,Container, Typography} from '@mui/material';
import axios from 'axios';
import { useState,useEffect, Suspense } from 'react';
import SearchResults from './SearchResults';
import Loader from '../../assets/Loader.svg?react'

function SearchBar() {
  const [searchTerm,setSearchTerm] = useState('')
  const [searchResults,setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if(searchTerm.length >= 3){
          handleSearch()
      }
    }, 3000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

   
const handleSearch = async () => {
    setIsLoading(true)
         await axios.get(`/api/data?searchTerm=${searchTerm}`)
        .then(res => {
            setSearchResults(res.data.Search)
        }).catch(err => {
            console.error(err)
        }).finally(()=>{
          setIsLoading(false)
        })
    
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
      sx={{ width: 400 }}
    />
   {
    isLoading ? (
      <div>
        <Loader/>
      </div>
    ): (
      <SearchResults results={searchResults}/>
    )
   }
    </Container>
  );
}

export default SearchBar;
