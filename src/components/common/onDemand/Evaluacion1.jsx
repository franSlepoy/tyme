import { Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Button } from "react-scroll";

const Evaluacion1 = ({ handleOpenModal1, handleCloseModal1, openModal1 }) => {
  return (
    <>
      <Hidden smDown>
        <Box
          pl={"10%"}
          pt={"6%"}
          sx={{ width: "100%", height: "73vh", backgroundColor: "#104B70" }}
        >
          <Box
            display={"flex"}
            component={Button}
            onClick={() => {
              handleCloseModal1();
            }}
            bgcolor={"transparent"}
            border={"none"}
            sx={{ textDecoration: "none", cursor: "pointer" }}
            ml={-3.5}
          >
            <img height={"30px"} src="/arrowButton.png" alt="" />
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Manrope",
                fontWeight: "200",
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
              maxWidth={"540px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "45px",
                lineHeight: "55px",
                fontWeight: "700",
                color: "white",
                mt: "2%",
              }}
            >
              Evaluación, diagnóstico y planificación
            </Typography>

            <Typography
              maxWidth={"780px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "22px",
                lineHeight: "30px",
                color: "white",
                fontWeight: "100",
                mt: "5%",
                width: "700px",
              }}
            >
              Con un equipo interdisciplinario y a través de herramientas
              tecnológicas, como gamificación, IA y Web3, realizamos una
              evaluación exhaustiva de la situación actual de tu empresa,
              identificando las posibles barreras para su crecimiento, y así
              diseñamos un plan de acción adecuado a tus demandas para que
              puedas alcanzar tus objetivos de negocios.
            </Typography>
          </Box>
          <Box position={"absolute"} left={"75%"} top={"10%"}>
            <img src="/evolucion.png" alt="" />
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box
          p={"7%"}
          sx={{
            width: "100%",
            height: "100vh", // Ajustar la altura al 100% del viewport height
            backgroundColor: "#104B70",
            overflowY: "auto", // Permitir scroll vertical si es necesario
          }}
        >
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
              Evaluación, diagnóstico y planificación
            </Typography>

            <Typography
              maxWidth={"780px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "20px",
                lineHeight: "30px",
                color: "white",
                fontWeight: "300",
                mt: "8%",
              }}
            >
              Con un equipo interdisciplinario y a través de herramientas
              tecnológicas, como gamificación, IA y Web3, realizamos una
              evaluación exhaustiva de la situación actual de tu empresa,
              identificando las posibles barreras para su crecimiento, y así
              diseñamos un plan de acción adecuado a tus demandas para que
              puedas alcanzar tus objetivos de negocios.
            </Typography>
          </Box>
          <Box position={"absolute"} top={"10%"}>
            <img width={"80%"} src="/evolucion.png" alt="" />
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Evaluacion1;
