import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from '@mui/material';

export default function BasicAccordion2() {
  return (
    <Box mt={"24px"} >
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}>Análisis y diagnóstico personalizado</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          Ponemos el foco en detectar el problema desde su esencia involucrándonos con el proceso a través de diferentes análisis que efectuamos.
          </Typography>
        </AccordionDetails>
      </Accordion>

      
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}>Creación del plan de mejora: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          Creamos un plan a medida para dicha organización, basándonos en el grupo humano, cultura organizacional y clima, entre otros.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}> Implementación del plan </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          Acompañamos a los miembros de la organización en el momento de decidir e incorporar los cambios propuestos. Facilitamos una comunicación abierta, efectiva y transparente en todos los niveles de la empresa, para fortalecer la confianza y el compromiso de tus colaboradores.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}>Acompañamiento </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          Aseguramos la implementación de los cambios sin afectar la marcha habitual de la organización. También implementamos mecanismos de retroalimentación constante para conocer las necesidades y expectativas de tus empleados, y así adaptar nuestras estrategias de mejora.
          </Typography>
        </AccordionDetails>
      </Accordion>

      



     
   </Box>
   );
}