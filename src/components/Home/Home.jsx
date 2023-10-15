import React from 'react'
import NavBar from '../NavBar/NavBar';
import { Container } from '@mui/material';
import { containerStyle } from './HomeStyle';
import SearchBar from '../Search/SearchBar';

const Home = () => {
  return (
    <>
     <NavBar/>
      <Container style={containerStyle}>
      <SearchBar></SearchBar>
      </Container>
    </>
  )
}

export default Home