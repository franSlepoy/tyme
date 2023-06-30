
import { AppBar, Button, Drawer, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import NavListDrawer from './NavListDrawer'
import { NavLink } from 'react-router-dom'



const NavBar = () => {
    const [open, setOpen]= useState(false)

  return (
    <>

      <AppBar position="static" color="transparent">
        <Toolbar sx={{justifyContent:"space-around"}}>
        <img src="/logo.png" width={180} alt="logo" />    
        <Button  sx={{ml: 7, display: { xs: "none", sm:"block"}}} component={NavLink} to={"/"}>Home</Button>
        <Button sx={{ display: { xs: "none", sm:"block"}}} component={NavLink} to={"/quienesSomos"} >¿Quienes somos?</Button>
        <Button sx={{ display: { xs: "none", sm:"block"}}} component={NavLink} to={"/queHacemos"} >¿Que hacemos?</Button>
        <Button sx={{ display: { xs: "none", sm:"block"}}} component={NavLink} to={"/elTiempo"} >El Tiempo</Button>
        <Button sx={{ display: { xs: "none", sm:"block"}}} component={NavLink} to={"/clientes"} >Clientes</Button>
        <Button sx={{ display: { xs: "none", sm:"block"}}} component={NavLink} to={"/blog"} >Blog</Button>
        <Button sx={{ display: { xs: "none", sm:"block"}}} component={NavLink} to={"/podcast"} >Podcast</Button>
        <Button sx={{mr:10, display: { xs: "none", sm:"block"}}} component={NavLink} to={"/speaking"} >Speaking</Button>
        
        <Button variant="contained" color="inherit" onClick={()=> setOpen(true)}> <img src='/icono.png' alt="icono" width={52} />Contacto </Button>
        </Toolbar>
      </AppBar>
      
      <Drawer 
      open={open}
      anchor={'right'}
      onClose={()=> setOpen(false)}
      >
      <NavListDrawer/> 
      </Drawer>
     
    
    </>
  )
}

export default NavBar
