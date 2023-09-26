import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';


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
          Ofrecemos un servicio de mentoring
personalizado diseñado para líderes que deseen dar un paso
hacia la transformación digital. Nuestro enfoque se centra en
brindar asesoramiento especializado para evaluar digitalmente
la gestión del departamento de Recursos Humanos y guiar a tu
organización hacia una estrategia de transformación exitosa.
          </Typography>
          <Link to={"/queHacemos"} style={{textDecoration:"none"}} >
          <Button sx={{borderRadius:"100px", border: "1px solid", color:"#003350", mt:3 }} variant='outlined'>Ver servicios</Button>
          </Link>
          
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
          Ofrecemos un
servicio para profesionales de Recursos Humanos que deseen
potenciar sus habilidades y conocimientos en el uso de
Inteligencia Artificial, ChatGPT, Machine Learning, Gaming,
Metaverso, Blockchain, entre otras tecnologías aplicada a esta
área. Realizamos charlas y diferentes capacitaciones para la
transformación y gestión del nuevo rol de RR.HH.
          </Typography>
          <Link to={"/queHacemos"} style={{textDecoration:"none"}}>
          <Button sx={{borderRadius:"100px", border: "1px solid", color:"#003350", mt:3 }} variant='outlined'>Ver servicios</Button>
          </Link>
         
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
        <Link to={"/charlasYconferencias"} style={{textDecoration:"none"}}>
        <Button  sx={{borderRadius:"100px", border: "1px solid", color:"#003350", mt:3 }} variant='outlined'>Ver más</Button>
        </Link>
          
        </AccordionDetails>
      </Accordion>
   </Box>
   );
}