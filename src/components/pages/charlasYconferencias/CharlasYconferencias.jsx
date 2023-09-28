import { Box, Button, Hidden, TextField, Typography } from '@mui/material'
import React from 'react'
import { CharlasData } from '../../../servidor/CharlasData'
import Carousel from 'react-material-ui-carousel'
import TextoCard1 from '../../common/textoCard/TextoCard1'
import Formulario from '../../common/formulario/Formulario'

const CharlasYconferencias = () => {
  return (
    <>
    <Hidden smDown>
    <Typography sx={{color:"#003350", fontFamily:"Manrope", fontSize:"58px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-2.32px", ml:2, mt:"80px"}}>Charlas y Conferencias</Typography>
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
            <Typography  sx={{width:"535px", ml:22,color:"#003350", fontFamily:"Manrope", fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-1.68px" }} >Lo que evoluciona es la humanidad y la tecnología acompaña</Typography><br />
            <Typography sx={{position:"absolute",width:"519px", ml:22,color:"#003350", fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"-0.5px" }}>Apasionado de la inspiración, la alegría y el poder de transmitir experiencias y conocimientos, Javier Krawicki imparte charlas y conferencias en todo el mundo sobre las Personas y Tecnología, el maridaje perfecto.</Typography>
            <Typography sx={{width:"519px", ml:22, mt:20,color:"#003350", fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"-0.5px" }}>Contacta con nosotros si quieres contratar a Javier para tu próxima conferencia, team building, evento o curso.</Typography>
            </Box>
        </Box>

      <Box sx={{ml:25, mt:"68px" }}>
        <img  src="/curso.png" alt="" />
      </Box>   
    </Box>

    <Typography sx={{ ml:6,mt:8, color:"#A3B4BF", fontFamily:"Manrope", fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-1.68px"}}>
    ¿Cuáles son las temáticas de las charlas de Javier Krawicki? 
    </Typography>
    <Typography sx={{ ml:6, color:"#A3B4BF", fontFamily:"Manrope", fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-1.68px"}}>Están divididas en dos dimensiones: foco en las personas y foco en la tecnología.</Typography>

    <Box sx={{width:"1448px", ml:-16, mt:18}}>
        <img width={"100%"} src="/focoEnPersonas1.png" alt="" />
    </Box>
    <Box sx={{width:"1448px", mt:"-5px", ml:-16}}>
        <img width={"100%"} src="/focoEnHr1.png" alt="" />
    </Box>
    <Box sx={{ mt: 15,  ml:"82px", borderRadius:"20px", color:"#003350" }}>
        <Carousel   >
         {
             CharlasData.map( card => <TextoCard1 key={card.id}  titulo={card.titulo} texto={card.texto} textoOtro={card.textoOtro} /> )
         }
       </Carousel>
        </Box>
    
    <Box display={"flex"}>
       <Box  mb={"150px"} width={"1896px"} height={"528px"} sx={{mt:"99px", ml:"89px",}} >
         <Box>
            <Box>
               <Typography sx={{mt:3,fontFamily:"Manrope",fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"1.68px", color:"#A3B4BF"}}>¿A qué tipo de público van dirigidas las conferencias impartidas por Javier?</Typography>
            </Box>
        </Box>
         <Box>
         <Typography sx={{mt:3,fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>
            Las conferencias van dirigidas a todo tipo de organización, tanto gubernamental, como no gubernamental, aplicando a todo el nivel de la organización en cualquier parte del mundo e indiferentemente de la industria.
            </Typography>
            
         </Box>
    </Box>
     
     <Box sx={{mt:"99px", ml:8 }}>

        <Typography sx={{width:"329px", fontFamily:"Manrope",fontSize:"18px", fontWeight:"700", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350" }}>
        Si quieres contratar alguna charla o hacernos alguna consulta:
        </Typography>
     <Box mt={-12} ml={-3}>
     <Formulario/>
     </Box>
      
        
    </Box>
  </Box>
  <Box mt={-20} ml={80} >
    <img  src="/firuleteQueHacemos.png" alt="" />
    </Box>
    </Hidden>

    <Hidden smUp>
    <Typography sx={{ width:"90%",color:"#003350", fontFamily:"Manrope", fontSize:"48px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-2.32px", ml:2, mt:"80px"}}>Charlas y Conferencias</Typography>
    <Box sx={{
          display:"flex",
          backgroundColor:"#F9F9F9",  
          width:"100%", 
          mt: 3,
          height:"692px",
          position:"relative"
          
        }} >
        <Box>
        <Box sx={{borderRadius:"100px",width:"90px", height:"90px",mt:2,ml:2, backgroundColor:"#71EAEA"}}>
          </Box>
          <Box sx={{mt:"-68px", width:"300px",}}>
            <Typography  sx={{width:"90%", ml:2,color:"#003350", fontFamily:"Manrope", fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-1.68px" }} >Lo que evoluciona es la humanidad y la tecnología acompaña</Typography><br />
            <Typography sx={{position:"absolute",width:"90%", ml:2,color:"#003350", fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"-0.5px" }}>Apasionado de la inspiración, la alegría y el poder de transmitir experiencias y conocimientos, Javier Krawicki imparte charlas y conferencias en todo el mundo sobre las Personas y Tecnología, el maridaje perfecto.</Typography>
            <Typography sx={{width:"90%", ml:2, mt:22,color:"#003350", fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"-0.5px" }}>Contacta con nosotros si quieres contratar a Javier para tu próxima conferencia, team building, evento o curso.</Typography>
            </Box>
        </Box>

      <Box sx={{ml:25, mt:"68px" }}>
        <img  src="/curso.png" alt="" />
      </Box>   
    </Box>

    <Typography sx={{ ml:2,mt:3, color:"#A3B4BF", fontFamily:"Manrope", fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-1.68px"}}>
    ¿Cuáles son las temáticas de las charlas de Javier Krawicki? 
    </Typography>
    <Typography sx={{ ml:2, color:"#A3B4BF", fontFamily:"Manrope", fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-1.68px"}}>Están divididas en dos dimensiones: foco en las personas y foco en la tecnología.</Typography>

    <Box sx={{ mt:3}}>
        <img width={"100%"} src="/focoEnPersonas1.png" alt="" />
    </Box>
    <Box sx={{ mt:"-5px"}}>
        <img width={"100%"} src="/focoEnHr1.png" alt="" />
    </Box>
    <Box sx={{ width:"95%", mt: 5,  ml:1, borderRadius:"20px", color:"#003350" }}>
        <Carousel   >
         {
             CharlasData.map( card => <TextoCard1 key={card.id}  titulo={card.titulo} texto={card.texto} textoOtro={card.textoOtro} /> )
         }
       </Carousel>
        </Box>
    
    <Box >
       <Box  mb={"150px"} width={"90%"} height={"528px"} sx={{mt:4, ml:2,}} >
         <Box>
            <Box>
               <Typography sx={{width:"90%", mt:3,fontFamily:"Manrope",fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"1.68px", color:"#A3B4BF"}}>¿A qué tipo de público van dirigidas las conferencias impartidas por Javier?</Typography>
            </Box>
        </Box>
         <Box>
         <Typography sx={{mt:3,fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>
            Las conferencias van dirigidas a todo tipo de organización, tanto gubernamental, como no gubernamental, aplicando a todo el nivel de la organización en cualquier parte del mundo e indiferentemente de la industria.
            </Typography>
            
         </Box>
    </Box>
     
     <Box sx={{mt:"99px", ml:2 }}>

        <Typography sx={{width:"100%", fontFamily:"Manrope",fontSize:"18px", fontWeight:"700", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350" }}>
        Si quieres contratar alguna charla o hacernos alguna consulta:
        </Typography>
     <Box mt={-12} ml={-3}>
     <Formulario/>
     </Box>
    </Box>
  </Box>
  <Box mt={0} ml={2} >
    <img width={"100%"} src="/firuleteQueHacemos.png" alt="" />
    </Box>
    </Hidden>
    
   
  
   
    </>
  )
}

export default CharlasYconferencias
