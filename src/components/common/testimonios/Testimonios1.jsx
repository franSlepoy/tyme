import { Box, Typography } from '@mui/material'
import React from 'react'

const Testimonios1 = () => {
  return (
    <Box sx={{mt:"54px", display:"flex",padding:"20px"}}>
   

        <Box ml={"20px"}>
        <Box ml={10} sx={{ borderRadius: '50%', overflow: 'hidden', width: '165px', height: '165px' }}>
        <img width={"165px"} src="/testimonios4.png" alt="avatar" />
        </Box>

        <Box sx={{width:"355px",padding:5,backgroundColor:"#FEEC92", borderRadius:"20px", with: "355px",}}>
        <Typography sx={{fontFamily:"Manrope", fontSize:"18px", fontWeight:400, lineHeight:"26px", color:"#003350"}}>“El acompañamiento y nivel de involucramiento que tienen es excelente. Hoy los
cambios son cada vez más rápidos, y se nota que las propuestas de trabajo son
disruptivas y tendenciosas, con metodologías propias y muy sólidas. Javier tiene la
fortaleza de hacer un trabajo en conjunto que crea valor para todos. Gracias a su
experiencia, se fortalece la cultura organizacional, alcanzado nuevos niveles de
eficiencia en la gestión de personas.”</Typography>
        <Typography sx={{mt:3, fontFamily:"Manrope",fontSize:"15px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>Hernán Barletta
Director de RRHH
MSD: una de las mayores empresas farmacéuticas del mundo.</Typography>
        </Box>
        </Box>

        <Box ml={"20px"}>
        <Box ml={10} sx={{ borderRadius: '50%', overflow: 'hidden', width: '165px', height: '165px' }} >
        <img width={"165px"} src="/testimonios5.png" alt="avatar" />
        </Box>

        <Box sx={{width:"355px",padding:5,backgroundColor:"#FEEC92", borderRadius:"20px", with: "355px",}}>
        <Typography sx={{fontFamily:"Manrope", fontSize:"18px", fontWeight:400, lineHeight:"26px", color:"#003350"}}>“Como CEO de organizaciones, puedo decir con confianza que trabajar con Tyme es
una experiencia transformadora. Su profundo conocimiento en Recursos Humanos y
su enfoque estratégico han tenido un impacto significativo en nuestro crecimiento.
Con una mirada muy fuerte en el negocio, han demostrado ser socios valiosos,
proporcionando soluciones innovadoras y adaptadas a nuestras necesidades
específicas”.</Typography>
        <Typography sx={{mt:3, fontFamily:"Manrope",fontSize:"15px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>Gustavo Martinez
CEO &amp; Partner - España, México, Brazil y Argentina
The Cyranos – Ex. presidente mundial Walter Thompson - Board member de
Cleverman NY y de The Keenfolks USA.</Typography>
        </Box>
        </Box>

        <Box ml={"20px"}>
        <Box ml={10} sx={{ borderRadius: '50%', overflow: 'hidden', width: '165px', height: '165px' }}>
        <img width={"165px"} src="/testimonios6.png" alt="avatar" />
        </Box>

        <Box sx={{width:"355px",padding:5,backgroundColor:"#FEEC92", borderRadius:"20px", with: "355px",}}>
        <Typography sx={{fontFamily:"Manrope", fontSize:"18px", fontWeight:400, lineHeight:"26px", color:"#003350"}}>“El servicio de Tyme en mentoring, educación y capacitación de tecnológica para
RR.HH. ha sido realmente valioso. Los profesionales de HR tenemos que integrar
urgentemente la IA y todas las tecnologías a nuestra profesión y trabajo diario. Javier
es un gran speaker que te deja pensando luego de cada charla. Sin duda, estoy más
preparado para abordar los desafíos actuales del área, habiendo incorporado
tecnologías que hacen más eficiente y ágil mi gestión”.</Typography>
        <Typography sx={{mt:3, fontFamily:"Manrope",fontSize:"15px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>Juan Manuel Albuixech
HR Manager - USA
Worldwide Flight Services</Typography>
        </Box>
        </Box>
       
    </Box>
  )
}

export default Testimonios1