import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import BasicAccordion from '../../common/basicAccordion/BasicAccordion'
import BasicAccordion1 from '../../common/basicAccordion/BasicAccordion1'
import Testimonios from '../../common/testimonios/Testimonios'
import Testimonios1 from '../../common/testimonios/Testimonios1'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Typography variant='h1' sx={{ padding:0, fontFamily: "Manrope", fontWeight:"800", color: "#003350", fontSize: "58px", textAlign: "center", letterSpacing: -2.23, mt: "70px" }}>Human Consulting</Typography>
      
      <Box sx={{ position: 'relative',  mt: "193px", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {/* <img src="/header1.png" alt="" style={{ Width: '100%', maxHeight: '100%', objectFit: 'cover' }} /> */}
        <video autoPlay loop muted style={{ maxWidth:"1564px",  objectFit: 'cover',  }}>
          <source src="/clip.mp4" type="video/mp4" />
        </video>
        <Typography sx={{width:"810px", position: 'absolute', color: 'white', fontSize: '36px', fontWeight:"400", textAlign: 'center', left:'50%', transform:'translate(-50%)', top: "111px", fontFamily:'Merriweather' }}>
          Diferentes motivos,
          una sencilla solución… Tyme
        </Typography>
      </Box>
      
      <Box m={"auto"} mt={"192px"} display={"flex"}>
      <Box width={"481px"}>
          <Typography sx={{fontFamily:"Manrope", fontSize:"24px", fontWeight:"300", color:"#003350",lineHeight:"34px" }}>
          Cada organización tiene su fórmula. No existe una solución universal para la prosperidad de cada organización. Nuestra fórmula secreta es que vemos el cambio de manera diferente. En Tyme te ayudamos a encontrar tu fórmula y de esa manera trabajamos, de manera personalizada.
          </Typography>
          <Button component={NavLink} to={"/contacto"} variant='contained' sx={{mt:"31px", padding: "10px 24px", width:"177px", borderRadius:"100px", backgroundColor:"#003350", '&:hover': {borderRadius: "100px", backgroundColor:"#71EAEA", color:"#F9F9F9", textAlign:"center", fontWeight:"700", lineHeight: "20px"}}}>Contactanos</Button>
          <Box mt={-18}  ml={-15}><img  src="/Isolation_Mode.png" alt="" /></Box>
          
        </Box>
      <Box width={"554px"} ml={"94px"}>
        <Typography sx={{fontFamily:"Merriweather", fontSize:"36px", fontWeight:400, lineHeight:"normal", color: "#003350"}} >
        HR On Demand 
        </Typography>
        <Divider sx={{mt:"24px", width:"554px", height:"1px"}}/>
        <BasicAccordion/>
        <Typography sx={{mt:"59px",fontFamily:"Merriweather", fontSize:"36px", fontWeight:400, lineHeight:"normal", color: "#003350"}}>
        HR Tech Trends
        </Typography>
        <Divider sx={{mt:"24px", width:"554px", height:"1px"}}/>
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
      
      <Testimonios/>
     
      
      


    </Box>
  
      
    </>
  )
}

export default Home
