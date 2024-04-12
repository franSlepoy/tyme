import { Box, Hidden, Typography } from "@mui/material";

const Testimonios2 = () => {
  return (
    <>
      <Hidden smDown>
        <Box sx={{ display: "flex", width: "1200px", m: "auto" }}>
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
                El acompañamiento y nivel de involucramiento que tienen es excelente. Hoy, los cambios son cada vez más rápidos y en Tyme las propuestas de trabajo son disruptivas, con metodologías propias y sólidas. Javier tiene la fortaleza de hacer un trabajo que crea valor para los equipos y permite alcanzar nuevos niveles de eficiencia.
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

          <Box sx={{ width: "400px" }} ml={"2.5%"}>
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
                Al embarcarme en el desafiante viaje de construir una startup, encontré muchos obstáculos, especialmente al gestionar un equipo en constante crecimiento. Tyme ha sido una luz en ese camino, con su expertise en RRHH y su habilidad para transformar líderes. Su enfoque es técnico, pero también profundamente humano.
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
                mt:-10
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
                El servicio de Tyme en capacitación tecnológica es realmente valioso. Javier es un gran speaker que deja pensando en cada charla. Como profesionales, tenemos que integrar la IA y la tecnología a nuestro trabajo diario. Sin duda, estoy más preparado para los desafíos al haber sumado herramientas que hacen más eficiente mi gestión.
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
        </Box>
      </Hidden>
    </>
  );
};

export default Testimonios2;
