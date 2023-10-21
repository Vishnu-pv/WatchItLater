import React from 'react'
import NavBar from '../NavBar/NavBar';
import { Container, Paper, Typography } from '@mui/material';
import { containerStyle, homeStyle} from './HomeStyle';
import SearchBar from '../Search/SearchBar';
import Library from '../Library/Library';

const Home = () => {
  return (
    <>
      <div style={homeStyle}>
      <NavBar/>
      <Container style={containerStyle}>
        <Typography variant="h5" color="black">My Library</Typography>
        <Library/>
      <SearchBar></SearchBar>
      </Container>
      </div>
    </>
  )
}

export default Home