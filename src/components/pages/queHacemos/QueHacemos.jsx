import { Box, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { QueHacemosData } from '../../../servidor/QueHacemosTexto'
import TextoCard from '../../common/textoCard/TextoCard'
import BasicAccordion2 from '../../common/basicAccordion/BasicAccordion2'
import { CarouselTextoLogoData } from '../../../servidor/CarouselTextoLogoData'
import TextoLogoCard from '../../common/textoLogoCard/TextoLogoCard'
import BasicAccordion3 from '../../common/basicAccordion/BasicAccordion3'

const QueHacemos = () => {
  return (
    <>
      <Typography sx={{color:"#003350", fontFamily:"Manrope", fontSize:"58px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-2.32px", ml:"159px", mt:"80px"}}>¿Qué hacemos?</Typography>
     <Box sx={{
          display:"flex",
          // Usamos la URL de la imagen importada
          backgroundSize: 'cover', // Para que la imagen cubra todo el fondo
           width:"100%", // Para que ocupe el 100% del ancho
          mt: "88px",
          height:"506px",
          padding:5,
          
        }} >
        <Box>
        <Box sx={{borderRadius:"100px",width:"90px", height:"90px", ml:-6, backgroundColor:"#71EAEA"}}>
          </Box>
          <Box sx={{mt:"-78px", width:"535px"}}>
            <Typography sx={{color:"#003350", fontFamily:"Manrope", fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-1.68px" }}>Lo primero que hacemos es el cambio centrado en las personas, de verdad.</Typography>
            </Box>
        </Box>

      <Box sx={{ml:-73, mt:"-124px"}}>
        <img height={"589px"} src="/queHacemosImagen.png" alt="" />
      </Box>   
    </Box>
    
    <Box sx={{ml:5, mt:"136px"}}>
    <Typography sx={{width: "1023px", mt:"136px", fontFamily:"Manrope", fontSize:"24px", fontWeight:"300", lineHeight:"34px", color:"#003350" }}>Ya sea que tengas diez o cincuenta mil empleados, te ayudaremos a dar los pasos hacia el cambio que deseas ver y hacer…. y que la transformación cobre vida.</Typography>
    <Typography sx={{width: "1023px", mt:"40px", fontFamily:"Manrope", fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-1.68px", color:"#A3B4BF"}}>Ofrecemos enfoques simples, pero con impacto, frescos, pero, que funcionan y ágiles, pero robustos.</Typography>
    
    <Typography sx={{width: "1023px", mt:10, fontFamily:"Manrope", fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-1.68px", color:"#003350"}}>
    Nuestros servicios
    </Typography>
    </Box>

    <Box sx={{
          display:"flex",
          backgroundImage: `url("/queHacemosRectangle69.png")`, // Usamos la URL de la imagen importada
          backgroundSize: 'cover', // Para que la imagen cubra todo el fondo
           width:"100%", // Para que ocupe el 100% del ancho
          mt: "88px",
          height:"531px",
          padding:5,
    }}>
        <Box mt={"22px"}>
            <Typography sx={{fontFamily:"Merriweather",fontSize:"36px", fontWeight:"700", color:"#003350"}}>HR On Demand</Typography>
            <Box display={"flex"} mt={"22px"}>
                <img  src="/hrLogo1.png" alt="" />
                <Typography sx={{width:"378px",ml:"10px",fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", letterSpacing:"0.5px", color:"#003350"}}>Radiografía Transformadora de organizaciones: Evaluación y Diagnóstico</Typography>
            </Box>
            <Box display={"flex"} mt={"22px"}>
                <img src="/hrLogo2.png" alt="" />
                <Typography sx={{width:"378px",ml:"10px",fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", letterSpacing:"0.5px", color:"#003350"}}>Radiografía Transformadora de organizaciones: Evaluación y Diagnóstico</Typography>
            </Box>
            <Box display={"flex"} mt={"22px"}>
                <img src="/hrLogo3.png" alt="" />
                <Typography sx={{width:"378px",ml:"10px",fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", letterSpacing:"0.5px", color:"#003350"}}>Radiografía Transformadora de organizaciones: Evaluación y Diagnóstico</Typography>
            </Box>
            <Box display={"flex"} mt={"22px"}>
                <img src="/hrLogo4.png" alt="" />
                <Typography sx={{width:"378px",ml:"10px",fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", letterSpacing:"0.5px", color:"#003350"}}>Radiografía Transformadora de organizaciones: Evaluación y Diagnóstico</Typography>
            </Box>
        </Box>
        
        <Box mt={"22px"} ml={"125px"}>
        <Typography sx={{fontFamily:"Merriweather",fontSize:"36px", fontWeight:"700", color:"#003350"}}>HR Tech Trends</Typography>
        <Box display={"flex"} mt={"22px"}>
                <img src="/hrLogo5.png" alt="" />
                <Typography sx={{width:"378px",ml:"10px",fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", letterSpacing:"0.5px", color:"#003350"}}>Mentoring personalizado</Typography>
            </Box>
            <Box display={"flex"} mt={"22px"}>
                <img src="/hrLogo6.png" alt="" />
                <Typography sx={{width:"378px",ml:"10px",fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", letterSpacing:"0.5px", color:"#003350"}}>Training y educación en tecnología para RRHH</Typography>
            </Box>
        </Box>
    </Box>

    <Box sx={{width:"100%", height:"230px", bgcolor:"#003350"}}>
        <Typography sx={{pt:"92px",ml:"50px",color:"#F9F9F9",fontFamily:"Merriweather",fontSize:"36px", fontWeight:"700"}}>HR On Demand</Typography>
    </Box>

    <Box display={"flex"} mt={"42px"} sx={{ml:6}}>
                <img  src="/hrLogo1.png" alt="" />
                <Typography sx={{ ml:"30px",mt:"20px",width:"855px",fontFamily:"Manrope",fontSize:"20px", fontWeight:"400", color:"#003350"}}>Radiografía Transformadora de organizaciones: Evaluación y Diagnóstico</Typography>
    </Box>

    <Typography sx={{mt:"39px", width:"100%", fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", lineHeight:"28px",letterSpacing:"0.5px", color:"#003350"}}>
    En Tyme, entendemos que cada empresa es única, por lo que personalizamos nuestra propia metodología de evaluación y
diagnóstico para satisfacer las necesidades específicas de tu organización. Nuestro equipo de expertos en Gestión del
Talento se compromete a trabajar junto contigo para garantizar que tus empleados alcancen su máximo potencial y que tu
empresa florezca en un ambiente laboral enriquecedor y productivo, alcanzando los objetivos de negocio buscado.
    </Typography>
    <Typography sx={{mt:"39px", width:"100%", fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", lineHeight:"28px",letterSpacing:"0.5px", color:"#003350"}} >
    En Tyme tenemos un equipo muy talentoso con grandes capacidades de diagnóstico gracias a:
    </Typography>

    <Box sx={{mt:"28px", display:"flex"}}>
        <Box >
        <img width={"100%"} src="/gente.png" alt="" />
        </Box>
        
        <Box sx={{height:"397px", width:"522px", ml:"82px", border:"solid  1px", borderRadius:"20px", color:"#003350" }}>
        <Carousel height={"320px"} >
         {
             QueHacemosData.map( card => <TextoCard key={card.id}  titulo={card.titulo} texto={card.texto} /> )
         }
       </Carousel>
        </Box>
    </Box>
    <Typography sx={{mt:"56px",fontFamily:"Merriweather",fontSize:"36px", fontWeight:"400", color:"#003350"}}>
        Nuestra forma de trabajo:
     </Typography>
     
     <Box display={"flex"} mt={"30px"}>
       <Box mr={8}>
        <img src="/steps1.png" alt="" />
       </Box>
       <BasicAccordion2/>
     </Box>
     
     <Box sx={{mt:"100px", height:"2000px", bgcolor:"#F9F9F9"}}>
     
     <Box display={"flex"}>
                <Box sx={{mt:"80px", ml:"58px"}}>
                <img   src="/hrLogo2.png" alt="" />
                </Box>
                <Typography sx={{ml:5, mt:"100px", width:"855px",fontFamily:"Manrope",fontSize:"20px", fontWeight:"400", color:"#003350"}}>Conexión real con la Experiencia del empleado</Typography>
     </Box>

     <Typography sx={{mt:"37px", ml:"58px", fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>Hoy no podemos concebir un ciclo de vida del empleado sin foco en la EXPERIENCIA.</Typography>
     <Typography sx={{mt:"37px", ml:"58px", fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350", mr:"50px"}}>La experiencia del empleado se refiere a todas las interacciones, percepciones y emociones que un colaborador experimenta a lo largo de su trayectoria dentro de la organización. Desde el proceso de Selección y Atracción de Talento hasta la salida del colaborador de dicha empresa, cada punto de contacto cuenta para moldear la satisfacción, el compromiso y el sentido de pertenencia del empleado.</Typography>
     <Typography sx={{mt:"37px", ml:"58px", fontFamily:"Manrope",fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>Trabajamos fuertemente en la cultura organizacional.</Typography>
     <Typography sx={{mt:"37px", ml:"58px", fontFamily:"Manrope",fontSize:"18px",  lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>Un empleado con una buena experiencia dentro del ciclo de vida en la organización evita:</Typography>
     
     <Box sx={{mt:"48px", display:"flex", ml:"-25px"}}>
        <Box sx={{  bgcolor:"#FFF",height:"444px", width:"2000px", ml:"82px", border:"solid  1px", borderRadius:"20px", color:"#003350" }}>
        <Carousel height={"400px"}  >
         {
             CarouselTextoLogoData.map( card => <TextoLogoCard key={card.id}  titulo={card.titulo} texto={card.texto} logo={card.logo} /> )
         }
       </Carousel>
        </Box>
        <Box >
        <Typography sx={{ mt:"160px", ml:"50px",mr:"50px", fontFamily:"Manrope",fontSize:"18px", fontWeight:"700", lineHeight:"28px", letterSpacing:"0.5px", color:"#003350"}}>En resumen, una mala experiencia de los empleados entre tantos efectos impacta directamente en los resultados económicos de la empresa.
Por lo tanto, es fundamental que las organizaciones se esfuercen por mejorar la experiencia laboral de sus colaboradores para promover un ambiente de trabajo positivo y productivo.</Typography>
        </Box>
    </Box>
 
    <Typography sx={{ml:"50px" ,mt:"56px",fontFamily:"Merriweather",fontSize:"36px", fontWeight:"400", color:"#003350"}}>
    Cuál es la solución que proponemos en Tyme
     </Typography>
     
     <Box display={"flex"} ml={"50px"} mt={"40px"}>
       <Box mr={8}>
        <img src="/reunion.png" alt="" />
       </Box>
       <BasicAccordion3/>
     </Box>
     
     <Box display={"flex"} sx={{mt:"75px",ml:"50px",width:"100%"}}>
        <Box width={"538px"}> 
        <Typography sx={{fontFamily:"Manrope",fontSize:"24px", fontWeight:"300", lineHeight:"34px", letterSpacing:"0.5px", color:"#003350"}} >
        Resultados transformadores: nuestro enfoque centrado en las personas y la experiencia del empleado ha demostrado generar resultados cuanti y cualitativos en organizaciones de diversas industrias.
        </Typography>
        <Typography sx={{mt:5,fontFamily:"Manrope",fontSize:"24px", fontWeight:"700", lineHeight:"34px", letterSpacing:"0.5px", color:"#003350"}}>
        Confía en nosotros para llevar a tu empresa al siguiente nivel 
        </Typography>
        </Box>
        <Box sx={{}}>
            <img width={"564px"} src="/firuleteQueHacemos.png" alt="" />
        </Box>
        
     </Box>


     </Box>

    
    
    
    </>
  )
}

export default QueHacemos
