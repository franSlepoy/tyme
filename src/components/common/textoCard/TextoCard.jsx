import { Box, Typography } from '@mui/material'
import React from 'react'

const TextoCard = (props) => {
  return (
    <>
    <Box>
        <Typography sx={{ml:8, mt:5,width:"461px", fontFamily:"Manrope", fontSize:"18px", fontWeight:"800", lineHeight: "28px", letterSpacing:"0.35px", color:"#003350"}}>
           {props.titulo}
        </Typography>
        <Typography sx={{ml:8, mt:5,width:"421px", fontFamily:"Manrope", fontSize:"18px", fontWeight:"100", lineHeight: "28px", letterSpacing:"0.5px", color:"#003350"}}>
           {props.texto}
        </Typography>
    </Box>
    </>
  )
}

export default TextoCard
