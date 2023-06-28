
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
        <Button sx={{ml: 7}} component={NavLink} to={"/home"}>Home</Button>
        <Button component={NavLink} to={"/quienesSomos"} >Quienes somos?</Button>
        <Button component={NavLink} to={"/queHacemos"} >Que hacemos?</Button>
        <Button component={NavLink} to={"/blog"} >Blog</Button>
        <Button component={NavLink} to={"/podcast"} >Podcast</Button>
        <Button component={NavLink} to={"/clienes"} >Clientes</Button>
        <Button sx={{mr:10}} component={NavLink} to={"/speaking"} >Speaking</Button>
        
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
