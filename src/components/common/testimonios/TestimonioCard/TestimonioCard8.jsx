import { Box, Hidden, Typography } from "@mui/material";

const TestimonioCard8 = () => {
  return (
    <>
      <Hidden smDown>
        <Box sx={{ width: "400px" }} >
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
              <img width={"100%"} src="/testimonio8.png" alt="avatar" />
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
              Al embarcarme en el desafiante viaje de construir una startup,
              encontré muchos obstáculos, especialmente al gestionar un equipo
              en constante crecimiento. Tyme ha sido una luz en ese camino, con
              su expertise en RRHH y su habilidad para transformar líderes. Su
              enfoque es técnico, pero también profundamente humano.
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
              {" "}
              Ximena Sureda
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              Founder y CEO Mutare Life
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              (Panamá)
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
              <img width={"100%"} src="/testimonio8.png" alt="avatar" />
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
              Al embarcarme en el desafiante viaje de construir una startup,
              encontré muchos obstáculos, especialmente al gestionar un equipo
              en constante crecimiento. Tyme ha sido una luz en ese camino, con
              su expertise en RRHH y su habilidad para transformar líderes. Su
              enfoque es técnico, pero también profundamente humano.
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
              {" "}
              Ximena Sureda
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              Founder y CEO Mutare Life
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "black",
              }}
            >
              (Panamá)
            </Typography>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default TestimonioCard8;
