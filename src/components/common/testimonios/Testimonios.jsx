import { Box, Hidden, Typography } from "@mui/material";

const Testimonios = () => {
  return (
    <>
      <Hidden smDown>
        <Box sx={{ display: "flex", width: "82%", m: "auto" }}>
          <Box sx={{ width: "33%", height:"500px" }}>
            <Box
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
                width: "80px",
                height: "80px",
                position: "absolute",
                top: "15px",
                left: "12%",
              }}
            >
              <img width={"100%"} src="/testimonios1.png" alt="" />
            </Box>

            <Box
              sx={{
                mt: "52px",
                padding: 6,
                backgroundColor: "#E5DE04",
                borderRadius: "33px",
              }}
            >
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
                  lineHeight: "24px",
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

          <Box sx={{ width: "33%" }} ml={"2.5%"}>
            <Box
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
                width: "80px",
                height: "80px",
                position: "absolute",
                top: "15px",
                left: "40%",
              }}
            >
              <img width={"100%"} src="/testimonios2.png" alt="avatar" />
            </Box>

            <Box
              sx={{
                mt: "52px",
                padding: 6,
                backgroundColor: "#E5DE04",
                borderRadius: "33px",
              }}
            >
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
                Tyme ha sido un socio estratégico en la digitalización de
                nuestro Departamento de Talento. Gracias a su colaboración
                crucial, implementamos herramientas digitales innovadoras que
                han agilizado nuestros procesos operativos y permitido una mayor
                personalización en el desarrollo y crecimiento profesional de
                nuestro equipo.
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
                Emprendedor Endeavor
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: "33%" }} ml={"2%"}>
            <Box
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
                width: "80px",
                height: "80px",
                position: "absolute",
                top: "15px",
                left: "68%",
              }}
            >
              <img width={"100%"} src="/testimonios3.png" alt="avatar" />
            </Box>

            <Box
              sx={{
                mt: "52px",
                padding: 6,
                backgroundColor: "#E5DE04",
                borderRadius: "33px",
              }}
            >
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

          {/*  <Box ml={2}>
        <Box  sx={{ borderRadius: '50%', overflow: 'hidden', width: '165px', height: '165px' }}>
        <img width={"200px"} height={"170px"} src="/testimonios4.jpeg" alt="avatar" />
        </Box>
      
       <Box sx={{width:"300px",padding:5,backgroundColor:"#FEEC92", borderRadius:"20px",}}>
        <Typography sx={{fontFamily:"Manrope", fontSize:"14px", fontWeight:400, lineHeight:"26px", color:"#003350"}}>"En mis años al mando de diversas compañías, he cruzado caminos con numerosos
profesionales de RRHH, pero pocos han dejado una huella tan profunda como Javier.
Su entendimiento agudo de los recursos humanos, combinado con una destreza única
para cultivar y guiar a líderes, le distingue en un mar de expertos. Más allá de su
experiencia, es su enfoque humano y su visión clara lo que realmente transforma
equipos y organizaciones. Si hay alguien que entiende la temperatura real de una
organización y cómo elevarla, es sin duda él". </Typography>
        <Typography sx={{mt:2, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
        Ruben Sanchez
</Typography>
<Typography sx={{mt:1, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
CEO – Perú
</Typography>
<Typography sx={{mt:1, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
Pastelería San Antonio, empresa líder de Pastelería, Panadería, Cafetería y
Restaurante.</Typography>
        </Box> 
        </Box> */}
        </Box>
      </Hidden>
      <Hidden smUp>
        <Box sx={{ width: "95%", m: "auto", pb:5 }}>
          <Box>
            <Box
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
                width: "80px",
                height: "80px",
                position: "absolute",
                top: "2710px",
                left: "14%",
              }}
            >
               <img width={"100%"} src="/testimonios1.png" alt="" />
            </Box>

            <Box
              sx={{
                mt: "52px",
                padding: 6,
                backgroundColor: "#E5DE04",
                borderRadius: "33px",
              }}
            >
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
                  lineHeight: "24px",
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

          <Box sx={{ width: "95%", m: "auto" }}>
            <Box
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
                width: "80px",
                height: "80px",
                position: "absolute",
                top: "3250px",
                left: "14%",
              }}
            >
              <img width={"100%"} src="/testimonios2.png" alt="avatar" />
            </Box>

            <Box
              sx={{
                mt: "52px",
                padding: 6,
                backgroundColor: "#E5DE04",
                borderRadius: "33px",
              }}
            >
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
                Tyme ha sido un socio estratégico en la digitalización de
                nuestro Departamento de Talento. Gracias a su colaboración
                crucial, implementamos herramientas digitales innovadoras que
                han agilizado nuestros procesos operativos y permitido una mayor
                personalización en el desarrollo y crecimiento profesional de
                nuestro equipo.
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
                Emprendedor Endeavor
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: "95%", m: "auto" }}>
            <Box
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
                width: "80px",
                height: "80px",
                position: "absolute",
                top: "3790px",
                left: "14%",
              }}
            >
              <img width={"100%"} src="/testimonios3.png" alt="avatar" />
            </Box>

            <Box
              sx={{
                mt: "52px",
                padding: 6,
                backgroundColor: "#E5DE04",
                borderRadius: "33px",
              }}
            >
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

          {/*  <Box ml={2}>
        <Box  sx={{ borderRadius: '50%', overflow: 'hidden', width: '165px', height: '165px' }}>
        <img width={"200px"} height={"170px"} src="/testimonios4.jpeg" alt="avatar" />
        </Box>
      
       <Box sx={{width:"300px",padding:5,backgroundColor:"#FEEC92", borderRadius:"20px",}}>
        <Typography sx={{fontFamily:"Manrope", fontSize:"14px", fontWeight:400, lineHeight:"26px", color:"#003350"}}>"En mis años al mando de diversas compañías, he cruzado caminos con numerosos
profesionales de RRHH, pero pocos han dejado una huella tan profunda como Javier.
Su entendimiento agudo de los recursos humanos, combinado con una destreza única
para cultivar y guiar a líderes, le distingue en un mar de expertos. Más allá de su
experiencia, es su enfoque humano y su visión clara lo que realmente transforma
equipos y organizaciones. Si hay alguien que entiende la temperatura real de una
organización y cómo elevarla, es sin duda él". </Typography>
        <Typography sx={{mt:2, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
        Ruben Sanchez
</Typography>
<Typography sx={{mt:1, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
CEO – Perú
</Typography>
<Typography sx={{mt:1, fontFamily:"Manrope",fontSize:"14px", fontWeight:"800px" , lineHeight:"26px", color:"#003350", textTransform:"uppercase" }}>
Pastelería San Antonio, empresa líder de Pastelería, Panadería, Cafetería y
Restaurante.</Typography>
        </Box> 
        </Box> */}
        </Box>
      </Hidden>
    </>
  );
};

export default Testimonios;
