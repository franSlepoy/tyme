import { Container } from '@mui/material'
import React from 'react'
import NavBar from './components/common/navbar/NavBar'
import Home from './components/pages/home/Home'


const App = () => {
  return (
    <>
    <NavBar/>
   <Container sx={{ mt: 5}}>
    <Home/>
   </Container>
    </>
  
  
     
  
)
}

export default App

