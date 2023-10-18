import React from 'react'
import NavBar from '../NavBar/NavBar';
import { Container } from '@mui/material';
import { containerStyle, homeStyle } from './HomeStyle';
import SearchBar from '../Search/SearchBar';

const Home = () => {
  return (
    <>
      <div style={homeStyle}>
      <NavBar/>
      <Container style={containerStyle}>
      <SearchBar></SearchBar>
      </Container>
      </div>
    </>
  )
}

export default Home