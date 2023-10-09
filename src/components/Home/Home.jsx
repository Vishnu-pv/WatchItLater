import React from 'react'
import Button from '@mui/material/Button';
import NavBar from '../NavBar/NavBar';

const Home = () => {
  return (
    <>
     <NavBar/>
      <h1>Hello World</h1>
      <Button variant="contained">Click Me</Button>
    </>
  )
}

export default Home