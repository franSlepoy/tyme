import { Box, Button, Typography } from "@mui/material";
import BlackButtom from "../blackButtom/BlackButtom";


const Charlas1 = ({ handleCloseComponente }) => {
    
  return (
    <Box position={"absolute"} top={"128%"} display={"flex"} height={"90vh"} width={"100%"} sx={{ bgcolor: "#73F0A2" }} zIndex={100}>
      <Box ml={"7%"} mt={"6%"}width={"53%"}>
        <Button onClick={handleCloseComponente} sx={{ml:-3}}>
        <img height={"40px"} src="/arrowButton.png" alt="" />
        </Button>
      
        <Typography sx={{mt:"22px",fontFamily:"Manrope", fontSize:"48px", fontWeight:"800", lineHeight:"45px", color:"white"}}>Amplifying impact:</Typography>
        <Typography sx={{mt:2,width:"54%",fontFamily:"Manrope", fontSize:"30px", fontWeight:"600", lineHeight:"36px", color:"black"}}>el poder de la influencia y el empoderamiento</Typography>
        <Typography sx={{mt:"28px",mb:"14%",fontFamily:"Manrope", fontSize:"24px", fontWeight:"400", lineHeight:"30px", color:"black"}}>Cómo la influencia puede ayudarte a motivar a tu equipo y tus clientes, y desencadenar una ola de creatividad en tu empresa. Cómo cultivar una cultura de confianza y herramientas para implementar el cambio midiendo su impacto en el negocio.</Typography>
        <BlackButtom texto={"Consultanos"}/>
      </Box>
      <Box width={"40%"} ml={6}>
        <img height={"100%"} src="/iconCH1.png" alt="" />
        <Typography position={"absolute"} top={"28%"} ml={"6%"} width={"25%"} sx={{fontFamily:"Marriweather", fontSize:"48px", fontWeight:"100",  color:"white"}}>
        Desencadenar una ola de creatividad en tu empresa
        </Typography>
      </Box>
    </Box>
  );
};

export default Charlas1;
