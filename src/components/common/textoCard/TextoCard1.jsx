import { Box, Typography } from '@mui/material'
import React from 'react'

const TextoCard1 = (props) => {
  return (
    <>
     <Box p={8} sx={{ bgcolor:" #C5F6F6", borderRadius:"20px"}}>
        <Typography sx={{  fontFamily:"Manrope", fontSize:"24px", fontWeight:"700",  color:"#003350"}}>
           {props.titulo}
        </Typography>
        <Typography sx={{mt:2, fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>
           {props.texto}
        </Typography>
        <Typography sx={{ fontFamily:"Manrope", fontSize:"18px", fontWeight:"800", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>
           {props.textoOtro}
        </Typography>
    </Box>
    </>
  )
}

export default TextoCard1