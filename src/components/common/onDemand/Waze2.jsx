import { Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

const Waze2 = ({ handleOpenModal3, handleCloseModal3, openModal3 }) => {
  return (
    <>
      <Hidden smDown>
        <Box
          pl={"10%"}
          pt={"6%"}
          sx={{ width: "95%", height: "74vh", backgroundColor: "#104B70" }}
        >
          <Box
            display={"flex"}
            onClick={() => {
              handleCloseModal3();
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
              Cómo lo hacemos
            </Typography>

            <Typography
              width={"78%"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "24px",
                lineHeight: "35px",
                color: "white",
                fontWeight: "300",
                mt: "2%",
              }}
            >
              Junto a profesionales de diversas disciplinas y experiencia en
              management y RRHH, desarrollamos planes de mejora.
            </Typography>
          </Box>

          <Box display={"flex"} mt={"2%"}>
            <Box width={"50%"}>
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
                Diagnóstico:
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "22px",
                  fontWeight: "100",
                  lineHeight: "26px",
                }}
              >
                identificamos las necesidades futuras de tu empresa, en base al
                análisis del sector.
              </Typography>
            </Box>
            <Box width={"48%"} ml={"4%"}>
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
                  lineHeight: "30px",
                  fontWeight: "600",
                  mt: 1,
                }}
              >
                Planificación:
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "22px",
                  fontWeight: "100",
                }}
              >
                creamos planes a medida, con foco en el desarrollo de talentos.
              </Typography>
            </Box>
            <Box width={"44%"} ml={"3%"}>
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
                  lineHeight: "30px",
                  fontWeight: "600",
                  mt: 1,
                }}
              >
                Ejecución:
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "22px",
                  fontWeight: "100",
                }}
              >
                ponemos en marcha la estrategia, alineada a tus metas de
                crecimiento.
              </Typography>
            </Box>
            <Box width={"46%"} ml={"4%"} pr={3}>
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
                  lineHeight: "30px",
                  fontWeight: "600",
                  mt: 1,
                }}
              >
                Evaluación:
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "22px",
                  fontWeight: "100",
                }}
              >
                monitoreamos los resultados y medimos su impacto directo en el
                negocio.
              </Typography>
            </Box>
          </Box>

          <Box position={"absolute"} left={"75%"} top={"10%"}>
            <img src="/waze.png" alt="" />
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
              sx={{
                fontFamily: "Manrope",
                fontSize: "30px",
                lineHeight: "32px",
                fontWeight: "700",
                color: "white",
                
              }}
            >
              Cómo lo hacemos
            </Typography>

            <Typography
              maxWidth={"90%"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "20px",
                lineHeight: "28px",
                color: "white",
                fontWeight: "300",
                mt: "2%",
              }}
            >
              Junto a profesionales de diversas disciplinas y experiencia en
              management y RRHH, desarrollamos planes de mejora.
            </Typography>
          </Box>
          <Box mt={"5%"}>
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
                  fontWeight: "800",
                  mt: 2,
                }}
              >
                Diagnóstico:
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "100",
                }}
              >
                identificamos las necesidades futuras de tu empresa, en base al
                análisis del sector.
              </Typography>
            </Box>
            <Box mt={"5%"}>
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
                  fontSize: "20px",
                  fontWeight: "800",
                  mt: 2,
                }}
              >
                Planificación:
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "100",
                }}
              >
                creamos planes a medida, con foco en el desarrollo de talentos.
              </Typography>
            </Box>
            <Box mt={"5%"}>
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
                  fontSize: "20px",
                  fontWeight: "800",
                  mt: 2,
                }}
              >
                Ejecución:
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "100",
                }}
              >
                ponemos en marcha la estrategia, alineada a tus metas de
                crecimiento.
              </Typography>
            </Box>
            <Box mt={"5%"}>
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
                  fontSize: "20px",
                  fontWeight: "800",
                  mt: 2,
                }}
              >
                Evaluación:
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "100",
                }}
              >
                monitoreamos los resultados y medimos su impacto directo en el
                negocio.
              </Typography>
            </Box>
          </Box>
          
        </Box>
      </Hidden>
    </>
  );
};

export default Waze2;
