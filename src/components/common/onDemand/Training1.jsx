import { Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Button } from "react-scroll";

const Training1 = ({ handleOpenModal6, handleCloseModal6, openModal6 }) => {
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
              handleCloseModal6();
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
          maxWidth={"580px"}
          sx={{
            fontFamily: "Manrope",
            fontSize: "45px",
            lineHeight: "45px",
            fontWeight: "700",
            color: "white",
            mt:3
          }}
        >
         <span style={{ color: '#73F0A2' }}>Training y educación</span> en innovación tecnológica

        </Typography>

        <Typography
          maxWidth={"780px"}
          sx={{
            fontFamily: "Manrope",
            fontSize: "22px",
            lineHeight: "30px",
            color: "white",
            fontWeight: "100",
            mt: "6%",
            width: "605px",
          }}
        >
          Ofrecemos un servicio integral, adaptado a la demanda de los profesionales que quieren potenciar sus habilidades y conocimientos en el uso de distintas tecnologías aplicadas al sector, con capacitaciones para la transformación de la cultura organizacional, gestión del nuevo rol de Recursos Humanos y desarrollo de estrategias de negocios más efectivas.
        </Typography>
      </Box>
      <Box position={"absolute"} left={"72%"} top={"4%"}>
        <img src="/training.png" alt="" />
      </Box>
      <Box
          width={"230px"}
          height={"230px"}
          p={2}
          sx={{
            bgcolor: "#73F0A2",
            borderRadius: "100%",
            position: "absolute",
            left: "72%",
            top: "32vh",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Manrope",
              fontSize: "22px",
              lineHeight: "25px",
              color: "black",
              mt:"30%",
              ml:"4%",
              width:"183px"
            }}
          >
           ¿Por qué <strong>integrar la tecnología </strong> 
a la gestión 
de RRHH?

          </Typography>
        </Box>
    </Box>
      </Hidden>
      <Hidden smUp>
        <Box
          p={"6%"}
          sx={{
            width: "100%",
            height: "100vh", // Ajustar la altura al 100% del viewport height
            backgroundColor: "#104B70",
            overflowY: "auto", // Permitir scroll vertical si es necesario
          }}
        >
          <Box
            display={"flex"}
            component={NavLink}
            to={"/queHacemos"}
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
                mt: "-2px",
              }}
            >
              HR on demand
            </Typography>
          </Box>

          <Box>
            <Typography
              maxWidth={"580px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "48px",
                lineHeight: "45px",
                fontWeight: "700",
                color: "white",
                mt: "7%",
              }}
            >
              <span style={{ color: "#73F0A2" }}>Training y educación</span> en
              innovación tecnológica
            </Typography>

            <Typography
              maxWidth={"780px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "24px",
                lineHeight: "30px",
                color: "white",
                fontWeight: "300",
                mt: "8%",
              }}
            >
              Ofrecemos un servicio integral, adaptado a la demanda de los
              profesionales que quieren potenciar sus habilidades y
              conocimientos en el uso de distintas tecnologías aplicadas al
              sector, con capacitaciones para la transformación de la cultura
              organizacional, gestión del nuevo rol de Recursos Humanos y
              desarrollo de estrategias de negocios más efectivas.
            </Typography>
          </Box>
          <Box position={"absolute"} top={"10%"}>
            <img src="/training.png" alt="" />
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Training1;
