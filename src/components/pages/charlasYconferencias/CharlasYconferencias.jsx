import { Box, Typography } from '@mui/material'
import React from 'react'

const CharlasYconferencias = () => {
  return (
    <>
    <Typography sx={{color:"#003350", fontFamily:"Manrope", fontSize:"58px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-2.32px", ml:6, mt:"80px"}}>Charlas y Conferencias</Typography>
    <Box sx={{
          display:"flex",
          backgroundColor:"#F9F9F9",  
          width:"1448px", ml:-16,
          mt: "88px",
          height:"522px",
          position:"relative"
          
        }} >
        <Box>
        <Box sx={{borderRadius:"100px",width:"90px", height:"90px",mt:4,ml:18, backgroundColor:"#71EAEA"}}>
          </Box>
          <Box sx={{mt:"-68px", width:"535px",}}>
            <Typography  sx={{width:"535px", ml:22,color:"#003350", fontFamily:"Manrope", fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-1.68px" }} >Lo que evolucionaes la humanidad y la tecnología acompaña</Typography><br />
            <Typography sx={{position:"absolute",width:"519px", ml:22,color:"#003350", fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"-0.5px" }}>Apasionado de la inspiración, la alegría y el poder de transmitir experiencias y conocimientos, Javier Krawicki imparte charlas y conferencias en todo el mundo sobre las Personas y Tecnología, el maridaje perfecto.</Typography>
            <Typography sx={{width:"519px", ml:22, mt:20,color:"#003350", fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"-0.5px" }}>Contacta con nosotros si quieres contratar a Javier para tu próxima conferencia, team building, evento o curso.</Typography>
            </Box>
        </Box>

      <Box sx={{ml:25, mt:"68px" }}>
        <img  src="/curso.png" alt="" />
      </Box>   
    </Box>

    <Typography sx={{ ml:6,mt:8, color:"#A3B4BF", fontFamily:"Manrope", fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-1.68px"}}>
    ¿Cuál son las temáticas de las charlas de Javier Krawicki? Están divididas en dos dimensiones: foco en las personas y foco en la tecnología.
    </Typography>

    <Box sx={{width:"1448px", ml:-16, mt:18}}>
        <img width={"100%"} src="/focoEnPersonas.png" alt="" />
    </Box>
    
    </>
  )
}

export default CharlasYconferencias
