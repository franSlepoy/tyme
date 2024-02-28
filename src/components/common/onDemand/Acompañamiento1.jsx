import { Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";


const Acompañamiento1 = () => {
  return (
    <>
    <Hidden smDown>
    <Box
      p={"6%"}
      sx={{ width: "100%", height: "70vh", backgroundColor: "#104B70" }}
    >
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
            fontSize: "48px",
            lineHeight: "45px",
            fontWeight: "700",
            color: "white",
            mt: "2%",
          }}
        >
         Acompañamiento para certificaciones

        </Typography>

        <Typography
          maxWidth={"780px"}
          sx={{
            fontFamily: "Manrope",
            fontSize: "24px",
            lineHeight: "30px",
            color: "white",
            fontWeight: "300",
            mt: "3%",
          }}
        >
          Te asistimos en cada paso hasta su aprobación, como una herramienta que valida el compromiso de tu empresa con altos estándares de calidad. Esto suma un valor diferencial que permite atraer nuevos clientes y acceder a nuevos mercados, y promueve una revisión continua de los procesos internos que potencian un crecimiento sostenible y a largo plazo.

        </Typography>
      </Box>
      <Box position={"absolute"} left={"75%"} top={"10%"}>
        <img src="/Acom.png" alt="" />
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
      }}
    >
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
          width={"93%"}
          sx={{
            fontFamily: "Manrope",
            fontSize: "28px",
            lineHeight: "45px",
            fontWeight: "700",
            color: "white",
            mt: "7%",
          }}
        >
         Acompañamiento para certificaciones

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
          Te asistimos en cada paso hasta su aprobación, como una herramienta que valida el compromiso de tu empresa con altos estándares de calidad. Esto suma un valor diferencial que permite atraer nuevos clientes y acceder a nuevos mercados, y promueve una revisión continua de los procesos internos que potencian un crecimiento sostenible y a largo plazo.

        </Typography>
      </Box>
      <Box position={"absolute"}  top={"10%"}>
        <img src="/Acom.png" alt="" />
      </Box>
    </Box>
    </Hidden>
    </>
    
  );
};

export default Acompañamiento1;