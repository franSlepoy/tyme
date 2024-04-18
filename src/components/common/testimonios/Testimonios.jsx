import { Box, Hidden, Typography } from "@mui/material";

const Testimonios = () => {
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
                Siempre que converso con Javier, quedo sorprendida por su
                profundo conocimiento y entendimiento sobre el mundo de los
                Recursos Humanos y la gestión de personas. Su enfoque innovador,
                combinado con su genuina pasión por el desarrollo del talento,
                lo convierten en una fuente invaluable de insights y
                recomendaciones. 
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
                Tyme ha sido un socio estratégico en la digitalización de
                nuestro Departamento de Talento. Gracias a su colaboración
                crucial, implementamos herramientas digitales innovadoras que
                han agilizado nuestros procesos operativos y permitido una mayor
                personalización en el desarrollo y crecimiento profesional de
                nuestro equipo.
              </Typography>
              <Typography
                sx={{
                  mt: 0,
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
                profesionalismo. Somos una organización en constante crecimiento
                y su ayuda nos permitió diagnosticar a nuestros líderes, captar
                nuevos talentos y transformarnos en un equipo de alto
                rendimiento. 
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
        </Box>
      </Hidden>
    </>
  );
};

export default Testimonios;
