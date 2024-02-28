import { Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";


const Cultura1 = () => {
  return (
    <>
    <Hidden smDown>
    <Box
      p={"6%"}
      sx={{ width: "100%", height: "70vh", backgroundColor: "#104B70" }}   >
      <Box display={"flex"} component={NavLink} to={"/queHacemos"} sx={{textDecoration:"none"}}>
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
          maxWidth={"680px"}
          sx={{
            fontFamily: "Manrope",
            fontSize: "48px",
            lineHeight: "55px",
            fontWeight: "700",
            color: "white",
            mt: "2%",
          }}
        >
          Desarrollo de la <span style={{ color: '#72C8FF' }}>cultura organizacional</span>  y liderazgos
        </Typography>

        <Typography
          maxWidth={"880px"}
          sx={{
            fontFamily: "Manrope",
            fontSize: "24px",
            lineHeight: "30px",
            color: "white",
            fontWeight: "300",
            mt: "3%",
          }}
        >
          Trabajamos en el acompañamiento y evolución de los líderes y en el desarrollo de la cultura organizacional, a partir de la experiencia del empleado. Sabemos que el principal activo de las organizaciones son las personas que las integran, y por eso generamos estrategias de onboarding, team building y transformación de puestos de trabajo, entre otras.

        </Typography>
      </Box>
      <Box position={"absolute"} left={"75%"} top={"10%"}>
        <img src="/cultura.png" alt="" />
      </Box>
    </Box>
    
    </Hidden>
   
    <Hidden smUp>
    <Box
      p={"6%"}
      sx={{
        width: "100%",
        height: "100vh", // Ajustar la altura al 100% del viewport height
        backgroundColor: "#104B70",
        overflowY: "auto", // Permitir scroll vertical si es necesario
      }}    >
      <Box display={"flex"} component={NavLink} to={"/queHacemos"} sx={{textDecoration:"none"}}>
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
            fontSize: "38px",
            lineHeight: "45px",
            fontWeight: "700",
            color: "white",
            mt: "7%",
          }}
        >
          Desarrollo de la <span style={{ color: '#72C8FF' }}>cultura organizacional</span>  y liderazgos
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
          Trabajamos en el acompañamiento y evolución de los líderes y en el desarrollo de la cultura organizacional, a partir de la experiencia del empleado. Sabemos que el principal activo de las organizaciones son las personas que las integran, y por eso generamos estrategias de onboarding, team building y transformación de puestos de trabajo, entre otras.

        </Typography>
      </Box>
      <Box position={"absolute"}  top={"10%"}>
        <img src="/cultura.png" alt="" />
      </Box>
    </Box>
    </Hidden>
    </>
 
  );
};

export default Cultura1;