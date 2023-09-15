import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Box} from '@mui/material';

export default function BasicAccordion4() {
  return (
    <Box mt={"24px"} width={"510px"} >
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}>Evaluación Digitalizada</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          Realizamos una exhaustiva evaluación de tus procesos de recursos humanos para identificar oportunidades de mejora y la implementación de soluciones tecnológicas innovadoras.
          </Typography>
        </AccordionDetails>
      </Accordion>

      
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}>Asesoramiento Estratégico: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          Te brindamos orientación estratégica para alinear tus objetivos de transformación digital con la visión y metas organizacionales.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}> Personalización y Acompañamiento:  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          Adaptamos nuestro mentoring a las necesidades específicas de tu empresa, proporcionando un enfoque a medida y un seguimiento cercano en todo el proceso de cambio.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}>Integración Tecnológica: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          Te asesoramos en la selección y adopción de herramientas digitales que optimicen la gestión del talento, formación y el desarrollo profesional.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "Manrope", fontSize:"24px", fontWeight:300, lineHeight:"34px", color:"#003350"}}>Cultura Digital: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{mt:3,fontFamily: "Manrope", fontSize:"14px", fontWeight:300, lineHeight:"24px", color:"#003350"}}>
          Ayudamos a fomentar una cultura digital en tu organización, promoviendo la adopción de nuevas tecnologías y prácticas innovadoras.
          </Typography>
        </AccordionDetails>
      </Accordion>

      



     
   </Box>
   );
}