import React from 'react'
import NavBar from '../NavBar/NavBar';
import { Container, Paper, Typography } from '@mui/material';
import { containerStyle, homeStyle, libraryCard, library } from './HomeStyle';
import SearchBar from '../Search/SearchBar';

const Home = () => {
  return (
    <>
      <div style={homeStyle}>
      <NavBar/>
      <Container style={containerStyle}>
        <Typography variant="h5" color="black">My Library</Typography>
        <div style={library}>
       <div style={libraryCard}>
         <h1>Movies</h1>
        </div>
        <div style={libraryCard}>
         <h1>Series</h1>
        </div>
        <div style={libraryCard}>
         <h1>Others</h1>
        </div>
        </div>
      <SearchBar></SearchBar>
      </Container>
      </div>
    </>
  )
}

export default Home