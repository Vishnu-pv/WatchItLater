import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
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
    <Grid container spacing={2}>
      {results.map((result, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <img src={result.Poster} alt={result.Title} />
            <h3>{result.Title}</h3>
            <p>Year: {result.Year}</p>
            <p>Type: {result.Type}</p>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </div>
  )
}

export default SearchResults