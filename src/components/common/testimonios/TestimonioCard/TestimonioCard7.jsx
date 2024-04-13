import { Box, Hidden, Typography } from "@mui/material";

const TestimonioCard7 = () => {
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
              <img width={"100%"} src="/testimonio7.png" alt="" />
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
              El acompañamiento y nivel de involucramiento que tienen es
              excelente. Hoy, los cambios son cada vez más rápidos y en Tyme las
              propuestas de trabajo son disruptivas, con metodologías propias y
              sólidas. Javier tiene la fortaleza de hacer un trabajo que crea
              valor para los equipos y permite alcanzar nuevos niveles de
              eficiencia.
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
              Pedro Pieczanski
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "18px",
                color: "black",
              }}
            >
              Founder y CEO PHV LATAM
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 100,
                lineHeight: "18px",
                color: "black",
              }}
            >
              (Europa, África, Asia y LATAM)
            </Typography>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box sx={{ width: "100%" }}>
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
              <img width={"100%"} src="/testimonio7.png" alt="" />
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
              El acompañamiento y nivel de involucramiento que tienen es
              excelente. Hoy, los cambios son cada vez más rápidos y en Tyme las
              propuestas de trabajo son disruptivas, con metodologías propias y
              sólidas. Javier tiene la fortaleza de hacer un trabajo que crea
              valor para los equipos y permite alcanzar nuevos niveles de
              eficiencia.
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
              Pedro Pieczanski
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "18px",
                color: "black",
              }}
            >
              Founder y CEO PHV LATAM
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 100,
                lineHeight: "18px",
                color: "black",
              }}
            >
              (Europa, África, Asia y LATAM)
            </Typography>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default TestimonioCard7;
