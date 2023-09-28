import { Box, Button, Hidden, TextField, Typography } from '@mui/material'
import React from 'react'
import Formulario from '../../common/formulario/Formulario'

const TicTac = () => {
  return (
   <>
   <Hidden smDown>
   <Typography sx={{color:"#003350", fontFamily:"Manrope", fontSize:"58px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-2.32px", ml:"100px", mt:"80px"}}>Tic Tac: El poder del tiempo</Typography>
     <Box sx={{
          display:"flex",
          backgroundColor:"#F9F9F9",  
          width:"1448px", ml:-16,
          mt: "88px",
          height:"390px",
          position:"relative"
          
        }} >
        <Box ml={-8} mt={5}>
        <Box sx={{borderRadius:"100px",width:"90px", height:"90px",mt:4, ml:32, backgroundColor:"#71EAEA"}}>
          </Box>
          <Box sx={{mt:"-78px"}}>
            <Typography sx={{position:"absolute",width:"457px",ml:36,  color:"#003350", fontFamily:"Manrope", fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-1.68px" }}>El tiempo y la energía son dos aspectos que pocas veces miramos como una inversión. </Typography>
            </Box>
        </Box>
        <Typography sx={{mt:12, ml:65,width:"422px",color:"#003350", fontFamily:"Manrope", fontSize:"24px", fontWeight:"300", lineHeight:"34px", letterSpacing:"-1.68px"}}>
          Con estrategias simples, innovadoras y soluciones personalizadas, actuamos como facilitadores de los cambios necesarios para la prosperidad y sostenibilidad del negocio.
          </Typography>

      <Box sx={{ml:-41, mt:"-82px"}}>
        
      </Box>   
    </Box>

    <Box display={"flex"} mt={"87px"}>
       <Box ml={"85px"}  >
          <img src="/relojNegocio.png" alt="" />
        </Box>

        <Box width={"549px"} height={"413px"}>
        <Typography sx={{pl:5,fontFamily:"Manrope",fontSize:"18px", fontWeight:"700", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>
        ¿Qué pasaría si la moneda de intercambio en vez de ser los euros o los dólares sería nuestro tiempo? ¿Cambiaríamos algo de lo que hacemos con nuestro tiempo?
          </Typography>
          <Typography sx={{mt:2,pl:5,fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>Cada persona tiene su lugar, su momento, su energía.
Muchos colaboradores de las organizaciones, y esto generalmente se ve fuertemente en los dueños de las organizaciones, CEOs y Líderes, no logran frenar un minuto para pensar, reflexionar, disfrutar lo que han generado. </Typography>
          <Typography sx={{pl:5,fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>Porque ayudar a ordenar el esfuerzo de las personas y la gestión para lograr fluir organizadamente los objetivos y planes organizacionales atravesando una muy buena experiencia para multiplicar su negocio, toma cada día más sentido. </Typography>
        </Box>
    </Box>
    
    <Box display={"flex"}>
       <Box  mb={"150px"}   sx={{width:"520px", mt:"149px", ml:"69px",}} >
         <Box>
            <Box>
            <Typography sx={{fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>
            Un puente puede unir o separar lugares y personas. Nos proponemos ser uno para lograr, a través de nuestro concepto Tyme, evaluar, analizar y crear planes para cada organización, de manera tal de encontrar el equilibrio perfecto entre la energía y el tiempo de las personas para que puedan mejorar ampliamente su rendimiento y sonreír en el camino.
            </Typography>
            <Typography sx={{fontFamily:"Manrope",fontSize:"18px", fontWeight:"800", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>
            El tiempo es nuestro mejor aliado.
            </Typography> 
            </Box>
           
         </Box>
         <Box>
            <Typography sx={{mt:3,fontFamily:"Manrope",fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"1.68px", color:"#A3B4BF"}}>En fin…Todos tenemos 5 minutos… ¿no?, ¿Hablamos?</Typography>
         </Box>
    </Box>
     
    <Formulario/>
  </Box>
</Hidden>

<Hidden smUp>
  <Typography sx={{color:"#003350", fontFamily:"Manrope", fontSize:"48px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-2.32px", ml:2, mt:"80px"}}>Tic Tac: El poder del tiempo</Typography>
     <Box sx={{
          
          backgroundColor:"#F9F9F9",  
          width:"100%", 
          mt: 2,
          height:"390px",
          position:"relative"
          
        }} >
        <Box  mt={5}>
        <Box sx={{borderRadius:"100px",width:"90px", height:"90px",mt:4, ml:2, backgroundColor:"#71EAEA"}}>
          </Box>
          <Box sx={{mt:"-78px", width:"90%"}}>
            <Typography sx={{p:1, position:"absolute",width:"100%",ml:2,  color:"#003350", fontFamily:"Manrope", fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-1.68px" }}>El tiempo y la energía son dos aspectos que pocas veces miramos como una inversión. </Typography>
            </Box>
        </Box>
        <Typography sx={{mt:50, ml:2,width:"100%",color:"#003350", fontFamily:"Manrope", fontSize:"24px", fontWeight:"300", lineHeight:"34px", letterSpacing:"-1.68px"}}>
          Con estrategias simples, innovadoras y soluciones personalizadas, actuamos como facilitadores de los cambios necesarios para la prosperidad y sostenibilidad del negocio.
          </Typography>

         
    </Box>

    <Box  mt={30}>
       <Box   >
          <img width={"100%"} src="/relojNegocio.png" alt="" />
        </Box>

        <Box width={"100%"} height={"413px"}>
        <Typography sx={{pl:2,fontFamily:"Manrope",fontSize:"18px", fontWeight:"700", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>
        ¿Qué pasaría si la moneda de intercambio en vez de ser los euros o los dólares sería nuestro tiempo? ¿Cambiaríamos algo de lo que hacemos con nuestro tiempo?
          </Typography>
          <Typography sx={{mt:2,pl:2,fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>Cada persona tiene su lugar, su momento, su energía.
Muchos colaboradores de las organizaciones, y esto generalmente se ve fuertemente en los dueños de las organizaciones, CEOs y Líderes, no logran frenar un minuto para pensar, reflexionar, disfrutar lo que han generado. </Typography>
          <Typography sx={{pl:2,fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>Porque ayudar a ordenar el esfuerzo de las personas y la gestión para lograr fluir organizadamente los objetivos y planes organizacionales atravesando una muy buena experiencia para multiplicar su negocio, toma cada día más sentido. </Typography>
        </Box>
    </Box>
    
    <Box >
       <Box  mb={"150px"}   sx={{width:"90%", mt:26, ml:2,}} >
         <Box>
            <Box>
            <Typography sx={{width:"100%", fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>
            Un puente puede unir o separar lugares y personas. Nos proponemos ser uno para lograr, a través de nuestro concepto Tyme, evaluar, analizar y crear planes para cada organización, de manera tal de encontrar el equilibrio perfecto entre la energía y el tiempo de las personas para que puedan mejorar ampliamente su rendimiento y sonreír en el camino.
            </Typography>
            <Typography sx={{fontFamily:"Manrope",fontSize:"18px", fontWeight:"800", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>
            El tiempo es nuestro mejor aliado.
            </Typography> 
            </Box>
           
         </Box>
         <Box>
            <Typography sx={{mt:3,fontFamily:"Manrope",fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"1.68px", color:"#A3B4BF"}}>En fin…Todos tenemos 5 minutos… ¿no?, ¿Hablamos?</Typography>
         </Box>
    </Box>
     
    <Formulario/>
  </Box>
</Hidden>
   


    
    
   </>
  )
}

export default TicTac
