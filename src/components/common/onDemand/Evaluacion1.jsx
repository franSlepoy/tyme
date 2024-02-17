import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";


const Evaluacion1 = () => {
  return (
    <Box
      p={"6%"}
      sx={{ width: "100%", height: "94vh", backgroundColor: "#104B70" }}
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
            mt: "7%",
          }}
        >
          Evaluación, diagnóstico y planificación
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
          Con un equipo interdisciplinario y a través de herramientas
          tecnológicas, como gamificación, IA y Web3, realizamos una evaluación
          exhaustiva de la situación actual de tu empresa, identificando las
          posibles barreras para su crecimiento, y así diseñamos un plan de
          acción adecuado a tus demandas para que puedas alcanzar tus objetivos
          de negocios.
        </Typography>
      </Box>
      <Box position={"absolute"} left={"75%"} top={"10%"}>
        <img src="/evolucion.png" alt="" />
      </Box>
    </Box>
  );
};

export default Evaluacion1;
