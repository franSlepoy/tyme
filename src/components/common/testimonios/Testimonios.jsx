import { Box, Typography } from '@mui/material'
import React from 'react'

const Testimonios = () => {
  return (
    <Box sx={{mt:"54px", display:"flex", with:"100%", ml:-6}}>
        <Box>
        <Box  sx={{ borderRadius: '50%', overflow: 'hidden', width: '165px', height: '165px' }}>
        <img width={"100%"} src="/testimonios1.jpeg" alt="avatar" />
        </Box>
      
        <Box sx={{width:"300px",padding:5,backgroundColor:"#FEEC92", borderRadius:"20px",}}>
        <Typography sx={{fontFamily:"Manrope", fontSize:"14px", fontWeight:400, lineHeight:"26px", color:"#003350"}}>"Siempre que he tenido el privilegio de conversar con Javi, quedo sorprendida por su profundo conocimiento y entendimiento sobre el mundo de los recursos humanos y la gestión de personas. Su enfoque innovador, combinado con su genuina pasión por el desarrollo del talento, lo convierte en una fuente invaluable de insights y recomendaciones." </Typography>
        <Typography sx={{mt:2, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
        Melina Cotlar
</Typography>
<Typography sx={{mt:1, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
Chief Risk Officer – International Markets
</Typography>
<Typography sx={{mt:1, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
AXA, compañía de seguros.</Typography>
        </Box>
        </Box>

        <Box ml={2}>
        <Box sx={{ borderRadius: '50%', overflow: 'hidden', width: '165px', height: '165px' }}>
        <img width={"165px"} src="/testimonios2.png" alt="avatar" />
        </Box>

        <Box sx={{width:"305px",padding:5,backgroundColor:"#FEEC92", borderRadius:"20px", with: "355px",}}>
        <Typography sx={{fontFamily:"Manrope", fontSize:"14px", fontWeight:400, lineHeight:"26px", color:"#003350"}}>“Tyme ha sido más que un simple asesor para nosotros; han sido un verdadero socio
estratégico en la digitalización de nuestro Departamento de Talento. Gracias a su
colaboración crucial, hemos podido implementar herramientas digitales innovadoras
que no solo han agilizado nuestros procesos operativos, sino que también han
permitido una mayor personalización en el desarrollo y crecimiento profesional de
todo nuestro equipo.”.</Typography>
        <Typography sx={{mt:3, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}> Alberto Benbunan
</Typography>
<Typography sx={{mt:1, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}> 
Founder &amp; CEO Europa y LATAM.   </Typography>
<Typography sx={{mt:1, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}> 
GELT, startup de cashback / Emprendedor Endeavor </Typography>
        </Box>
        </Box>

        <Box ml={2}>
        <Box  sx={{ borderRadius: '50%', overflow: 'hidden', width: '165px', height: '165px' }}>
        <img width={"165px"} src="/testimonios3.png" alt="avatar" />
        </Box>

        <Box sx={{ width:"305px",padding:5,backgroundColor:"#FEEC92", borderRadius:"20px", with: "355px",}}>
        <Typography sx={{fontFamily:"Manrope", fontSize:"14px", fontWeight:400, lineHeight:"26px", color:"#003350"}}>“Tyme ha sido un socio esencial para nuestra estrategia de gestión de talento. Somos
una organización en constante crecimiento y nos ayudó a diagnosticar a nuestros
líderes, captando también nuevos talentos, y logrando así una positiva transformación
hacia un equipo de alto rendimiento. Se nota la vocación de servicio, entusiasmo y
profesionalismo de todo el equipo de Tyme”.</Typography>
        <Typography sx={{mt:2, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>Carlos Zucchi</Typography>
<Typography sx={{mt:1, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
CEO &amp; Partner – España e Israel
</Typography>
<Typography sx={{mt:1, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
Argis: promotora y fondo de capital de riesgo en Real Estate.</Typography>

        </Box>
        </Box>

        <Box ml={2}>
        <Box  sx={{ borderRadius: '50%', overflow: 'hidden', width: '165px', height: '165px' }}>
        <img width={"200px"} height={"170px"} src="/testimonios4.jpeg" alt="avatar" />
        </Box>
      
        <Box sx={{width:"300px",padding:5,backgroundColor:"#FEEC92", borderRadius:"20px",}}>
        <Typography sx={{fontFamily:"Manrope", fontSize:"14px", fontWeight:400, lineHeight:"26px", color:"#003350"}}>"En mis años al mando de diversas compañías, he cruzado caminos con numerosos
profesionales de RRHH, pero pocos han dejado una huella tan profunda como Javier.
Su entendimiento agudo de los recursos humanos, combinado con una destreza única
para cultivar y guiar a líderes, le distingue en un mar de expertos. Más allá de su
experiencia, es su enfoque humano y su visión clara lo que realmente transforma
equipos y organizaciones. Si hay alguien que entiende la temperatura real de una
organización y cómo elevarla, es sin duda él". </Typography>
        <Typography sx={{mt:2, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
        Ruben Sanchez
</Typography>
<Typography sx={{mt:1, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
CEO – Perú
</Typography>
<Typography sx={{mt:1, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
Pastelería San Antonio, empresa líder de Pastelería, Panadería, Cafetería y
Restaurante.</Typography>
        </Box>
        </Box>

        
       
    </Box>
  )
}

export default Testimonios
