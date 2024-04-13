import { Box, Hidden, Typography } from "@mui/material";

const TestimonioCard1 = () => {
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
              <img width={"100%"} src="/testimonios1.png" alt="" />
            </Box>
            <Typography
              sx={{
                mt: "25px",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "black",
              }}
            >
              Siempre que converso con Javier, quedo sorprendida por su profundo
              conocimiento y entendimiento sobre el mundo de los Recursos
              Humanos y la gestión de personas. Su enfoque innovador, combinado
              con su genuina pasión por el desarrollo del talento, lo convierten
              en una fuente invaluable de insights y recomendaciones. 
            </Typography>
            <Typography
              sx={{
                mt: 5,
                fontFamily: "Manrope",

                fontWeight: 800,
                fontSize: "16px",

                lineHeight: "26px",
                color: "black",
                textTransform: "uppercase",
              }}
            >
              Melina Cotlar
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "18px",
                color: "black",
              }}
            >
              Chief Risk Officer en AXA
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 100,
                lineHeight: "18px",
                color: "black",
              }}
            >
              International Markets
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
              <img width={"100%"} src="/testimonios1.png" alt="" />
            </Box>
            <Typography
              sx={{
                mt: "25px",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "black",
              }}
            >
              Siempre que converso con Javier, quedo sorprendida por su profundo
              conocimiento y entendimiento sobre el mundo de los Recursos
              Humanos y la gestión de personas. Su enfoque innovador, combinado
              con su genuina pasión por el desarrollo del talento, lo convierten
              en una fuente invaluable de insights y recomendaciones. 
            </Typography>
            <Typography
              sx={{
                mt: 5,
                fontFamily: "Manrope",

                fontWeight: 800,
                fontSize: "16px",

                lineHeight: "26px",
                color: "black",
                textTransform: "uppercase",
              }}
            >
              Melina Cotlar
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "18px",
                color: "black",
              }}
            >
              Chief Risk Officer en AXA
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 100,
                lineHeight: "18px",
                color: "black",
              }}
            >
              International Markets
            </Typography>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default TestimonioCard1;
