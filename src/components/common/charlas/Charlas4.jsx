import { Box, Button, Typography } from "@mui/material";
import BlackButtom from "../blackButtom/BlackButtom";


const Charlas4 = ({ handleCloseComponente }) => {
    
  return (
    <Box position={"absolute"} top={"122%"} display={"flex"} height={"90vh"} width={"100%"} sx={{ bgcolor: "#1296E9" }} zIndex={100}>
      <Box ml={"7%"} mt={"6%"}width={"53%"}>
        <Button onClick={handleCloseComponente} sx={{ml:-3}}>
        <img height={"40px"} src="/arrowButton.png" alt="" />
        </Button>
      
        <Typography sx={{mt:"22px",fontFamily:"Manrope", fontSize:"48px", fontWeight:"800", lineHeight:"45px", color:"white"}}>Ecualizando realidades</Typography>
        <Typography sx={{mt:2,width:"54%",fontFamily:"Manrope", fontSize:"30px", fontWeight:"600", lineHeight:"36px", color:"black"}}>tu mundo-mi mundo</Typography>
        <Typography sx={{mt:"28px",mb:"14%",fontFamily:"Manrope", fontSize:"24px", fontWeight:"400", lineHeight:"30px", color:"black"}}>Diversidad, inclusión y empatía como aliadas para que las diferencias sean aprovechadas como oportunidades y se conviertan en un impacto positivo en el negocio, generando soluciones colaborativas y creativas ante problemas compartidos.</Typography>
        <BlackButtom texto={"Consultanos"}/>
      </Box>
      <Box width={"40%"} ml={6}>
        <img height={"100%"} src="/iconCH2.png" alt="" />
        <Typography position={"absolute"} top={"28%"} ml={"6%"} width={"25%"} sx={{fontFamily:"Marriweather", fontSize:"48px", fontWeight:"100",  color:"white", zIndex:200}}>
        Generar soluciones colaborativas y creativas ante problemas compartidos
        </Typography>
      </Box>
    </Box>
  );
};

export default Charlas4;