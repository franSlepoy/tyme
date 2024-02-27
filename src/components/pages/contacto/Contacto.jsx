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

            <Box ml={"7%"} >
              <img  height={"83%"} src="/contacto.png" alt="" />
            </Box>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Typography
          variant="h1"
          sx={{
            width: "90%",
            padding: 0,
            fontFamily: "Manrope",
            fontWeight: "800",
            color: "#003350",
            fontSize: "58px",
            textAlign: "center",
            letterSpacing: -2.23,
            mt: "70px",
          }}
        >
          We are Open ¡Contáctanos!
        </Typography>

        <Box>
          <Box mt={2} mb={-12}>
            <img width={"100%"} src="/open.jpg" alt="" />
          </Box>
          <Formulario />
        </Box>
        <Box mt={-40} ml={76}>
          <img src="/firuleteQueHacemos.png" alt="" />
        </Box>
      </Hidden>
    </>
  );
};

export default Contacto;
