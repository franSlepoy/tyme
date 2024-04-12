import { Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { Button } from "react-scroll";

const Evaluacion2 = ({ handleOpenModal1, handleCloseModal1, openModal1 }) => {
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
            sx={{ textDecoration: "none", cursor:"pointer" }}
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
              maxWidth={"980px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "45px",
                lineHeight: "55px",
                fontWeight: "700",
                color: "white",
                mt: 2,
              }}
            >
              Equipo de expertos en gestión del talento
            </Typography>

            <Typography
              maxWidth={"780px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "22px",
                lineHeight: "30px",
                color: "white",
                fontWeight: "100",
                mt: 3,
                width: "700px",
              }}
            >
              Junto a profesionales de diversas disciplinas y experiencia en
              management y RRHH, desarrollamos planes de mejora.
            </Typography>
          </Box>

          <Box display={"flex"} mt={3}>
            <Box width={"220px"}>
              <Typography
                sx={{
                  color: "#72C8FF",
                  fontFamily: "Manrope",
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "30px",
                }}
              >
                1
              </Typography>
              <Typography
                sx={{
                  color: "#73F0A2",
                  fontFamily: "Manrope",
                  fontSize: "22px",
                  lineHeight: "30px",
                  fontWeight: "600",
                  mt: 1,
                }}
              >
                Análisis integral y diagnóstico personalizado.
              </Typography>
            </Box>
            <Box width={"150px"} ml={"5%"}>
              <Typography
                sx={{
                  color: "#72C8FF",
                  fontFamily: "Manrope",
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "30px",
                }}
              >
                2
              </Typography>
              <Typography
                sx={{
                  color: "#73F0A2",
                  fontFamily: "Manrope",
                  fontSize: "22px",
                  fontWeight: "500",
                  mt: 1,
                  lineHeight: "30px",
                }}
              >
                Plan a medida.
              </Typography>
            </Box>
            <Box ml={"4%"} width={"220px"}>
              <Typography
                sx={{
                  color: "#72C8FF",
                  fontFamily: "Manrope",
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "30px",
                }}
              >
                3
              </Typography>

              <Typography
                sx={{
                  color: "#73F0A2",
                  fontFamily: "Manrope",
                  fontSize: "22px",
                  fontWeight: "500",
                  mt: 1,
                  lineHeight: "30px",
                }}
              >
                Guía constante para la incorporación de los cambios
                organizacionales.
              </Typography>
            </Box>
            <Box ml={"4%"} maxWidth={"220px"}>
              <Typography
                sx={{
                  color: "#72C8FF",
                  fontFamily: "Manrope",
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "30px",
                }}
              >
                4
              </Typography>
              <Typography
                sx={{
                  color: "#73F0A2",
                  fontFamily: "Manrope",
                  fontSize: "22px",
                  fontWeight: "500",
                  mt: 1,
                  lineHeight: "30px",
                }}
              >
                Acompañamiento para adaptar las estrategias.
              </Typography>
            </Box>
          </Box>

          <Box position={"absolute"} left={"75%"} top={"10%"}>
            <img src="/evolucion.png" alt="" />
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box
          p={"10%"}
          sx={{
            width: "100%",
            // Ajustar la altura al 100% del viewport height
            backgroundColor: "#104B70",
            
          }}
        >
          <Box mt={"3%"}>
            <Box>
              <Typography
                sx={{
                  color: "#72C8FF",
                  fontFamily: "Manrope",
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "30px",
                }}
              >
                1
              </Typography>
              <Typography
                sx={{
                  color: "#73F0A2",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  lineHeight: "30px",
                  fontWeight: "100",
                  mt: 2,
                }}
              >
                Análisis integral y diagnóstico personalizado.
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#72C8FF",
                  fontFamily: "Manrope",
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  mt: 2,
                }}
              >
                2
              </Typography>
              <Typography
                sx={{
                  color: "#73F0A2",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "100",
                  mt: 2,
                  lineHeight: "30px",
                }}
              >
                Plan a medida.
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#72C8FF",
                  fontFamily: "Manrope",
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  mt: 2,
                }}
              >
                3
              </Typography>

              <Typography
                sx={{
                  color: "#73F0A2",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "100",
                  mt: 2,
                  lineHeight: "30px",
                }}
              >
                Guía constante para la incorporación de los cambios
                organizacionales.
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#72C8FF",
                  fontFamily: "Manrope",
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  mt: 2,
                }}
              >
                4
              </Typography>
              <Typography
                sx={{
                  color: "#73F0A2",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "100",
                  mt: 2,
                  lineHeight: "30px",
                }}
              >
                Acompañamiento para adaptar las estrategias.
              </Typography>
            </Box>
          </Box>

          <Box position={"absolute"} left={"12%"} top={"123%"}>
            <img width={"80%"} src="/evolucion.png" alt="" />
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Evaluacion2;
