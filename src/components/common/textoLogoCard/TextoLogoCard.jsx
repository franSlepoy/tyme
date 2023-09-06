import { Box, Typography } from '@mui/material'
import React from 'react'

const TextoLogoCard = (props) => {
  return (
    <>
    <Box>
        <Box sx={{ml:6, mt: 2}}>
        <img  src={props.logo} alt="" />
        </Box>
        
        <Typography  sx={{ml:8, mt:3,width:"161px", fontFamily:"Manrope", fontSize:"18px", fontWeight:"800", lineHeight: "28ox", letterSpacing:"0.5px", color:"#003350"}}>
           {props.titulo}
        </Typography>
        <Typography sx={{ml:8, mt:2,width:"350px", fontFamily:"Manrope", fontSize:"18px", fontWeight:"800", lineHeight: "28ox", letterSpacing:"0.5px", color:"#003350"}}>
           {props.texto}
        </Typography>
    </Box>
    </>
  )
}

export default TextoLogoCard