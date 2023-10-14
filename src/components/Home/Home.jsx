import React from 'react'
import Button from '@mui/material/Button';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import { Container } from '@mui/material';
import { containerStyle } from './HomeStyle';

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