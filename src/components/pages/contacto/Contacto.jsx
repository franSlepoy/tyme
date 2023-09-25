import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import Formulario from '../../common/formulario/Formulario'

const Contacto = () => {
  return (
   <>

<Typography variant='h1' sx={{ padding:0, fontFamily: "Manrope", fontWeight:"800", color: "#003350", fontSize: "58px", textAlign: "center", letterSpacing: -2.23, mt: "70px" }}>We are Open ¡Contáctanos!</Typography>
      
     <Box display={"flex"}>
     
     <Formulario/>

  <Box mt={"139px"} ml={"8%"} >
    <img  width={"550px"} src="/open.jpg" alt="" />
  </Box>

     </Box>
    <Box mt={-40} ml={76} >
    <img  src="/firuleteQueHacemos.png" alt="" />
    </Box>
    
    
     
    
   </>
  )
}

export default Contacto
