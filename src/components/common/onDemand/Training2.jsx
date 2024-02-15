import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

const Training2 = () => {
  return (
    <>
      <Box sx={{ width: "100%", height: "94vh", display: "flex" }}>
        <Box
          width={"50%"}
          height={"94vh"}
          sx={{
            p: "6%",
            backgroundImage: 'url("/personaTrabajando.png")', // Aquí debes especificar la URL de la imagen con la palabra clave 'url'
            backgroundSize: "cover", // Ajusta el tamaño de la imagen de fondo según el contenedor
            backgroundRepeat: "no-repeat", // Evita que la imagen de fondo se repita
            position: "relative", // Establece la posición relativa para que los elementos internos se posicionen correctamente
          }}
        >
          <Box
            display={"flex"}
            component={NavLink}
            to={"/nosotros"}
            sx={{ textDecoration: "none" }}
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
                mt: "",
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
              ¿Por qué
              <strong> integrar la tecnología</strong>a la gestión de RRHH?
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: "50%", p: "6%", backgroundColor: "#73F0A2" }}>
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: "20px",
              lineHeight: "26px",
              color: "black",
              mt: "15%",
            }}
          >
            Permite acceder a las nuevas herramientas que están transformando la
            gestión en RRHH.
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
            Mejora la toma de decisiones basadas en datos, utilizando análisis y
            métricas para estrategias más efectivas.
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
            Optimiza la eficiencia de los procesos, abre oportunidades de
            negocios y fomenta la innovación.
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
            Potencia la experiencia del empleado e impulsa sus habilidades
            digitales.
          </Typography>
        </Box>
      </Box>

      <Box position={"absolute"} /* zIndex={900} left={"75%"} top={"10%"} */>
        <img src="/mentoring2.png" alt="" />
      </Box>
    </>
  );
};

export default Training2;
