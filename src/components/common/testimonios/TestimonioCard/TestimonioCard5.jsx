import { Box, Hidden, Typography } from "@mui/material";

const TestimonioCard5 = () => {
  return (
    <>
      <Hidden smDown>
        <Box sx={{ width: "400px", m:"auto" }} >
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
              <img width={"100%"} src="/testimonios5.png" alt="avatar" />
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
              Javier tiene muy buen ojo para evaluar a las organizaciones y
              encontrar asertivamente las fortalezas y oportunidades de los
              líderes, con mucha escucha y empatía. Se nota la formación
              constante que él y su equipo tienen en RRHH, demostrando ser
              expertos en la optimización de talento y el desarrollo
              organizacional.
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
              Sebastián Moguilevsky
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              CEO & Director Warner Bros.
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              (España y Portugal)
            </Typography>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box sx={{ width: "100%" }} >
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
              <img width={"100%"} src="/testimonios5.png" alt="avatar" />
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
              Javier tiene muy buen ojo para evaluar a las organizaciones y
              encontrar asertivamente las fortalezas y oportunidades de los
              líderes, con mucha escucha y empatía. Se nota la formación
              constante que él y su equipo tienen en RRHH, demostrando ser
              expertos en la optimización de talento y el desarrollo
              organizacional.
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
              Sebastián Moguilevsky
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              CEO & Director Warner Bros.
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              (España y Portugal)
            </Typography>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default TestimonioCard5;
