import { Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

const Acompañamiento2 = ({
  handleOpenModal4,
  handleCloseModal4,
  openModal4,
}) => {
  return (
    <>
      <Hidden smDown>
        <Box
          pl={"10%"}
          pt={"6%"}
          sx={{ width: "100%", height: "74vh", backgroundColor: "#104B70" }}
        >
          <Box
            display={"flex"}
            onClick={() => {
              handleCloseModal4();
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
                fontSize: "48px",
                lineHeight: "45px",
                fontWeight: "700",
                color: "white",
                mt: "2%",
              }}
            >
              Por qué es importante certificar
            </Typography>
          </Box>

          <Box display={"flex"} mt={"4%"}>
            <Box width={"20%"}>
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
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "22px",
                  fontWeight: "100",
                  mt: 1,
                  lineHeight: "30px",
                }}
              >
                Aumenta la credibilidad y la confianza de tus socios
                comerciales, clientes y colaboradores.
              </Typography>
            </Box>
            <Box width={"18%"} ml={"4%"}>
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
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "22px",
                  fontWeight: "100",
                  mt: 1,
                  lineHeight: "30px",
                }}
              >
                Impulsa la competitividad de tu empresa y abre nuevas
                oportunidades de negocio.
              </Typography>
            </Box>
            <Box width={"19%"} ml={"4%"}>
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
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "22px",
                  fontWeight: "100",
                  mt: 1,
                  lineHeight: "30px",
                }}
              >
                Mejora la relación con tus empleados porque ratifica el
                compromiso con políticas de bienestar.
              </Typography>
            </Box>
            <Box width={"20%"} ml={"4%"}>
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
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "22px",
                  fontWeight: "100",
                  mt: 1,
                  lineHeight: "30px",
                }}
              >
                Fomenta la mejora continua y la eficiencia, y asegura el
                cumplimiento de marcos regulatorios.
              </Typography>
            </Box>
          </Box>

          <Box position={"absolute"} left={"75%"} top={"10%"}>
            <img src="/Acom.png" alt="" />
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box
          p={"8%"}
          sx={{
            width: "100%",

            backgroundColor: "#104B70",
          }}
        >
          <Box>
            <Typography
              maxWidth={"980px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "30px",
                lineHeight: "30px",
                fontWeight: "700",
                color: "white",
              }}
            >
              Por qué es importante certificar
            </Typography>

            <Typography
              maxWidth={"780px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "26px",
                lineHeight: "35px",
                color: "white",
                fontWeight: "300",
                mt: "2%",
              }}
            >
              Aumenta la credibilidad y la confianza de tus socios comerciales,
              clientes y colaboradores.
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
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  fontWeight: "100",
                  mt: 2,
                }}
              >
                Impulsa la competitividad de tu empresa y abre nuevas
                oportunidades de negocio.
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
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  fontWeight: "100",
                  mt: 2,
                }}
              >
                Mejora la relación con tus empleados porque ratifica el
                compromiso con políticas de bienestar.
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
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  fontWeight: "100",
                  mt: 2,
                }}
              >
                Mejora la relación con tus empleados porque ratifica el
                compromiso con políticas de bienestar.
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
                  color: "white",
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  fontWeight: "100",
                  mt: 2,
                }}
              >
                Fomenta la mejora continua y la eficiencia, y asegura el
                cumplimiento de marcos regulatorios.
              </Typography>
            </Box>
          </Box>

          <Box position={"absolute"} top={"10%"}>
            <img src="/Acom.png" alt="" />
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Acompañamiento2;
