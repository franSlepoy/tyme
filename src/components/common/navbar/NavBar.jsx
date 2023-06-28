
import { AppBar, Button, Drawer, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import NavListDrawer from './NavListDrawer'



const NavBar = () => {
    const [open, setOpen]= useState(false)

  return (
    <>

      <AppBar position="static" color="transparent">
        <Toolbar sx={{justifyContent:"space-around"}}>
        <img src="/logo.png" width={180} alt="logo" />    
        <Button sx={{ml: 7}}>Home</Button>
        <Button>Quienes somos?</Button>
        <Button>Que hacemos?</Button>
        <Button>Blog</Button>
        <Button>Podcast</Button>
        <Button>Clientes</Button>
        <Button sx={{mr:10}} >Speaking</Button>
        
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
