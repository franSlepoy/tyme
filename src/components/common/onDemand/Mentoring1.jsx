import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";


const Mentoring1 = () => {
  return (
    <Box
      p={"6%"}
      sx={{ width: "100%", height: "94vh", backgroundColor: "#046C31" }}
    >
      <Box display={"flex"} component={NavLink} to={"/nosotros"} sx={{textDecoration:"none"}}>
        <img height={"30px"} src="/arrowButton.png" alt="" />
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: "Manrope",
            fontWeight: "300",
            color: "white",
            lineHeight: "34px",
            ml: "4px",
            mt: "-2px",
          }}
        >
          HR on demand
        </Typography>
      </Box>

      <Box>
        <Typography
          maxWidth={"580px"}
          sx={{
            fontFamily: "Manrope",
            fontSize: "48px",
            lineHeight: "45px",
            fontWeight: "700",
            color: "white",
            mt: "7%",
          }}
        >
         <span style={{ color: '#73F0A2' }}>Mentoring</span>  personalizado
        </Typography>

        <Typography
          maxWidth={"780px"}
          sx={{
            fontFamily: "Manrope",
            fontSize: "24px",
            lineHeight: "30px",
            color: "white",
            fontWeight: "300",
            mt: "8%",
          }}
        >
          Creamos un servicio para líderes que buscan dar un paso hacia la transformación digital, a partir de la planificación estratégica y un asesoramiento especializado. Con este programa, capacitamos en el uso de la tecnología aplicada a la gestión del talento, impulsando la eficiencia para mejorar la experiencia y las habilidades de tu equipo de trabajo.

        </Typography>
      </Box>
      <Box position={"absolute"} left={"75%"} top={"10%"}>
        <img src="/mentoring.png" alt="" />
      </Box>
    </Box>
  );
};

export default Mentoring1;