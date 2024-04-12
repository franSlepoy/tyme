import { Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import Cultura2 from "./Cultura2";

const Cultura1 = ({ handleOpenModal2, handleCloseModal2, openModal2 }) => {
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
            onClick={() => {
              handleCloseModal2();
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
              maxWidth={"680px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "45px",
                lineHeight: "55px",
                fontWeight: "700",
                color: "white",
                mt: "2%",
              }}
            >
              Desarrollo de la{" "}
              <span style={{ color: "#72C8FF" }}>cultura organizacional</span> y
              liderazgos
            </Typography>

            <Typography
              maxWidth={"880px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "22px",
                lineHeight: "30px",
                color: "white",
                fontWeight: "100",
                mt: "5%",
                width: "80%",
              }}
            >
              Trabajamos en el acompañamiento y evolución de los líderes y en el
              desarrollo de la cultura organizacional, a partir de la
              experiencia del empleado. Sabemos que el principal activo de las
              organizaciones son las personas que las integran, y por eso
              generamos estrategias de onboarding, team building y
              transformación de puestos de trabajo, entre otras.
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

            backgroundColor: "#104B70",
          }}
        >
          <Box>
            <Typography
              maxWidth={"95%"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "30px",
                lineHeight: "32px",
                fontWeight: "800",
                color: "white",
                mt: "7%",
              }}
            >
              Desarrollo de la{" "}
              <span style={{ color: "#72C8FF" }}>cultura organizacional</span> y
              liderazgos
            </Typography>

            <Typography
              maxWidth={"90%"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "20px",
                lineHeight: "28px",
                color: "white",
                fontWeight: "300",
                mt: "8%",
              }}
            >
              Trabajamos en el acompañamiento y evolución de los líderes y en el
              desarrollo de la cultura organizacional, a partir de la
              experiencia del empleado. Sabemos que el principal activo de las
              organizaciones son las personas que las integran, y por eso
              generamos estrategias de onboarding, team building y
              transformación de puestos de trabajo, entre otras.
            </Typography>
          </Box>
          <Box position={"absolute"} top={"10%"}>
            <img width={"80%"} src="/cultura.png" alt="" />
          </Box>
        </Box>
        <Box mt={-1}>
          <Cultura2/>
        </Box>
      </Hidden>
    </>
  );
};

export default Cultura1;
