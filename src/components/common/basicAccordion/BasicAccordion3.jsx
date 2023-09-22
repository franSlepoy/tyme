import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Box} from '@mui/material';

export default function BasicAccordion3() {
  return (
    <Box mt={"24px"} width={"430px"} >
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}>Diagnóstico</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          Realizamos una evaluación de tu organización. Utilizamos también
tecnologías digitales y/o gamificación para captar datos precisos y
significativos.
          </Typography>
        </AccordionDetails>
      </Accordion>

      
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}>Planificación </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          Creamos un plan a medida para identificar y desarrollar la cultura
y el liderazgo de tu emprsa, apoyándonos en la tecnología y metodologías
propias para diseñar estrategias efectivas.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}> Acción </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          Implementamos el plan aprobado. También brindamos diferentes
formaciones y herramientas a tus empleados, Líderes/ Jefes.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}>Medición, acompañamiento y mejora continua </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          Hacemos una medición de los
resultados. Realizamos seguimientos periódicos y ajustes de estrategia según
los resultados obtenidos.
          </Typography>
        </AccordionDetails>
      </Accordion>

      



     
   </Box>
   );
}