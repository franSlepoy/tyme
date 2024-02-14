import { Box, Button, Hidden, Typography } from "@mui/material";
import { NosotrosCarouselData } from "../../../servidor/NosotrosImages";
import Carousel from "react-material-ui-carousel";
import ImagenCard from "../../common/imageCard/ImageCard";
import GreenButtom from "../../common/greenButtom/GreenButtom";
import BlackButtom from "../../common/blackButtom/BlackButtom";
import { Parallax } from "react-scroll-parallax";
import { NavLink } from "react-router-dom";


const Nosotros = () => {
  

  return (
    <>
      <Hidden smDown>
        <Parallax speed={-12} tagOuter="figure">
          <Box>
            <img src="/nosotros1.png" alt="" />
          </Box>
        </Parallax>
        <Box>
          <Box sx={{ position: "absolute", top: "22%", left: "53%" }}>
            <img src="/nosotros2.png" alt="" />
          </Box>
          <Box
            sx={{ position: "absolute", top: "46% ", left: "7%", width: "52%" }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "40px",
                fontWeight: "300",
                color: "white",
              }}
            >
              Somos tus socios estratégicos para acompañar a tus equipos a dar
              un salto de crecimiento.
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: { sm: "95%", md: "90%", lg: "80%" },
              left: "7%",
            }}
          >
            <GreenButtom texto={"Conoce más"} />
          </Box>
        </Box>
        <Box width={"100%"} height={"90px"}>
          <Typography
            sx={{
              mt: "3%",
              ml: "5%",
              fontFamily: "Merriweather",
              fontSize: "42px",
              fontWeight: "200",
            }}
          >
            Nuestros servicios
          </Typography>
        </Box>

        <Box
          sx={{ width: "100%", backgroundColor: "#1296E9", minHeight: "70vh" }}
        >
          <Box sx={{ position: "absolute", mt: "75px" }}>
            <img src="/nosotros3.png" alt="" />
          </Box>
          <Box display={"flex"} width={"90%"} m={"auto"}>
            <Box width={"40%"}>
              <Typography
                mt={"178px"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "600",
                  color: "white",
                  fontSize: "64px",
                }}
              >
                HR on demand:
              </Typography>
              <Typography
                mt={"-12px"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "400",
                  fontSize: "40px",
                }}
              >
                respuesta a medida
              </Typography>
              <Box mt={"13%"}>
                <GreenButtom texto={"Consultanos"} />
              </Box>
            </Box>
            <Box ml={"12%"} width={"40%"}>
              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                }}
                
              >
                <Box display={"flex"} mt={"16%"} component={NavLink} to={"/eDyP"} sx={{textDecoration:"none"}}>
                  <img
                    style={{ height: "60px" }}
                    src="/nosotrosLogo1.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      ml: "28px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color:"black",
                      
                    }}
                  >
                    Evaluación, diagnóstico y planificación
                  </Typography>
                </Box>
              </Button>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                }}
              >
                <Box display={"flex"} mt={"8%"}>
                  <img
                    style={{ height: "60px" }}
                    src="/nosotrosLogo2.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      ml: "28px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                    }}
                  >
                    Desarrollo de la cultura organizacional y liderazgos
                  </Typography>
                </Box>
              </Button>
              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                }}
              >
                <Box display={"flex"} mt={"8%"}>
                  <img
                    style={{ height: "50px", marginLeft: "4px" }}
                    src="/nosotrosLogo3.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      mt: "12px",
                      ml: "42px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                    }}
                  >
                    Waze laboral
                  </Typography>
                </Box>
              </Button>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                }}
              >
                <Box display={"flex"} mt={"8%"}>
                  <img
                    style={{ height: "40px", marginLeft: "3px" }}
                    src="/nosotrosLogo4.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      mt: -2,
                      ml: "38px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                    }}
                  >
                    Acompañamiento para certificaciones
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
        
    

        

        <Box
          sx={{ width: "100%", backgroundColor: "#18CC66", minHeight: "70vh" }}
        >
          <Box sx={{ position: "absolute" }}>
            <img src="/nosotros4.png" alt="" />
          </Box>
          <Box display={"flex"} width={"90%"} m={"auto"}>
            <Box width={"40%"}>
              <Typography
                mt={"105px"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  color: "white",
                  fontSize: "64px",
                }}
              >
                HR on demand:
              </Typography>
              <Typography
                mt={"-12px"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "400",
                  fontSize: "40px",
                  width: "330px",
                }}
              >
                tecnología para la gestión del capital humano
              </Typography>
              <Box mt={"6%"}>
                <BlackButtom texto={"Consultanos"} />
              </Box>
            </Box>

            <Box ml={"12%"} mt={"7%"} width={"40%"}>
              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                }}
              >
                <Box display={"flex"} mt={"22%"}>
                  <img
                    style={{ height: "42px" }}
                    src="/nosotrosLogo5.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      ml: "28px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                    }}
                  >
                    Mentoring personalizado
                  </Typography>
                </Box>
              </Button>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                }}
              >
                <Box display={"flex"} mt={"8%"}>
                  <img
                    style={{ height: "46px", marginTop: 12 }}
                    src="/nosotrosLogo6.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      ml: "28px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                    }}
                  >
                    Training y educación en innovación tecnológica
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Typography
          sx={{
            color: "#003350",
            fontFamily: "Manrope",
            fontSize: "58px",
            fontWeight: "800",
            lineHeight: "normal",
            letterSpacing: "-2.32px",
            textAlign: "center",
            mt: "80px",
          }}
        >
          Nosotros
        </Typography>

        <Box
          sx={{
            backgroundColor: "#F9F9F9",
            width: "100%",
            mt: "88px",
            padding: 1,
            mb: 1,
          }}
        >
          <Box
            sx={{
              borderRadius: "100px",
              width: "90px",
              height: "90px",
              ml: 2,
              backgroundColor: "#71EAEA",
            }}
          ></Box>
          <Box sx={{ mt: "-78px", width: "90%" }}>
            <Typography
              sx={{
                ml: 3,
                color: "#003350",
                fontFamily: "Manrope",
                fontSize: "28px",
                fontWeight: "200",
                lineHeight: "normal",
                letterSpacing: "-1.68px",
              }}
            >
              Tyme es una consultora boutique internacional especializada en{" "}
              <strong style={{ width: "800" }}>
                escuchar, acompañar, potenciar y evolucionar
              </strong>{" "}
              junto a las organizaciones a través de las personas y la
              tecnología.
            </Typography>
          </Box>

          <Box ml={3}>
            <Box sx={{ mt: 3, width: "90%" }}>
              <Box sx={{ width: "90%" }}>
                <Typography
                  sx={{
                    color: "#003350",
                    fontFamily: "Manrope",
                    fontSize: "18px",
                    fontWeight: "300",
                    lineHeight: "28px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Con estrategias simples, innovadoras y soluciones
                  personalizadas, actuamos como facilitadores de los cambios
                  necesarios para la prosperidad y sostenibilidad del negocio.
                </Typography>
                <Typography
                  sx={{
                    color: "#003350",
                    fontFamily: "Manrope",
                    fontSize: "18px",
                    fontWeight: "300",
                    lineHeight: "28px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Con una fuerte vocación de servicio, Tyme propone hacerle la
                  vida más fácil a los dueños, CEO, Fundadores y/o líderes de
                  las organizaciones, a través de nuestros servicios con el
                  objetivo de hacer crecer vuestro negocio.
                </Typography>
              </Box>

              <Box sx={{ width: "90%" }}>
                <Typography
                  sx={{
                    color: "#003350",
                    fontFamily: "Manrope",
                    fontSize: "18px",
                    fontWeight: "300",
                    lineHeight: "28px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Nuestro propósito es hacer fluir la energía dentro de la
                  organización a efectos de armonizar todas las variables
                  posibles que puedan ser un presente o futuro obstáculo para el
                  desarrollo, crecimiento y sostenibilidad de la compañía.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box width={"100%"} mt={-1}>
          <img width={"100%"} src="/jk-perfil.jpg" alt="" />
        </Box>

        <Box sx={{ mt: 3, width: "100%" }}>
          <Box>
            <Typography
              ml={3}
              sx={{
                color: "#003350",
                width: "90%",
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "100",
                lineHeight: "28px",
                letterSpacing: "0.5px",
              }}
            >
              La tecnología está creciendo a pasos de gigante, y realmente
              debemos abrazarla e integrarla. Esta tiene{" "}
              <strong style={{ fontWeight: "800" }}>
                grandes beneficios para la humanidad.
              </strong>{" "}
              Lógicamente con un uso consciente y responsable.
            </Typography>
            <Typography
              ml={3}
              sx={{
                color: "#003350",
                width: "90%",
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "100",
                lineHeight: "28px",
                letterSpacing: "0.5px",
              }}
            >
              Pero también, así como la tecnología está creciendo
              exponencialmente, las{" "}
              <strong style={{ fontWeight: "800" }}>
                personas somos y siempre seremos lo más importante que existe.
              </strong>{" "}
              Mi vocación de servicio se centra en{" "}
              <strong style={{ fontWeight: "800" }}>
                escuchar, ayudar, facilitar herramientas y acompañar
              </strong>{" "}
              a las personas para su evolución y transformación.
            </Typography>
            <Typography
              sx={{
                ml: 3,
                color: "#003350",
                width: "90%",
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "100",
                lineHeight: "28px",
                letterSpacing: "0.5px",
              }}
            >
              Ahora, elijo y creo este nuevo emprendimiento con mucho entusiasmo
              y alegría.
            </Typography>
          </Box>
          <Box mt={3}>
            <img width={"100%"} height={"100%"} src="/nosotros.png" alt="" />
          </Box>
        </Box>
        <Typography
          sx={{
            ml: 3,
            color: "#003350",
            width: "90%",
            mt: 3,
            fontFamily: "Manrope",
            fontSize: "18px",
            fontWeight: "300",
            lineHeight: "28px",
            letterSpacing: "0.5px",
          }}
        >
          Mi experiencia internacional en diversas corporaciones, así como la
          gestión de mis propias startups y pymes a nivel internacional, siempre
          con la tecnología como eje central, me han brindado aprendizajes
          valiosos que comparto a través de Tyme. Gracias a la gamificación y a
          Nawaiam, hemos evaluado a cientos de miles de personas en más de 16
          países. Esta experiencia nos ha provisto de información poderosa sobre
          las conductas, soft skills y comportamientos de Líderes de todo tipo
          de industria y tamaño de empresa, ayudando a cientos de empresas en la
          gestión del capital humano. Ahora, con un equipo talentoso e
          interdisciplinario, asistimos a empresas de todo el mundo.
        </Typography>

        <Box mt={3}>
          <Carousel sx={{ width: "100%", height: "100%" }}>
            {NosotrosCarouselData.map((imagen) => (
              <ImagenCard key={imagen.id} imagen={imagen.imagen} />
            ))}
          </Carousel>
        </Box>
      </Hidden>
    </>
  );
};

export default Nosotros;
