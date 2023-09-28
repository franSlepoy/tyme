import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}> 
       <Typography sx={{ fontFamily:"Manrope",textTransform: 'none', textDecoration:"none", mt:3, ml:2,  fontSize:"16px", fontStyle:"normal",lineHeight:"20px",'&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA"} }} component={NavLink} to={"/"}>Inicio</Typography>
        <Typography sx={{ fontFamily:"Manrope", textTransform: 'none',textDecoration:"none", mt:3, ml:2,  fontSize:"16px", fontStyle:"normal",lineHeight:"20px",'&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA"}}} component={NavLink} to={"/nosotros"} >Nosotros</Typography>
        <Typography  sx={{ fontFamily:"Manrope", textTransform: 'none',textDecoration:"none", mt:3, ml:2,  fontSize:"16px", fontStyle:"normal",lineHeight:"20px" ,'&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA"}}} component={NavLink} to={"/queHacemos"} >Qué hacemos</Typography>
        <Typography  sx={{ fontFamily:"Manrope", textTransform: 'none', textDecoration:"none", mt:3, ml:2, fontSize:"16px", fontStyle:"normal",lineHeight:"20px",'&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA"}}}component={NavLink} to={"/manifiesto"} >Manifiesto</Typography>
        <Typography  sx={{ fontFamily:"Manrope", textTransform: 'none', textDecoration:"none", mt:3, ml:2, fontSize:"16px", fontStyle:"normal",lineHeight:"20px",'&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA"}}}component={NavLink} to={"/ticTacElTiempo"} >Tic Tac: el tiempo</Typography>
        <Typography  sx={{ fontFamily:"Manrope", textTransform: 'none', textDecoration:"none", mt:3, ml:2, fontSize:"16px", fontStyle:"normal",lineHeight:"20px",'&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA"}}}component={NavLink} to={"/charlasYconferencias"} >Charlas y Conferencias</Typography>
        <Typography  sx={{fontFamily:"Manrope", textTransform: 'none', textDecoration:"none", mt:3, ml:2, mr:"20px",  fontSize:"16px", fontStyle:"normal",lineHeight:"20px",'&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA"}}}component={NavLink} to={"/tendencias"} >Tendencias</Typography>
        <Typography component={NavLink} to={"/contacto"}  variant="contained" sx={{textDecoration:"none", fontFamily:"Manrope", textTransform: 'none', mt:"47px", color: "#003350", textAlign:"center",fontSize:"16px", fontStyle:"normal",lineHeight:"20px", padding: "30px 40px", borderRadius:"100px", mr:"25.5px", backgroundColor:"#73F0A2",'&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA"}}} > Contacto </Typography>
    </Box>
   
  )
}

export default Menu
