import { Box, Typography } from '@mui/material'
import React from 'react'

const Testimonios = () => {
  return (
    <Box sx={{mt:"54px", display:"flex",padding:"20px"}}>
        <Box>
        <Box ml={3} sx={{ borderRadius: '50%', overflow: 'hidden', width: '165px', height: '165px' }}>
        <img src="/testimonios1.png" alt="avatar" />
        </Box>

        <Box sx={{width:"355px",padding:5,backgroundColor:"#FEEC92", borderRadius:"20px", with: "355px",}}>
        <Typography sx={{fontFamily:"Manrope", fontSize:"18px", fontWeight:400, lineHeight:"26px", color:"#003350"}}>“Javier tiene muy buen ojo para evaluar a las organizaciones, encontrando
asertivamente las fortalezas y oportunidades de los líderes. Siempre con mucho
entusiasmo, pero por sobre todo con mucha escucha y empatía. Se nota la formación
constante que tienen en todo lo referido a Recursos Humanos, demostrando ser
expertos en la optimización de talento y desarrollo organizacional”.</Typography>
        <Typography sx={{mt:3, fontFamily:"Manrope",fontSize:"15px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>Sebastián Moguilevski
CEO &amp; Managing Director
Warner Bros España y Portugal</Typography>
        </Box>
        </Box>

        <Box ml={"20px"}>
        <Box ml={3} sx={{ borderRadius: '50%', overflow: 'hidden', width: '165px', height: '165px' }}>
        <img width={"165px"} src="/testimonios2.png" alt="avatar" />
        </Box>

        <Box sx={{width:"355px",padding:5,backgroundColor:"#FEEC92", borderRadius:"20px", with: "355px",}}>
        <Typography sx={{fontFamily:"Manrope", fontSize:"18px", fontWeight:400, lineHeight:"26px", color:"#003350"}}>“Tyme ha sido más que un simple asesor para nosotros; han sido un verdadero socio
estratégico en la digitalización de nuestro Departamento de Talento. Gracias a su
colaboración crucial, hemos podido implementar herramientas digitales innovadoras
que no solo han agilizado nuestros procesos operativos, sino que también han
permitido una mayor personalización en el desarrollo y crecimiento profesional de
todo nuestro equipo.”.</Typography>
        <Typography sx={{mt:3, fontFamily:"Manrope",fontSize:"15px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}> Alberto Benbunan
Founder & amp; CEO Global / Emprendedor Endeavor
Gelt, empresa de cashback que opera en Europa y LATAM. </Typography>
        </Box>
        </Box>

        <Box ml={"20px"}>
        <Box ml={3} sx={{ borderRadius: '50%', overflow: 'hidden', width: '165px', height: '165px' }}>
        <img width={"165px"} src="/testimonios3.png" alt="avatar" />
        </Box>

        <Box sx={{ width:"355px",padding:5,backgroundColor:"#FEEC92", borderRadius:"20px", with: "355px",}}>
        <Typography sx={{fontFamily:"Manrope", fontSize:"18px", fontWeight:400, lineHeight:"26px", color:"#003350"}}>“Tyme ha sido un socio esencial para nuestra estrategia de gestión de talento. Somos
una organización en constante crecimiento y nos ayudó a diagnosticar a nuestros
líderes, captando también nuevos talentos, y logrando así una positiva transformación
hacia un equipo de alto rendimiento. Se nota la vocación de servicio, entusiasmo y
profesionalismo de todo el equipo de Tyme”.</Typography>
        <Typography sx={{mt:3, fontFamily:"Manrope",fontSize:"15px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>Carlos Zucchi
CEO & amp; Partner – España e Israel
Argis: promotora y fondo de capital de riesgo en Real Estate.</Typography>
        </Box>
        </Box>

        
       
    </Box>
  )
}

export default Testimonios
