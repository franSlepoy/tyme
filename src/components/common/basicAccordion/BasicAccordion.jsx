import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from '@mui/material';


export default function BasicAccordion() {
  return (
    <Box mt={"24px"} >
      <Accordion>
        <AccordionSummary
        
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}>Radiografía Transformadora de organizaciones: <strong style={{fontWeight:"800"}}>Evaluación y Diagnóstico</strong></Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:"300", lineHeight:"24px", color:"#003350"}}>
          Con un <strong style={{fontWeight:"800"}}> equipo interdisciplinario,</strong> realizamos una evaluación exhaustiva, <strong style={{fontWeight:"800"}}>incluyendo también herramientas tecnológicas como el gaming, IA, Web3, entras otras,</strong>  de la
situación actual de tu empresa, identificando las posibles barreras para un próspero
crecimiento y así diseñamos un plan de acción específico. Tyme es reconocido por su
excepcional habilidad para diagnosticar puntos de dolor en todo tipo de organización. 
          </Typography>
          <a style={{textDecoration:"none"}} href="/queHacemos">
            <Button sx={{borderRadius:"100px", border: "1px solid", color:"#003350", mt:3 }} variant='outlined'>Ver servicios</Button>
          </a>
          
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}><strong style={{fontWeight:"800"}}>Experiencia del empleado:</strong> Cultura organizacional, desarrollo de Líderes, entre otros.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          La experiencia del empleado se refiere al conjunto de interacciones y percepciones
que estos tienen en todo su estadio laboral en una organización, desde la atracción
del talento hasta la salida de la empresa. Aquí trabajamos fuertemente en el
desarrollo de la cultura organizacional, marca empleadora y el acompañamiento,
potenciamiento y evolución de los Líderes y Jefes.
La experiencia del empleado incluye factores como el ambiente laboral, políticas de
igualdad e inclusión, integración de las diversas generaciones, onboarding, team
building, conversaciones difíciles, transformación de puestos de trabajo, etc.
          </Typography>
          <a style={{textDecoration:"none"}} href="/queHacemos">
          <Button  sx={{borderRadius:"100px", border: "1px solid", color:"#003350", mt:3 }} variant='outlined'>Ver servicios</Button>
          </a>
         
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}>Waze Laboral</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          ¿Estás buscando una solución innovadora para transformar los puestos de trabajo con el fin de potenciar y desarrollar el talento de tu empresa en un mundo laboral en constante cambio? Diseñamos planes de reskilling y upskilling para empleados, permitiéndoles adaptarse a nuevos roles y adquirir nuevas habilidades en un mundo laboral en constante cambio.
          </Typography>
          <a style={{textDecoration:"none"}} href="/queHacemos">
          <Button  sx={{borderRadius:"100px", border: "1px solid", color:"#003350", mt:3 }} variant='outlined'>Ver servicios</Button>
          </a>
          
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}>Certificaciones: los primeros pasos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          Una certificación es una herramienta para validar el compromiso de una empresa con altos estándares de calidad, responsabilidad y cumplimiento. Empresas más comprometidas con la sociedad, con sus propios empleados y con el planeta. Además de aumentar la credibilidad y la confianza, la certificación puede abrir oportunidades comerciales y fomentar una cultura de mejora continua en la organización. En Tyme, estamos dedicados a acompañarte en cada paso del camino hacia la certificación, asegurando que tu empresa cumpla con los estándares y esté preparada para lo que se propone.
          </Typography>
          <a style={{textDecoration:"none"}} href="/queHacemos">
          <Button  sx={{borderRadius:"100px", border: "1px solid", color:"#003350", mt:3 }} variant='outlined'>Ver servicios</Button>
          </a>
          
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}>Charlas y conferencias</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <a style={{textDecoration:"none"}} href="/charlasYconferencias">
          <Button  sx={{borderRadius:"100px", border: "1px solid", color:"#003350", mt:3 }} variant='outlined'>Ver más</Button>
          </a>
         
        </AccordionDetails>
      </Accordion>
      
    </Box>
  );
}