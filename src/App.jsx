import { Container } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import NavBar from './components/common/navbar/NavBar'
import Blog from './components/pages/blog/Blog'
import Podcast from './components/pages/podcast/Podcast'
import Clientes from './components/pages/clientes/Clientes'
import ElTiempo from './components/pages/elTiempo/ElTiempo'
import Home from './components/pages/home/Home'
import QueHacemos from './components/pages/queHacemos/QueHacemos'
import QuienesSomos from './components/pages/quienesSomos/QuienesSomos'
import Speaking from './components/pages/Speaking/Speaking'


const App = () => {
  return (
    <>
    <NavBar/>
   <Container sx={{ mt: 5}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/queHacemos' element={<QueHacemos/>}/>
      <Route path='/quienesSomos' element={<QuienesSomos/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/elTiempo' element={<ElTiempo/>}/>
      <Route path='/podcast' element={<Podcast/>}/>
      <Route path='/clientes' element={<Clientes/>}/>
      <Route path='/speaking' element={<Speaking/>}/>
    </Routes>
    
   </Container>
   <Footer/>
    </>
  
  
     
  
)
}

export default App

