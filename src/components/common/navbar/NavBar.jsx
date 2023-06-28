
import { Button, Drawer } from '@mui/material'
import React, { useState } from 'react'
import NavListDrawer from './NavListDrawer'



const NavBar = () => {
    const [open, setOpen]= useState(false)

  return (
    <>
      <Button variant="outlined" onClick={()=> setOpen(true)}> <img src='/public/icono.png' alt="" width={52} />Contacto </Button>
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
