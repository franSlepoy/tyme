import { Box, Hidden, Typography } from "@mui/material";

const TestimonioCard4 = () => {
  return (
    <>
      <Hidden smDown>
        <Box sx={{ width: "400px" }}>
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
              <img width={"100%"} src="/testimonios4.png" alt="" />
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
              En mis años al mando de diversas compañías, crucé caminos con
              muchos profesionales de RRHH, pero pocos han dejado una huella tan
              profunda como Javier. Su entendimiento agudo y su destreza para
              guiar a líderes, lo distinguen en un mar de expertos. Su enfoque
              humano y su visión clara transforman equipos y organizaciones.
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
              Ruben Sanchez
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "18px",
                color: "black",
              }}
            >
              CEO en Grupo Paramonga
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 100,
                lineHeight: "18px",
                color: "black",
                pb: -2,
              }}
            >
              Director Pastelería San Antonio (Perú)
            </Typography>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box sx={{ width: "100%", m: "auto" }}>
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
                m: "auto",
                borderRadius: "50%",
                overflow: "hidden",
                width: "80px",
                height: "80px",
                mt: -8,
              }}
            >
              <img width={"100%"} src="/testimonios4.png" alt="" />
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
              En mis años al mando de diversas compañías, crucé caminos con
              muchos profesionales de RRHH, pero pocos han dejado una huella tan
              profunda como Javier. Su entendimiento agudo y su destreza para
              guiar a líderes, lo distinguen en un mar de expertos. Su enfoque
              humano y su visión clara transforman equipos y organizaciones.
            </Typography>
            <Typography
              sx={{
                mt: 3,
                fontFamily: "Manrope",

                fontWeight: 800,
                fontSize: "16px",

                lineHeight: "26px",
                color: "black",
                textTransform: "uppercase",
              }}
            >
              Ruben Sanchez
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "18px",
                color: "black",
              }}
            >
              CEO en Grupo Paramonga
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 100,
                lineHeight: "18px",
                color: "black",
                pb: -2,
              }}
            >
              Director Pastelería San Antonio (Perú)
            </Typography>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default TestimonioCard4;
