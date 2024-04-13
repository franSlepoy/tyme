import { Box, Hidden, Typography } from "@mui/material";

const TestimonioCard6 = () => {
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
              <img width={"100%"} src="/testimonios6.png" alt="avatar" />
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
              Como CEO de organizaciones, puedo decir que trabajar con Tyme es
              una experiencia transformadora. Con su profundo conocimiento en
              Recursos Humanos, su enfoque estratégico y una mirada muy fuerte
              en el negocio, fueron socios valiosos que proporcionaron
              soluciones innovadoras y adaptadas a nuestras necesidades
              específicas.
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
              Gustavo Martinez
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
                pb: 2,
              }}
            >
              CEO & Partner The Cyranos
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
              <img width={"100%"} src="/testimonios6.png" alt="avatar" />
            </Box>
            <Typography
              sx={{
                mt: "25px",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "black",
                width:"100%"
              }}
            >
              Como CEO de organizaciones, puedo decir que trabajar con Tyme es
              una experiencia transformadora. Con su profundo conocimiento en
              Recursos Humanos, su enfoque estratégico y una mirada muy fuerte
              en el negocio, fueron socios valiosos que proporcionaron
              soluciones innovadoras y adaptadas a nuestras necesidades
              específicas.
            </Typography>
            <Typography
              sx={{
                mt: 1,
                fontFamily: "Manrope",

                fontWeight: 800,
                fontSize: "16px",

                lineHeight: "28px",
                color: "black",
                textTransform: "uppercase",
              }}
            >
              Gustavo Martinez
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
                
              }}
            >
              CEO & Partner The Cyranos
            </Typography>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default TestimonioCard6;
