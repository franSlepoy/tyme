import { Box, Hidden, Typography } from '@mui/material'
import React from 'react'
import { NosotrosCarouselData } from '../../../servidor/NosotrosImages'
import Carousel from 'react-material-ui-carousel'
import ImagenCard from '../../common/imageCard/ImageCard'

const Nosotros = () => {
  return (
    <>
   
   <Hidden smDown>
   <Typography sx={{color:"#003350", fontFamily:"Manrope", fontSize:"58px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-2.32px", ml:6, mt:"80px"}}>Nosotros</Typography>
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
            <Typography sx={{ ml:4,color:"#003350", fontFamily:"Manrope", fontSize:"42px", fontWeight:"200", lineHeight:"normal", letterSpacing:"-1.68px" }}>Tyme es una consultora boutique internacional especializada en <strong style={{width:"800"}}>escuchar, acompañar,
potenciar y evolucionar</strong>  junto a las organizaciones a través de las personas y la
tecnología.</Typography>
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
     
     <Box sx={{display:"flex", mt:"160px", width:"100%"}} >
      <Box>
      <Typography sx={{color:"#003350",width:"416px", mr:"72px", fontFamily:"Manrope", fontSize:"18px", fontWeight:"100", lineHeight:"28px",letterSpacing:"0.5px", }} >
      La tecnología está creciendo a pasos de gigante, y realmente debemos abrazarla e
integrarla. Esta tiene <strong style={{fontWeight:"800"}}>grandes beneficios para la humanidad.</strong> Lógicamente con un uso
consciente y responsable.
      </Typography>
      <Typography sx={{color:"#003350",width:"416px", mr:"72px",  fontFamily:"Manrope", fontSize:"18px", fontWeight:"100", lineHeight:"28px",letterSpacing:"0.5px", }} >
      Pero también, así como la tecnología está creciendo exponencialmente, las <strong style={{fontWeight:"800"}}>personas
somos y siempre seremos lo más importante que existe.</strong>  Mi vocación de servicio se
centra en <strong  style={{fontWeight:"800"}}>escuchar, ayudar, facilitar herramientas y acompañar</strong>  a las personas para su
evolución y transformación.
      </Typography>
      <Typography sx={{color:"#003350",width:"416px", mr:"72px",  fontFamily:"Manrope", fontSize:"18px", fontWeight:"100", lineHeight:"28px",letterSpacing:"0.5px", }} >
      Ahora, elijo y creo este nuevo emprendimiento con mucho entusiasmo y alegría.
      </Typography>
      </Box>
      <Box>
      <img width={"642px"}  src="/nosotros.png" alt="" />
      </Box>
      
     </Box>

     <Box sx={{display:"flex", mt:"127px", width:"100%"}} >
      
     <Box>
     <Carousel sx={{width:"622px"}}>
         {
             NosotrosCarouselData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
     </Box>
      <Typography sx={{color:"#003350",width:"416px", ml:"72px",  fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px",letterSpacing:"0.5px", }} >
      Mi experiencia internacional en diversas corporaciones, así como la gestión de mis
propias startups y pymes a nivel internacional, siempre con la tecnología como eje
central, me han brindado aprendizajes valiosos que comparto a través de Tyme.
Gracias a la gamificación y a Nawaiam, hemos evaluado a cientos de miles de
personas en más de 16 países. Esta experiencia nos ha provisto de información
poderosa sobre las conductas, soft skills y comportamientos de Líderes de todo tipo
de industria y tamaño de empresa, ayudando a cientos de empresas en la gestión del

capital humano. Ahora, con un equipo talentoso e interdisciplinario, asistimos a
empresas de todo el mundo.
      </Typography>
      
     </Box>
   </Hidden>
    
    <Hidden smUp>
    <Typography sx={{color:"#003350", fontFamily:"Manrope", fontSize:"58px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-2.32px", ml:6, mt:"80px"}}>Nosotros</Typography>

    <Box sx={{
          backgroundColor:"#F9F9F9",  
          width:"100%", 
          mt: "88px",
          padding:1,
          mb:1
        }} >
          <Box sx={{borderRadius:"100px",width:"90px", height:"90px", ml:2, backgroundColor:"#71EAEA"}}>
          </Box>
          <Box sx={{mt:"-78px", width:"90%",  }}>
            <Typography sx={{ ml:3,color:"#003350", fontFamily:"Manrope", fontSize:"28px", fontWeight:"200", lineHeight:"normal", letterSpacing:"-1.68px" }}>Tyme es una consultora boutique internacional especializada en <strong style={{width:"800"}}>escuchar, acompañar,
potenciar y evolucionar</strong>  junto a las organizaciones a través de las personas y la
tecnología.</Typography>
            </Box>
          
      <Box ml={3}>
        <Box sx={{ mt:3, width:"90%", }}>
          <Box sx={{width:"90%"}}>
          <Typography sx={{color:"#003350", fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}}>
          Con estrategias simples, innovadoras y soluciones personalizadas, actuamos como facilitadores de los cambios necesarios para la prosperidad y sostenibilidad del negocio.
          </Typography>
          <Typography sx={{color:"#003350", fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}} >
          Con una fuerte vocación de servicio, Tyme propone hacerle la vida más fácil a los dueños, CEO, Fundadores y/o líderes de las organizaciones, a través de nuestros servicios con el objetivo de hacer crecer vuestro negocio.
          </Typography>
          </Box>
         
          <Box sx={{width:"90%", }}>
            <Typography sx={{color:"#003350", fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}}>
            Nuestro propósito es hacer fluir la energía dentro de la organización a efectos de armonizar todas las variables posibles que puedan ser un presente o futuro obstáculo para el desarrollo, crecimiento y sostenibilidad de la compañía.
            </Typography>
        </Box>
        </Box>
      </Box>
     </Box>
     <Box width={"100%"} mt={-1}>
     <img width={"100%"}  src="/jk-perfil.jpg" alt="" />
     </Box>

     <Box sx={{ mt:3, width:"100%"}} >
      <Box>
      <Typography ml={3} sx={{color:"#003350",width:"90%",  fontFamily:"Manrope", fontSize:"18px", fontWeight:"100", lineHeight:"28px",letterSpacing:"0.5px", }} >
      La tecnología está creciendo a pasos de gigante, y realmente debemos abrazarla e
integrarla. Esta tiene <strong style={{fontWeight:"800"}}>grandes beneficios para la humanidad.</strong> Lógicamente con un uso
consciente y responsable.
      </Typography>
      <Typography ml={3} sx={{color:"#003350",width:"90%",  fontFamily:"Manrope", fontSize:"18px", fontWeight:"100", lineHeight:"28px",letterSpacing:"0.5px", }} >
      Pero también, así como la tecnología está creciendo exponencialmente, las <strong style={{fontWeight:"800"}}>personas
somos y siempre seremos lo más importante que existe.</strong>  Mi vocación de servicio se
centra en <strong  style={{fontWeight:"800"}}>escuchar, ayudar, facilitar herramientas y acompañar</strong>  a las personas para su
evolución y transformación.
      </Typography>
      <Typography sx={{ml:3,color:"#003350",width:"90%",  fontFamily:"Manrope", fontSize:"18px", fontWeight:"100", lineHeight:"28px",letterSpacing:"0.5px", }} >
      Ahora, elijo y creo este nuevo emprendimiento con mucho entusiasmo y alegría.
      </Typography>
      </Box>
      <Box mt={3} ml={3}>
      <img  width={"90%"} height={"100%"}  src="/nosotros.png" alt="" />
      </Box>
      
     </Box>
     <Typography sx={{ml:3,color:"#003350",width:"90%", mt:3,  fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px",letterSpacing:"0.5px", }} >
      Mi experiencia internacional en diversas corporaciones, así como la gestión de mis
propias startups y pymes a nivel internacional, siempre con la tecnología como eje
central, me han brindado aprendizajes valiosos que comparto a través de Tyme.
Gracias a la gamificación y a Nawaiam, hemos evaluado a cientos de miles de
personas en más de 16 países. Esta experiencia nos ha provisto de información
poderosa sobre las conductas, soft skills y comportamientos de Líderes de todo tipo
de industria y tamaño de empresa, ayudando a cientos de empresas en la gestión del

capital humano. Ahora, con un equipo talentoso e interdisciplinario, asistimos a
empresas de todo el mundo.
      </Typography>

     <Box  mt={3}>
     <Carousel sx={{width:"100%", height:"100%"}}>
         {
             NosotrosCarouselData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
     </Box>

    

    </Hidden>
     
     

     

    </>
  )
}

export default Nosotros
