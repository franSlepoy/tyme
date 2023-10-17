import { Box, Button, Divider, Hidden, Typography } from '@mui/material'
import React from 'react'
import BasicAccordion from '../../common/basicAccordion/BasicAccordion'
import BasicAccordion1 from '../../common/basicAccordion/BasicAccordion1'
import Testimonios from '../../common/testimonios/Testimonios'
import { Link, NavLink } from 'react-router-dom'
import Testimonios1 from '../../common/testimonios/Testimonios1'
import Carousel from 'react-material-ui-carousel'
import { TestimoniosCradData } from '../../../servidor/testimoniosData'
import TestimonioCard from '../../common/TestimonioCard/TestimonioCard'

const Home = () => {
  return (
    <>
     <Hidden smDown>
        <Typography  sx={{  fontFamily: "Manrope", fontWeight:"800", color: "#003350", fontSize: "68px", textAlign: "center", letterSpacing:"-2.23px", mt: "70px" }}>Human Consulting</Typography>
      
      <Box sx={{width:"1450px",ml:-17, position: 'relative',  mt: "133px", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {/* <img src="/header1.png" alt="" style={{ Width: '100%', maxHeight: '100%', objectFit: 'cover' }} /> */}
        <video width={"100%"} autoPlay loop muted style={{ maxWidth:"1564px",  objectFit: 'cover',  }}>
          <source src="/clipMedio.mp4" type="video/mp4" />
        </video>
        <Typography sx={{width:"1110px", position: 'absolute', color: 'white', fontSize: '46px', fontWeight:"400", textAlign: 'center', left:'50%', transform:'translate(-50%)', top: "111px", fontFamily:'Manrope' }}>
          Diferentes motivos,
          una sencilla solución… Tyme
        </Typography>
      </Box>
      
      <Box m={"auto"} mt={"192px"} display={"flex"}>
      <Box width={"481px"}>
          <Typography sx={{fontFamily:"Manrope", fontSize:"24px", fontWeight:"200", color:"#003350",lineHeight:"34px" }}>
          <strong style={{ fontWeight: "800" }}>Cada organización tiene su fórmula.</strong> No existe una solución universal para la prosperidad de cada organización. Nuestra fórmula secreta es que vemos el cambio de manera diferente.
          </Typography>
          <Typography sx={{ mt:3,fontFamily:"Manrope", fontSize:"24px", fontWeight:"200", color:"#003350",lineHeight:"34px" }}>
          <strong style={{ fontWeight: "800" }}>En Tyme te  ayudamos a encontrar tu fórmula</strong> y de esa manera trabajamos, <strong style={{ fontWeight: "bold" }} >de manera personalizada.</strong> 
          </Typography>
          <Link to={"/contacto"} style={{textDecoration:"none"}}> <Button  variant='contained' sx={{mt:"31px", padding: "10px 24px", width:"177px", borderRadius:"100px", backgroundColor:"#003350", '&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA", color:"#F9F9F9", textAlign:"center", fontWeight:"700", lineHeight: "20px"}}}>Contactanos</Button></Link>
         
         
          
        </Box>
      <Box width={"554px"} ml={"94px"}>
        <Typography sx={{fontFamily:"Merriweather", fontSize:"36px", fontWeight:400, lineHeight:"normal", color: "#003350"}} >
        HR On Demand 
        </Typography>
        
        <BasicAccordion/>
        <Typography sx={{mt:"59px",fontFamily:"Merriweather", fontSize:"36px", fontWeight:400, lineHeight:"normal", color: "#003350"}}>
        HR Tech Trends
        </Typography>
        
        <BasicAccordion1/>
      </Box>
      
    </Box>
    <Box>
      <Box  display={"flex"} mt={"100px"}    sx={{   backgroundColor:"#F9F9F9", pl:5,  }} >
       <Box sx={{width:"451px", mt:"154px", mr:"24px"}}>
         <Typography sx={{fontFamily:"Merriweather", fontSize:"36px", fontWeight:400, lineHeight:"normal", color: "#003350"}}>
         Tyme se enfoca en el lado humano del cambio
         </Typography>
         <Typography sx={{mt:"28px", fontFamily:"Manrope",fontSize:"18px", fontWeight:300,lineHeight:"28px", letterSpacing:"0.5px",color: "#003350"}}>
         Desde una mirada holística e integral, ayudamos a transformar y potenciar los negocios a través de las personas y la tecnología.
         </Typography>
         <Typography mt={3} sx={{ fontFamily:"Manrope",fontSize:"18px", fontWeight:300,lineHeight:"28px", letterSpacing:"0.5px", color: "#003350"}}>
         Construimos soluciones personalizadas que realmente resuelven tus problemas más difíciles, y se alinean a tus equipos de trabajo fomentando fuertemente la innovación.
         </Typography>
       </Box>

       <Box>
         <img src="/personas.png" alt="personas trabajando" />
       </Box>

    </Box>
    </Box>
    

    <Box>

      <Typography sx={{mt: "75px",color: "#003350", textAlign:"center", fontFamily:"Merriweather", fontSize:"36px", fontWeight:400, lineHeight:"normal"}}>Palabras que resuenan, voces que inspiran</Typography>
      
      <Box sx={{ml:-4,width:"1260px"}}>
      <Carousel height={"1000px"} >
     
      <Testimonios/>
      <Testimonios1/>

      </Carousel>
      </Box>
     
      
     
      
      


    </Box>
     </Hidden>
     
  <Hidden smUp>
  <Typography  sx={{  fontFamily: "Manrope", fontWeight:"800", color: "#003350", fontSize: "46px", textAlign: "center", letterSpacing:"-2.23px", mt: "70px" }}>Human Consulting</Typography>
  <Box sx={{ position: 'relative',  mt: "60px", display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
        {/* <img src="/header1.png" alt="" style={{ Width: '100%', maxHeight: '100%', objectFit: 'cover' }} /> */}
        <video autoPlay loop muted playsInline  style={{ width:"100%",  objectFit: 'cover',  }}>
          <source src="/mobile.mp4" type="video/mp4" />
        </video>
        <Typography sx={{width:"100%", position: 'absolute', color: 'white', fontSize: '30px', fontWeight:"400", textAlign: 'center', left:'50%', transform:'translate(-50%)', top: 58, fontFamily:'Manrope' }}>
          Diferentes motivos,
          una sencilla solución… Tyme
        </Typography>
      </Box>

      <Box mt={3} ml={3} width={"90%"}  mb={3}>
          <Typography sx={{fontFamily:"Manrope", fontSize:"24px", fontWeight:"200", color:"#003350",lineHeight:"34px" }}>
          <strong style={{ fontWeight: "800" }}>Cada organización tiene su fórmula.</strong> No existe una solución universal para la prosperidad de cada organización. Nuestra fórmula secreta es que vemos el cambio de manera diferente.
          </Typography>
          <Typography sx={{ mt:3,fontFamily:"Manrope", fontSize:"24px", fontWeight:"200", color:"#003350",lineHeight:"34px" }}>
          <strong style={{ fontWeight: "800" }}>En Tyme te  ayudamos a encontrar tu fórmula</strong> y de esa manera trabajamos, <strong style={{ fontWeight: "bold" }} >de manera personalizada.</strong> 
          </Typography>
          <Link to={"/contacto"} style={{textDecoration:"none"}}> <Button  variant='contained' sx={{mt:"31px", padding: "10px 24px", width:"177px", borderRadius:"100px", backgroundColor:"#003350", '&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA", color:"#F9F9F9", textAlign:"center", fontWeight:"700", lineHeight: "20px"}}}>Contactanos</Button></Link>
        </Box>

        <Box mt={15} width={"90%"} ml={2}>
        <Typography sx={{fontFamily:"Merriweather", fontSize:"36px", fontWeight:400, lineHeight:"normal", color: "#003350"}} >
        HR On Demand 
        </Typography>
        
        <BasicAccordion/>
        <Typography sx={{mt:"59px",fontFamily:"Merriweather", fontSize:"36px", fontWeight:400, lineHeight:"normal", color: "#003350"}}>
        HR Tech Trends
        </Typography>
        
        <BasicAccordion1/>
      </Box>

      <Box ml={2}  mt={4}    sx={{   backgroundColor:"#F9F9F9", p:2, width:"90%"  }} >
       <Box sx={{width:"90%"}}>
         <Typography sx={{fontFamily:"Merriweather", fontSize:"36px", fontWeight:400, lineHeight:"normal", color: "#003350"}}>
         Tyme se enfoca en el lado humano del cambio
         </Typography>
         <Typography sx={{mt:"28px", fontFamily:"Manrope",fontSize:"18px", fontWeight:300,lineHeight:"28px", letterSpacing:"0.5px",color: "#003350"}}>
         Desde una mirada holística e integral, ayudamos a transformar y potenciar los negocios a través de las personas y la tecnología.
         </Typography>
         <Typography mt={3} sx={{ fontFamily:"Manrope",fontSize:"18px", fontWeight:300,lineHeight:"28px", letterSpacing:"0.5px", color: "#003350"}}>
         Construimos soluciones personalizadas que realmente resuelven tus problemas más difíciles, y se alinean a tus equipos de trabajo fomentando fuertemente la innovación.
         </Typography>
       </Box>

       <Box mt={3}>
         <img width={"100%"} src="/personas.png" alt="personas trabajando" />
       </Box>

    </Box>
    
    <Typography sx={{mt: "75px",color: "#003350", textAlign:"center", fontFamily:"Merriweather", fontSize:"36px", fontWeight:400, lineHeight:"normal"}}>Palabras que resuenan, voces que inspiran</Typography>
    <Carousel sx={{width:"90%", m:"auto", mt:8}}>
      {
        TestimoniosCradData.map(persona =>  <TestimonioCard nombre={persona.nombre} key={persona.id} texto={persona.texto} imagen={persona.imagen} empresa={persona.empresa} cargo={persona.cargo} /> )
      }
    </Carousel>
    
    
  
  
  </Hidden>
      
    </>
  )
}

export default Home
