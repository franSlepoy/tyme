import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, NavLink } from 'react-router-dom';
import { Hidden } from '@mui/material';






export default function Footer() {
  const linkStyles = {
    textDecoration: 'none',
    color: '#003350',
  };
  return (
   
    <>
    <Hidden smDown>
    <Box sx={{mt:"149px",backgroundColor:"#F9F9F9", width:"100%", height:"277px"}}>
      <Box sx={{display:"flex"}} >
      <Box sx={{mt:"47px", ml:"175px", width:"125px"}}>
        <img src="/logoTyme.png" alt="logo" /> 
        </Box>
        <Box sx={{width:"107px", ml:"86px", mt:"56px"}}>
         <a style={{textDecoration:"none"}} href='/' >
       <Typography  sx={{  fontFamily: "Manrope", color: "#003350", fontSize: "16px", fontWeight: "300", lineHeight: "20px", letterSpacing: "0.1px" }}>
      Inicio
        </Typography>
        </a> 
         <Link to={"/nosotros"} style={{textDecoration:"none"}}  >
         <Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}} >Nosotros</Typography>
         </Link>
         <Link to={"/queHacemos"} style={{textDecoration:"none"}}  >
        <Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}} >Qué hacemos</Typography>
        </Link>
        <Link to={"/manifiesto"} style={{textDecoration:"none"}} >
        <Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}} >Manifiesto</Typography>
        </Link>  
       </Box>
        
        <Box sx={{width:"181px", ml:"18px", mt:"56px"}}>
         
          <Link to={'/ticTacElTiempo'} style={{textDecoration:"none"}}><Typography sx={{fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}} >Tic Tac: el tiempo</Typography></Link>
          <Link to={'/charlasYconferencias'} style={{textDecoration:"none"}} ><Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}}>Charlas y Conferencias</Typography></Link>
          <Link to={'/tendencias'} style={{textDecoration:"none"}} > <Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}}>Tendencias</Typography></Link>
         <Link to={'/contacto'} style={{textDecoration:"none"}}><Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}}>Contacto</Typography></Link>
          
        </Box>
        <Box ml={"90px"}>
  <Box sx={{ display:"flex",ml:50, mt: "56px", textAlign: "end" }}>
    <Box>
    <a href="https://www.linkedin.com/company/tymeconsulting/" color="#003350" target="_blank" rel="noopener noreferrer">
      <LinkedInIcon sx={{ fontSize: 46, color: "#003350" }} />
    </a>
    </Box>
    
    {/* <Box mt={"4px"}>
    <a href="https://twitter.com/tymeconsulting" color="#003350" target="_blank" rel="noopener noreferrer"  >
     <img  width={70} src="/twiter.png" alt="" />
    </a>
    </Box> */}
    
    {/* <Link href="URL_de_Facebook" color="inherit" target="_blank" rel="noopener noreferrer">
      <FacebookIcon sx={{ fontSize: 46, color: "#003350" }}  />
    </Link> */}
    <Box>
    <a href="https://www.instagram.com/tymeconsulting/" color="inherit" target="_blank" rel="noopener noreferrer">
      <InstagramIcon sx={{ fontSize: 46, color: "#003350", textAlign:"end" }}  />
    </a>
    </Box>
    
  </Box>
        <Typography sx={{mt:"20px", fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px", textAlign:"end"}}>2023 © Tyme.</Typography>
        <Typography sx={{ml:"260px", fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}}>Todos los derechos reservados.</Typography>
        </Box>
      </Box>
   </Box>
    </Hidden>

    <Hidden smUp>
    <Box sx={{ p:2,mt:"100px",backgroundColor:"#F9F9F9", width:"100%", height:"477px"}}>
    <Box  sx={{ ml:3, width:"125px"}}>
        <img src="/logoTyme.png" alt="logo" /> 
        </Box>
      <Box sx={{display:"flex"}} >
      
        <Box sx={{width:"90px", ml:3, mt:4}}>
         <a style={{textDecoration:"none"}} href='/' >
       <Typography  sx={{  fontFamily: "Manrope", color: "#003350", fontSize: "16px", fontWeight: "300", lineHeight: "20px", letterSpacing: "0.1px" }}>
      Inicio
        </Typography>
        </a> 
         <Link to={"/nosotros"} style={{textDecoration:"none"}}  >
         <Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}} >Nosotros</Typography>
         </Link>
         <Link to={"/queHacemos"} style={{textDecoration:"none"}}  >
        <Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}} >Qué hacemos</Typography>
        </Link>
        <Link to={"/manifiesto"} style={{textDecoration:"none"}} >
        <Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}} >Manifiesto</Typography>
        </Link>  
       </Box>
        
        <Box sx={{width:"100%", ml:6, mt:4}}>
         
          <Link to={'/ticTacElTiempo'} style={{textDecoration:"none"}}><Typography sx={{fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}} >Tic Tac: el tiempo</Typography></Link>
          <Link to={'/charlasYconferencias'} style={{textDecoration:"none"}} ><Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}}>Charlas y Conferencias</Typography></Link>
          <Link to={'/tendencias'} style={{textDecoration:"none"}} > <Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}}>Tendencias</Typography></Link>
         <Link to={'/contacto'} style={{textDecoration:"none"}}><Typography  sx={{mt:"11px",fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}}>Contacto</Typography></Link>
          
        </Box>
        </Box>
        
        <Box ml={3}>
  <Box sx={{ display:"flex", mt: "56px" }}>
    <Box>
    <a href="https://www.linkedin.com/company/tymeconsulting/" color="#003350" target="_blank" rel="noopener noreferrer">
      <LinkedInIcon sx={{ fontSize: 46, color: "#003350" }} />
    </a>
    </Box>
    
   {/*  <Box mt={"4px"}>
    <a href="https://twitter.com/tymeconsulting" color="#003350" target="_blank" rel="noopener noreferrer"  >
     <img  width={70} src="/twiter.png" alt="" />
    </a>
    </Box> */}
    
    {/* <Link href="URL_de_Facebook" color="inherit" target="_blank" rel="noopener noreferrer">
      <FacebookIcon sx={{ fontSize: 46, color: "#003350" }}  />
    </Link> */}
    <Box>
    <a href="https://www.instagram.com/tymeconsulting/" color="inherit" target="_blank" rel="noopener noreferrer">
      <InstagramIcon sx={{ fontSize: 46, color: "#003350" }}  />
    </a>
    </Box>
    
  </Box>
        <Typography sx={{mt:2, fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}}>2023 © Tyme.</Typography>
        <Typography sx={{ fontFamily:"Manrope",color:"#003350", fontSize:"16px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.1px"}}>Todos los derechos reservados.</Typography>
        </Box>
     
   </Box>
    </Hidden>


    
    </>
  );
}