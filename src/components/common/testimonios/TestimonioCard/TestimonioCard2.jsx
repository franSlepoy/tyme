import { Box, Hidden, Typography } from "@mui/material";

const TestimonioCard2 = () => {
  return (
    <>
      <Hidden smDown>
        <Box sx={{ width: "400px", m:"auto" }}>
          <Box
            sx={{
              mt: "52px",
              padding: 6,
              backgroundColor: "#E5DE04",
              borderRadius: "33px",
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
                width: "80px",
                height: "80px",
                mt: -10,
              }}
            >
              <img width={"100%"} src="/testimonios2.png" alt="avatar" />
            </Box>
            <Typography
              sx={{
                mt: "25px",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "black",
                width: "290px",
              }}
            >
              Tyme ha sido un socio estratégico en la digitalización de nuestro
              Departamento de Talento. Gracias a su colaboración crucial,
              implementamos herramientas digitales innovadoras que han agilizado
              nuestros procesos operativos y permitido una mayor personalización
              en el desarrollo y crecimiento profesional de nuestro equipo.
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontFamily: "Manrope",

                fontWeight: 800,
                fontSize: "16px",

                lineHeight: "26px",
                color: "black",
                textTransform: "uppercase",
              }}
            >
              {" "}
              Alberto Benbunan
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              Founder & CEO Global |{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              Emprendedor Endeavor
            </Typography>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box sx={{ width: "100%", m:"auto" }}>
          <Box
            sx={{
              mt: "58px",
              padding: 3,
              backgroundColor: "#E5DE04",
              borderRadius: "33px",
            }}
          >
            <Box
              sx={{
                m:"auto",
                borderRadius: "50%",
                overflow: "hidden",
                width: "80px",
                height: "80px",
                mt: -8,
              }}
            >
              <img width={"100%"} src="/testimonios2.png" alt="avatar" />
            </Box>
            <Typography
              sx={{
                mt: "25px",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "black",
                
              }}
            >
              Tyme ha sido un socio estratégico en la digitalización de nuestro
              Departamento de Talento. Gracias a su colaboración crucial,
              implementamos herramientas digitales innovadoras que han agilizado
              nuestros procesos operativos y permitido una mayor personalización
              en el desarrollo y crecimiento profesional de nuestro equipo.
            </Typography>
            <Typography
              sx={{
                mt: 1,
                fontFamily: "Manrope",

                fontWeight: 800,
                fontSize: "16px",

                lineHeight: "26px",
                color: "black",
                textTransform: "uppercase",
              }}
            >
              {" "}
              Alberto Benbunan
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              Founder & CEO Global |{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              Emprendedor Endeavor (Europa y Latam)
            </Typography>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default TestimonioCard2;
