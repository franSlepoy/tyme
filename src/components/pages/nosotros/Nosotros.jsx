import { Box, Typography } from '@mui/material'
import React from 'react'
import { NosotrosCarouselData } from '../../../servidor/NosotrosImages'
import Carousel from 'react-material-ui-carousel'
import ImagenCard from '../../common/imageCard/ImageCard'

const Nosotros = () => {
  return (
    <>
   
    <Typography sx={{color:"#003350", fontFamily:"Manrope", fontSize:"58px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-2.32px", ml:"159px", mt:"80px"}}>Nosotros</Typography>
     <Box sx={{
          backgroundColor:"#F9F9F9",  
          width:"1448px", ml:-16, 
          mt: "88px",
          padding:5,
          mb:"10"
        }} >
          <Box sx={{borderRadius:"100px",width:"90px", height:"90px", ml:10, backgroundColor:"#71EAEA"}}>
          </Box>
          <Box sx={{mt:"-78px", width:"1098px", ml:12 }}>
            <Typography sx={{ ml:4,color:"#003350", fontFamily:"Manrope", fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-1.68px" }}>Tyme es una consultora boutique internacional especializada en potenciar y transformar a las organizaciones a través de las personas y la tecnología</Typography>
            </Box>
          
      <Box ml={16}>
        <Box sx={{display:"flex", mt:3, width:"100%", }}>
          <Box sx={{width:"528px"}}>
          <Typography sx={{color:"#003350", fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}}>
          Con estrategias simples, innovadoras y soluciones personalizadas, actuamos como facilitadores de los cambios necesarios para la prosperidad y sostenibilidad del negocio.
          </Typography>
          <Typography sx={{color:"#003350", fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}} >
          Con una fuerte vocación de servicio, Tyme propone hacerle la vida más fácil a los dueños, CEO, Fundadores y/o líderes de las organizaciones, a través de nuestros servicios con el objetivo de hacer crecer vuestro negocio.
          </Typography>
          </Box>
         
          <Box sx={{width:"538px", ml:"54px",}}>
            <Typography sx={{color:"#003350", fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}}>
            Nuestro propósito es hacer fluir la energía dentro de la organización a efectos de armonizar todas las variables posibles que puedan ser un presente o futuro obstáculo para el desarrollo, crecimiento y sostenibilidad de la compañía.
            </Typography>
        </Box>
        </Box>
      </Box>
     </Box>
     
     <Box width={"1448px"}ml={-16}>
     <img width={"100%"} src="/jk-perfil.jpg" alt="" />
     </Box>
     
     <Box sx={{display:"flex", mt:"127px", width:"100%"}} >
      <Typography sx={{color:"#003350",width:"416px", mr:"72px", mt:"68px", fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px",letterSpacing:"0.5px", }} >
      La tecnología está creciendo a pasos de gigante, y realmente debemos abrazarla e integrarla. Esta tiene grandes beneficios para la humanidad. Lógicamente con un uso consciente y responsable.
Pero también, así como está creciendo exponencialmente la tecnología, las personas somos y seremos lo más importante que existe. Mi vocación de servicio es ayudar y transformar personas.
Ahora, creo este nuevo emprendimiento con mucho entusiasmo y alegría, Tyme.
      </Typography>
      <img width={"642px"}  src="/nosotros.png" alt="" />
     </Box>

     <Box sx={{display:"flex", mt:"127px", width:"100%"}} >
      
     <Box>
     <Carousel sx={{width:"622px"}}>
         {
             NosotrosCarouselData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
     </Box>
      <Typography sx={{color:"#003350",width:"416px", ml:"72px", mt:"68px", fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px",letterSpacing:"0.5px", }} >
      Luego de haber trabajado en diferentes empresas en el área de Recursos Humanos, Innovación, Tecnología y Management, y gracias al trabajo con un gran equipo humano con mis propios emprendimientos, y dentro de estos habiendo evaluado a cientos de miles de líderes en más de 16 países, logré nutrirme de información muy valiosa, y es por eso, que ahora con esa data real y genuina, vamos a ayudar con un equipo talentoso e interdisciplinario a las empresas de todo el mundo.
      </Typography>
      
     </Box>
     
     

     

    </>
  )
}

export default Nosotros
