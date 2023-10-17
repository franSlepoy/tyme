import { Container } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import NavBar from './components/common/navbar/NavBar'
import Home from './components/pages/home/Home'
import Nosotros from './components/pages/nosotros/Nosotros'
import QueHacemos from './components/pages/queHacemos/QueHacemos'
import Manifiesto from './components/pages/manifiesto/Manifiesto'
import TicTac from './components/pages/ticTac/TicTac'
import Contacto from './components/pages/contacto/Contacto'
import CharlasYconferencias from './components/pages/charlasYconferencias/CharlasYconferencias'
import Tendencias from './components/pages/tendencias/Tendencias'
import Menu from './components/common/navbar/Menu'

import ReactGA from 'react-ga';
import { useEffect } from 'react';

function initializeReactGA() {
  ReactGA.initialize('G-0S9EX284TH');
  ReactGA.pageview(window.location.pathname + window.location.search);
}


const App = () => {

  useEffect(() => {
    initializeReactGA();
}, []);

  return (
    <>
    <NavBar/>
   <Container sx={{ mt: 5}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='/queHacemos' element={<QueHacemos/>}/>
      <Route path='/manifiesto' element={<Manifiesto/>}/>
      <Route path='/ticTacElTiempo' element={<TicTac/>}/>
      <Route path='/charlasYconferencias' element={<CharlasYconferencias/>}/>
      <Route path='/tendencias' element={<Tendencias/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/menu' element={<Menu/>}/>
    </Routes>
    
   </Container>
   <Footer/>
    </>
  
  
     
  
)
}

export default App

