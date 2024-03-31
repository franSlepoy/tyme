import { Box, Button, Hidden, TextField, Typography } from "@mui/material";
import React from "react";
import Formulario from "../../common/formulario/Formulario";

const Contacto = () => {
  return (
    <>
      <Hidden smDown>
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
                  width: "50%",
                  mt: "20%",
                }}
              >
                We are Open ¡Contáctanos!
              </Typography>
              <Formulario />
            </Box>

            <Box ml={"7%"} width={"60%"}>
              <img width={"100%"}  src="/contacto.png" alt="" />
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
                  fontSize: "16px",
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
