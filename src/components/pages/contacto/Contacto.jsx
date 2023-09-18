import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Contacto = () => {
  return (
   <>

<Typography variant='h1' sx={{ padding:0, fontFamily: "Manrope", fontWeight:"800", color: "#003350", fontSize: "58px", textAlign: "center", letterSpacing: -2.23, mt: "70px" }}>We are Open ¡Contáctanos!</Typography>
      
     <Box display={"flex"}>
     <Box sx={{ml:"5%",mt:"99px", display:"flex", flexDirection:"column" }}>
     
     <TextField
       label="Nombre"
       id="standard-size-normal"
       
       variant="standard"
       sx={{mt:3,color:"darkblue", width:"452px"}}
     />
     <TextField
       label="Apellido"
       id="standard-size-normal"
       
       variant="standard"
       sx={{mt:3,color:"darkblue", width:"452px"}}
     />
     <TextField
       label="Email"
       id="standard-size-normal"
       
       variant="standard"
       sx={{mt:3,color:"darkblue", width:"452px"}}
     />
     <TextField
       label="País"
       id="standard-size-normal"
       
       variant="standard"
       sx={{mt:3,color:"darkblue", width:"452px"}}
     />
     <TextField
       label="Comentarios"
       id="standard-size-normal"
       
       variant="standard"
       sx={{mt:3,color:"darkblue", width:"452px"}}
     />
     <Box sx={{mt:5, mb:8}}>
   <Button variant='contained' sx={{mt:"31px", padding: "10px 24px", width:"177px", borderRadius:"100px", backgroundColor:"#003350", '&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA", color:"#F9F9F9", textAlign:"center", fontWeight:"700", lineHeight: "20px"}}}>Enviar</Button>
   </Box>
     
     
  </Box>

  <Box mt={"139px"} ml={"8%"}>
    <img src="/trabajadores.png" alt="" />
  </Box>

     </Box>
    <Box mt={10} ml={76} >
    <img  src="/firuleteQueHacemos.png" alt="" />
    </Box>
    
    
     
    
   </>
  )
}

export default Contacto
