import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from '@mui/material';

export default function BasicAccordion1() {
  return (
    <Box mt={"24px"} >
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}>Mentoring personalizado</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          Con un equipo interdisciplinario, realizamos una evaluación exhaustiva de la situación actual de tu empresa, identificando las posibles barreras para un próspero crecimiento y así diseñamos un plan de acción específico. Tyme es reconocido por su excepcional habilidad para diagnosticar puntos de dolor en todo tipo de organización. 
          </Typography>
          <Button sx={{borderRadius:"100px", border: "1px solid", color:"#003350", mt:3 }} variant='outlined'>Ver servicios</Button>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}>Training y educación en tecnología para RRHH</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          Servicio de gestión integral que parte de lo que viven y sienten los empleados y trata de mejorar la relación entre ellos y las organizaciones a través de la identificación de los momentos claves, llevando al día a día una experiencia diferencial. El plan debe ayudar a formar una cultura que impacte y potencie la estrategia de la empresa, y sea un motor para el cumplimiento de metas y objetivos a través de las personas.
          </Typography>
          <Button sx={{borderRadius:"100px", border: "1px solid", color:"#003350", mt:3 }} variant='outlined'>Ver servicios</Button>
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
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          ¿Estás buscando una solución innovadora para transformar los puestos de trabajo con el fin de potenciar y desarrollar el talento de tu empresa en un mundo laboral en constante cambio? Diseñamos planes de reskilling y upskilling para empleados, permitiéndoles adaptarse a nuevos roles y adquirir nuevas habilidades en un mundo laboral en constante cambio.
          </Typography>
          <Button sx={{borderRadius:"100px", border: "1px solid", color:"#003350", mt:3 }} variant='outlined'>Ver servicios</Button>
        </AccordionDetails>
      </Accordion>
   </Box>
   );
}