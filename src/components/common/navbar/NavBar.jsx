
import { AppBar, Box, Button, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'



const NavBar = () => {
  return (
    <>

      <AppBar position="static" color="transparent" sx={{boxShadow:0}}   >
        <Toolbar sx={{justifyContent:"space-around"}}>
        <Box sx={{mt:"47px", ml:"29px", width:"125px", height:"52px"}}>
        <img src="/logoTyme.png" alt="logo" /> 
        </Box>
           
        <Button  sx={{ fontFamily:"Manrope",textTransform: 'none', mt:"47px", ml:"20px", color:"black", textAlign:"center",fontSize:"16px", fontStyle:"normal",lineHeight:"20px",'&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA"} }} component={NavLink} to={"/"}>Inicio</Button>
        <Button  sx={{ fontFamily:"Manrope", textTransform: 'none', mt:"47px", color:"black", textAlign:"center",fontSize:"16px", fontStyle:"normal",lineHeight:"20px",'&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA"}}} component={NavLink} to={"/nosotros"} >Nosotros</Button>
        <Button  sx={{ fontFamily:"Manrope", textTransform: 'none', mt:"47px", color:"black", textAlign:"center",fontSize:"16px", fontStyle:"normal",lineHeight:"20px" ,'&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA"}}} component={NavLink} to={"/queHacemos"} >Qué hacemos</Button>
        <Button  sx={{ fontFamily:"Manrope", textTransform: 'none', mt:"47px", color:"black", textAlign:"center",fontSize:"16px", fontStyle:"normal",lineHeight:"20px",'&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA"}}}component={NavLink} to={"/manifiesto"} >Manifiesto</Button>
        <Button  sx={{ fontFamily:"Manrope", textTransform: 'none', mt:"47px", color:"black", textAlign:"center",fontSize:"16px", fontStyle:"normal",lineHeight:"20px",'&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA"}}}component={NavLink} to={"/ticTacElTiempo"} >Tic Tac: el tiempo</Button>
        <Button  sx={{ fontFamily:"Manrope", textTransform: 'none', mt:"47px", color:"black", textAlign:"center",fontSize:"16px", fontStyle:"normal",lineHeight:"20px",'&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA"}}}component={NavLink} to={"/charlasYconferencias"} >Charlas y Conferencias</Button>
        <Button  sx={{fontFamily:"Manrope", textTransform: 'none', mt:"47px", mr:"20px", color:"black", textAlign:"center",fontSize:"16px", fontStyle:"normal",lineHeight:"20px",'&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA"}}}component={NavLink} to={"/tendencias"} >Tendencias</Button>
        <Button component={NavLink} to={"/contacto"}  variant="contained" sx={{fontFamily:"Manrope", textTransform: 'none', mt:"47px", color: "#003350", textAlign:"center",fontSize:"16px", fontStyle:"normal",lineHeight:"20px", padding: "30px 40px", borderRadius:"100px", mr:"25.5px", backgroundColor:"#73F0A2",'&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA"}}} > Contacto </Button>
        
        </Toolbar>
      </AppBar>
      
      
      
     
    
    </>
  )
}

export default NavBar
