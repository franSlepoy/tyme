import { Box, Hidden,Typography } from "@mui/material";
import Formulario from "../../common/formulario/Formulario";

const Contacto = () => {
  return (
    <>
      <Hidden lgDown>
        <Box width={"100%"} sx={{ bgcolor: "rgba(120, 145, 162, 0.3)" }}>
          <Box display={"flex"} m={"auto"}>
            <Box ml={"7%"}>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Merriweather",
                  fontWeight: "100",
                  color: "black",
                  fontSize: "40px",
                  
                  mt: "20%",
                }}
              >
                We are Open ¡Contáctanos!
              </Typography>
              <Formulario />
            </Box>

            <Box ml={"7%"} width={"60%"}>
              <img style={{objectFit: "cover", height: "100%", width: "100%"}} width={"100%"}  src="/contacto.png" alt="" />
            </Box>
          </Box>
        </Box>
      </Hidden>
       
      <Hidden lgUp smDown>
        <Box width={"100%"} sx={{ bgcolor: "rgba(120, 145, 162, 0.3)" }}>
          <Box display={"flex"} m={"auto"}>
            <Box ml={"7%"}>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Merriweather",
                  fontWeight: "100",
                  color: "black",
                  fontSize: "40px",
                  
                  mt: "20%",
                }}
              >
                We are Open ¡Contáctanos!
              </Typography>
              <Formulario />
            </Box>

            <Box ml={"7%"} width={"70%"}>
            <img style={{objectFit: "cover", height: "100%", width: "100%"}} width={"100%"}  src="/contacto.png" alt="" />
            </Box>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box
          width={"100%"}
          sx={{
            backgroundImage: "url('/contacto.png')", // Ruta de la imagen de fondo
            backgroundSize: "cover", // Ajusta el tamaño de la imagen para cubrir todo el contenedor
            backgroundPosition: "center", // Centra la imagen de fondo
            pt:"10%"
          }}
        >
          <Box m={"auto"}>
            <Box ml={"7%"}>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "26px",
                  color: "white",
                  
                }}
              >
                We are Open ¡Contáctanos!
              </Typography>
              <Formulario />
            </Box>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Contacto;
