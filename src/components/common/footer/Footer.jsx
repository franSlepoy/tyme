import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, NavLink } from 'react-router-dom';






export default function Footer() {
  const linkStyles = {
    textDecoration: 'none',
    color: '#003350',
  };
  return (
   
    <>
    <Box sx={{mt:"149px",backgroundColor:"#F9F9F9", width:"100%", height:"277px"}}>
      <Box sx={{display:"flex"}} >
      <Box sx={{mt:"47px", ml:"175px", width:"125px"}}>
        <img src="/logoTyme.png" alt="logo" /> 
        </Box>
        <Box sx={{width:"107px", ml:"86px", mt:"56px", textDecoration:"none"}}>
         <Link component={NavLink} to={"/"} underline="none" sx={{ textDecoration: 'none' }}>
       <Typography  sx={{ fontFamily: "Manrope", color: "#003350", fontSize: "16px", fontWeight: "300", lineHeight: "20px", letterSpacing: "0.1px" }}>
      Inicio
        </Typography>
        </Link> 
         <Link component={NavLink} to={"/nosotros"}>
         <Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}} >Nosotros</Typography>
         </Link>
         <Link component={NavLink} to={"/queHacemos"}>
        <Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}} >Qué hacemos</Typography>
        </Link>
        <Link component={NavLink} to={"/manifiesto"}>
        <Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}} >Manifiesto</Typography>
        </Link>  
       </Box>
        
        <Box sx={{width:"181px", ml:"18px", mt:"56px"}}>
          <a href=""></a>
          <Link to={"/ticTacElTiempo"}><Typography sx={{fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}} >Tic Tac: el tiempo</Typography></Link>
          <Link to={"/charlasYconferencias"}><Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}}>Charlas y Conferencias</Typography></Link>
          <Link to={"/tendencias"}> <Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}}>Tendencias</Typography></Link>
         <Link to={"/contactp"}><Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}}>Contacto</Typography></Link>
          
        </Box>
        <Box ml={"90px"}>
  <Box sx={{ mt: "56px", textAlign: "end" }}>
    <Link href="URL_de_LinkedIn" color="#003350" target="_blank" rel="noopener noreferrer">
      <LinkedInIcon sx={{ fontSize: 46, color: "#003350" }} />
    </Link>
    <Link href="URL_de_Facebook" color="inherit" target="_blank" rel="noopener noreferrer">
      <FacebookIcon sx={{ fontSize: 46, color: "#003350" }}  />
    </Link>
    <Link href="URL_de_Instagram" color="inherit" target="_blank" rel="noopener noreferrer">
      <InstagramIcon sx={{ fontSize: 46, color: "#003350" }}  />
    </Link>
  </Box>
        <Typography sx={{mt:"20px", fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px", textAlign:"end"}}>2023 © Tyme.</Typography>
        <Typography sx={{ml:"260px", fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}}>Todos los derechos reservados.</Typography>
        </Box>
      </Box>

  

    </Box>
    </>
  );
}