import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Footer() {
  return (
    <>
    <Box sx={{backgroundColor:"#F9F9F9", width:"100%", height:"277px", display:"flex"}}>
      <Box sx={{display:"flex"}} >
      <Box sx={{mt:"47px", ml:"175px", width:"125px"}}>
        <img src="/logoTyme.png" alt="logo" /> 
        </Box>
        <Box>
          <Typography>Inicio</Typography>
          <Typography>Nosotros</Typography>
          <Typography>Qué hacemos</Typography>
          <Typography>Manifiesto</Typography>
        </Box>
        <Box>
          <Typography>Tic Tac: el tiempo</Typography>
          <Typography>Charlas y Conferencias</Typography>
          <Typography>Tendencias</Typography>
          <Typography>Contacto</Typography>
        </Box>
        <Box>
         <Box>
         <LinkedInIcon/>
         <FacebookIcon/>
         <InstagramIcon/>
         </Box>
        <Typography>2023 © Tyme.</Typography>
        <Typography>Todos los derechos reservados.</Typography>
        </Box>
      </Box>

  

    </Box>
    </>
  );
}