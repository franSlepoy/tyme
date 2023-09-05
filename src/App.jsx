import { Container } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import NavBar from './components/common/navbar/NavBar'
import Home from './components/pages/home/Home'
import Nosotros from './components/pages/nosotros/Nosotros'


const App = () => {
  return (
    <>
    <NavBar/>
   <Container sx={{ mt: 5}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
    </Routes>
    
   </Container>
   <Footer/>
    </>
  
  
     
  
)
}

export default App

