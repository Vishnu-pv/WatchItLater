import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Avatar, Button, avatarClasses } from '@mui/material';
import { headingStyle } from '../Login/LoginStyle';
import StarIcon from '@mui/icons-material/Star';
import { avatarStyle, container, paperStyle } from './SearchStyle';
import { Suspense } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import { addToWatchList } from '../../firebase';


const SearchResults = ({ results }) => {

  const { signIn,user,logOut } = useUserAuth()
  
  const handleSave = async (result) => {
    try{ 
      addToWatchList(result,user.uid)
    }catch(err){
      console.error(err)
    }
  }

  return (
<div style={container}>
  <h2 style={headingStyle}>Search Results</h2>
  <Grid container spacing={1} justifyContent="center" overflow="hidden">
    {results.map((result, index) => (
      <Grid item xs={12} sm={6} md={4} key={index} style={{width:'150px', padding: '15px 0px', display: 'flex', justifyContent: 'center'}}>
        <Paper elevation={5} style={paperStyle}>
          <Avatar style={avatarStyle} alt={result.Title} src={result.Poster}  />
          <div>
            <div>
            <h4>{result.Title}</h4> 
            <p style={{fontWeight:500}}>{result.Year}</p>
            </div>
            <div>
            <p style={{fontWeight:500}}>{result.Type.toUpperCase()}</p>
            <Button onClick={() => handleSave(result)}>Add to WatchList</Button>
            </div>
          </div>
        </Paper>
      </Grid>
    ))}
  </Grid>
</div>
  )
}

export default SearchResults