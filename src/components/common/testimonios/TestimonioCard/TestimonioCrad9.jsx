import { Box, Hidden, Typography } from "@mui/material";

const TestimonioCrad9 = () => {
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
              <img width={"100%"} src="/testimonios9.png" alt="avatar" />
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
              El servicio de Tyme en capacitación tecnológica es realmente
              valioso. Javier es un gran speaker que deja pensando en cada
              charla. Como profesionales, tenemos que integrar la IA y la
              tecnología a nuestro trabajo diario. Sin duda, estoy más preparado
              para los desafíos al haber sumado herramientas que hacen más
              eficiente mi gestión.
            </Typography>
            <Typography
              sx={{
                mt: 4,
                fontFamily: "Manrope",

                fontWeight: 800,
                fontSize: "16px",

                lineHeight: "28px",
                color: "black",
                textTransform: "uppercase",
              }}
            >
              Hernán Barletta
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              Director de RRHH en la compañía
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              farmacéutica MSD LATAM
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
              <img width={"100%"} src="/testimonios9.png" alt="avatar" />
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
              El servicio de Tyme en capacitación tecnológica es realmente
              valioso. Javier es un gran speaker que deja pensando en cada
              charla. Como profesionales, tenemos que integrar la IA y la
              tecnología a nuestro trabajo diario. Sin duda, estoy más preparado
              para los desafíos al haber sumado herramientas que hacen más
              eficiente mi gestión.
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontFamily: "Manrope",

                fontWeight: 800,
                fontSize: "16px",

                lineHeight: "28px",
                color: "black",
                textTransform: "uppercase",
              }}
            >
              Hernán Barletta
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              Director de RRHH en la compañía
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              farmacéutica MSD LATAM
            </Typography>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default TestimonioCrad9;
