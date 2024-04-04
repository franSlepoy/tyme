import { Box, Hidden, Typography } from "@mui/material";

const Testimonios1 = () => {
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
                muchos profesionales de RRHH, pero pocos han dejado una huella
                tan profunda como Javier. Su entendimiento agudo y su destreza
                para guiar a líderes, lo distinguen en un mar de expertos. Su
                enfoque humano y su visión clara transforman equipos y
                organizaciones.
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
                 pb:-2
                }}
              >
                Director Pastelería San Antonio (Perú)
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
                Javier tiene muy buen ojo para evaluar a las organizaciones y encontrar asertivamente las fortalezas y oportunidades de los líderes, con mucha escucha y empatía. Se nota la formación constante que él y su equipo tienen en RRHH, demostrando ser expertos en la optimización de talento y el desarrollo organizacional.
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
                Como CEO de organizaciones, puedo decir que trabajar con Tyme es una experiencia transformadora. Con su profundo conocimiento en Recursos Humanos, su enfoque estratégico y una mirada muy fuerte en el negocio, fueron socios valiosos que proporcionaron soluciones innovadoras y adaptadas a nuestras necesidades específicas.
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
                Gustavo Martinez
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: "18px",
                  color: "black",
                  pb:2
                }}
              >
               CEO & Partner The Cyranos 
              </Typography>
              
            </Box>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Testimonios1;
