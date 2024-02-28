import { Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

const Training1 = () => {
  return (
    <>
      <Hidden smDown>
      <Box
      p={"6%"}
      sx={{ width: "100%", height: "70vh", backgroundColor: "#046C31" }}
    >
      <Box display={"flex"} component={NavLink} to={"/queHacemos"} sx={{textDecoration:"none"}}>
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
            mt: "2%",
          }}
        >
         <span style={{ color: '#73F0A2' }}>Training y educación</span> en innovación tecnológica

        </Typography>

        <Typography
          maxWidth={"780px"}
          sx={{
            fontFamily: "Manrope",
            fontSize: "24px",
            lineHeight: "30px",
            color: "white",
            fontWeight: "300",
            mt: "3%",
          }}
        >
          Ofrecemos un servicio integral, adaptado a la demanda de los profesionales que quieren potenciar sus habilidades y conocimientos en el uso de distintas tecnologías aplicadas al sector, con capacitaciones para la transformación de la cultura organizacional, gestión del nuevo rol de Recursos Humanos y desarrollo de estrategias de negocios más efectivas.
        </Typography>
      </Box>
      <Box position={"absolute"} left={"75%"} top={"10%"}>
        <img src="/training.png" alt="" />
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
