import { Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Button } from "react-scroll";

const Mentoring2 = ({ handleOpenModal5, handleCloseModal5, openModal5 }) => {
  return (
    <>
      <Hidden smDown>
        <Box sx={{ width: "100%", display: "flex" }}>
          <Box
            width={"52%"}
            height={"74vh"}
            sx={{
              p: "8%",
              backgroundImage: 'url("/personaTrabajando.png")', // Aquí debes especificar la URL de la imagen con la palabra clave 'url'
              backgroundSize: "cover", // Ajusta el tamaño de la imagen de fondo según el contenedor
              backgroundRepeat: "no-repeat", // Evita que la imagen de fondo se repita
              position: "relative", // Establece la posición relativa para que los elementos internos se posicionen correctamente
              height:"90vh"
            }}
          >
            <Box
              display={"flex"}
              component={Button}
            onClick={() => {
              handleCloseModal5();
            }}
            bgcolor={"transparent"}
            border={"none"}
            sx={{ textDecoration: "none", cursor:"pointer" }}
            >
              <img height={"30px"} src="/arrowButton.png" alt="" />
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Manrope",
                  fontWeight: "300",
                  color: "white",
                  lineHeight: "34px",
                  ml: "4px",
                }}
              >
                HR Trech trend
              </Typography>
            </Box>

            <Box>
              <Typography
                maxWidth={"280px"}
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "48px",
                  lineHeight: "53px",
                  fontWeight: "300",
                  color: "white",
                  mt: "20%",
                  ml: "5%",
                }}
              >
                Cómo lo hacemos
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              height: "79vh",
              width: "50%",
              p: "5%",
              backgroundColor: "#73F0A2",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "20px",
                lineHeight: "26px",
                color: "black",
                mt: "15%",
                fontWeight: "light",
              }}
            >
              1- Evaluación digitalizada: diagnóstico para la implementación de
              soluciones tecnológicas.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "20px",
                lineHeight: "26px",
                color: "black",
                mt: "5%",
                fontWeight: "light",
              }}
            >
              2- Asesoramiento: transformación digital para impulsar las metas
              de tu organización y acompañamiento del proceso de cambio.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "20px",
                lineHeight: "26px",
                color: "black",
                mt: "5%",
                fontWeight: "light",
              }}
            >
              3- Integración tecnológica: adopción de herramientas digitales
              para gestión del talento.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "20px",
                lineHeight: "26px",
                color: "black",
                mt: "5%",
                fontWeight: "light",
              }}
            >
              4- Fomento de la cultura digital: incorporación de nuevas
              tecnologías y prácticas innovadoras.
            </Typography>
          </Box>
        </Box>

        <Box position={"absolute"} zIndex={900} left={"73%"} top={"10%"}>
          <img  src="/mentoring2.png" alt="" />
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box
          sx={{
            width: "100%",
            height: "100vh", // Ajustar la altura al 100% del viewport height
            backgroundColor: "#104B70",
            overflowY: "auto", // Permitir scroll vertical si es necesario
          }}
        >
          <Box
            sx={{
              height: "100vh",
              width: "100%",
              p: "6%",
              backgroundColor: "#73F0A2",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "20px",
                lineHeight: "26px",
                color: "black",
                mt: "15%",
              }}
            >
              1- Evaluación digitalizada: diagnóstico para la implementación de
              soluciones tecnológicas.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "20px",
                lineHeight: "26px",
                color: "black",
                mt: "5%",
              }}
            >
              2- Asesoramiento: transformación digital para impulsar las metas
              de tu organización y acompañamiento del proceso de cambio.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "20px",
                lineHeight: "26px",
                color: "black",
                mt: "5%",
              }}
            >
              3- Integración tecnológica: adopción de herramientas digitales
              para gestión del talento.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "20px",
                lineHeight: "26px",
                color: "black",
                mt: "5%",
              }}
            >
              4- Fomento de la cultura digital: incorporación de nuevas
              tecnologías y prácticas innovadoras.
            </Typography>
          </Box>
        </Box>

        <Box position={"absolute"} /* zIndex={900} left={"75%"} top={"10%"} */>
          <img src="/mentoring2.png" alt="" />
        </Box>
      </Hidden>
    </>
  );
};

export default Mentoring2;
