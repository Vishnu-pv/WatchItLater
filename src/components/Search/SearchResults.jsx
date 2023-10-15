import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
import { headingStyle } from '../Login/LoginStyle';


const SearchResults = ({ results }) => {
    if (!results || results.length === 0) {
        return (
          <div>
            <h2 style={headingStyle}>Search Results</h2>
            <p style={headingStyle}>No results found.</p>
          </div>
        );
    }

  return (
<div>
  <h2 style={headingStyle}>Search Results</h2>
  <Grid container spacing={3}>
    {results.map((result, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Paper elevation={3} style={{display:'flex',flexDirection: 'column',alignItems:'center',justifyContent:'center', padding: '16px' }}>
          
          <Avatar alt={result.Title} src={result.Poster}    style={{ width: '200px', height: '250px', borderRadius: '20px' }} />
         
          <h3>{result.Title}</h3>
          <p style={{fontWeight:700}}>Year: {result.Year}</p>
          <p>Type:  {result.Type}</p>
        </Paper>
      </Grid>
    ))}
  </Grid>
</div>

  )
}

export default SearchResults