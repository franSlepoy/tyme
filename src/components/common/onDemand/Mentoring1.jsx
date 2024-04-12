import { Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Button } from "react-scroll";
import Mentoring2 from "./Mentoring2";

const Mentoring1 = ({ handleOpenModal5, handleCloseModal5, openModal5 }) => {
  return (
    <>
      <Hidden smDown>
        <Box
          pl={"10%"}
          pt={"6%"}
          sx={{ width: "100%", height: "74vh", backgroundColor: "#046C31" }}
        >
          <Box
            display={"flex"}
            component={Button}
            onClick={() => {
              handleCloseModal5();
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
              sx={{
                fontFamily: "Manrope",
                fontSize: "45px",
                lineHeight: "75px",
                fontWeight: "700",
                color: "#73F0A2",
                mt: 1,
              }}
            >
              Mentoring
            </Typography>
            <Typography
              maxWidth={"580px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "45px",
                lineHeight: "15px",
                fontWeight: "700",
                color: "white",
              }}
            >
              personalizado
            </Typography>

            <Typography
              maxWidth={"780px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "22px",
                lineHeight: "30px",
                color: "white",
                fontWeight: "100",
                mt: "8%",
                width: "70%",
              }}
            >
              Creamos un servicio para líderes que buscan dar un paso hacia la
              transformación digital, a partir de la planificación estratégica y
              un asesoramiento especializado. Con este programa, capacitamos en
              el uso de la tecnología aplicada a la gestión del talento,
              impulsando la eficiencia para mejorar la experiencia y las
              habilidades de tu equipo de trabajo.
            </Typography>
          </Box>
          <Box position={"absolute"} left={"71%"} top={"10%"}>
            <img src="/mentoring.png" alt="" />
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box p={"8%"} sx={{ width: "100%", backgroundColor: "#046C31" }}>
          <Box>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "30px",
                lineHeight: "32px",
                fontWeight: "700",
                color: "#73F0A2",
                mt: 1,
              }}
            >
              Mentoring
            </Typography>
            <Typography
              maxWidth={"580px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "30px",
                lineHeight: "32px",
                fontWeight: "700",
                color: "white",
              }}
            >
              personalizado
            </Typography>

            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "20px",
                lineHeight: "28px",
                color: "white",
                fontWeight: "100",
                mt: "8%",
                width: "90%",
              }}
            >
              Creamos un servicio para líderes que buscan dar un paso hacia la
              transformación digital, a partir de la planificación estratégica y
              un asesoramiento especializado. Con este programa, capacitamos en
              el uso de la tecnología aplicada a la gestión del talento,
              impulsando la eficiencia para mejorar la experiencia y las
              habilidades de tu equipo de trabajo.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Mentoring2 />
        </Box>
      </Hidden>
    </>
  );
};

export default Mentoring1;
