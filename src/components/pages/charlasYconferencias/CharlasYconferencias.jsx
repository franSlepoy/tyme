import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { CharlasData } from '../../../servidor/CharlasData'
import Carousel from 'react-material-ui-carousel'
import TextoCard1 from '../../common/textoCard/TextoCard1'

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
     
     <Box sx={{mt:"99px", ml:18 }}>

        <Typography sx={{width:"329px", fontFamily:"Manrope",fontSize:"18px", fontWeight:"700", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350" }}>
        Si quieres contratar alguna charla o hacernos alguna consulta:
        </Typography>
     
        <Box sx={{ml:"1%",mt:1, display:"flex", flexDirection:"column" }}>
     
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
       label="Empresa"
       id="standard-size-normal"
       
       variant="standard"
       sx={{mt:3,color:"darkblue", width:"452px"}}
     />
      <TextField
       label="Teléfono"
       id="standard-size-normal"
       
       variant="standard"
       sx={{mt:3,color:"darkblue", width:"452px"}}
     />
      <TextField
       label="¿Como nos conocio?"
       id="standard-size-normal"
       
       variant="standard"
       sx={{mt:3,color:"darkblue", width:"452px"}}
     />
     <TextField
       label="En que servicio está interesado."
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
        
    </Box>
  </Box>
  <Box mt={-20} ml={80} >
    <img  src="/firuleteQueHacemos.png" alt="" />
    </Box>
   
  
   
    </>
  )
}

export default CharlasYconferencias
