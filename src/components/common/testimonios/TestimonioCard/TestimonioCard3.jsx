import { Box, Hidden, Typography } from "@mui/material";

const TestimonioCard3 = () => {
  return (
    <>
      <Hidden smDown>
        <Box sx={{ width: "400px" }} ml={"2%"}>
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
              <img width={"100%"} src="/testimonios3.png" alt="avatar" />
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
              Tyme fue un socio esencial para nuestra estrategia de gestión de
              capital humano, gracias a su vocación de servicio y
              profesionalismo. Somos una organización en constante crecimiento y
              su ayuda nos permitió diagnosticar a nuestros líderes, captar
              nuevos talentos y transformarnos en un equipo de alto
              rendimiento. 
            </Typography>
            <Typography
              sx={{
                mt: 5,
                fontFamily: "Manrope",

                fontWeight: 800,
                fontSize: "16px",

                lineHeight: "28px",
                color: "black",
                textTransform: "uppercase",
              }}
            >
              Carlos Zucchi
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              CEO & Partner de ARGIS
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              (España e Israel)
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
              <img width={"100%"} src="/testimonios3.png" alt="avatar" />
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
              Tyme fue un socio esencial para nuestra estrategia de gestión de
              capital humano, gracias a su vocación de servicio y
              profesionalismo. Somos una organización en constante crecimiento y
              su ayuda nos permitió diagnosticar a nuestros líderes, captar
              nuevos talentos y transformarnos en un equipo de alto
              rendimiento. 
            </Typography>
            <Typography
              sx={{
                mt: 5,
                fontFamily: "Manrope",

                fontWeight: 800,
                fontSize: "16px",

                lineHeight: "28px",
                color: "black",
                textTransform: "uppercase",
              }}
            >
              Carlos Zucchi
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              CEO & Partner de ARGIS
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              (España e Israel)
            </Typography>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default TestimonioCard3;
