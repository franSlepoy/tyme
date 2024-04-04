import { Box, Hidden, Typography } from "@mui/material";
import TestimonioCard from "../../common/testimonios/TestimonioCard/TestimonioCard";
import { TestimoniosCradData } from "../../../servidor/testimoniosData";
import Testimonios from "../../common/testimonios/Testimonios";
import { Link } from "react-router-dom";
import Testimonios1 from "../../common/testimonios/Testimonios1";
import Carousel from "react-material-ui-carousel";

import BlackButtom from "../../common/blackButtom/BlackButtom";
import { Parallax } from "react-scroll-parallax";
import GreenButtom from "../../common/greenButtom/GreenButtom";
import { Link as ScrollLink } from "react-scroll";
import Testimonios2 from "../../common/testimonios/TestimonioCard/testimonios2";
import QueHacemos from "../queHacemos/QueHacemos";

const Home = () => {
  return (
    <>
      <Hidden lgDown>
        <Parallax speed={-8}>
          <Box width={"100%"} height={"100vh"} overflow="hidden">
            <img style={{ width: "100%" }} src="/home.png" alt="" />
          </Box>
        </Parallax>
        <Box>
          <Box sx={{ position: "absolute", top: "44%" }}>
            <img width={"100%"} src="/nosotros4.png" alt="" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "42% ",
              left: "7%",
              width: "48%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "40px",
                fontWeight: "300",
                color: "black",
              }}
            >
              Somos el puente entre el equipo que tienes y el que quieres
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "75%",
              left: "7%",
            }}
          >
            {/* <GreenButtom texto={"Conoce más"} linkTo={"/#seccionDestino"} /> */}
            <ScrollLink to="seccionDestino" smooth={true}>
              <GreenButtom texto={"Conoce más"} />
            </ScrollLink>
          </Box>
        </Box>

        <Box
          id="seccionDestino"
          m={"auto"}
          width={"87%"}
          display={"flex"}
          pt={"10%"}
        >
          <Box width={"45%"}>
            <Typography
              sx={{
                fontFamily: "Marriweather",
                fontSize: "37px",
                lineHeight: "40px",
                fontWeight: "100",
                color: "#07659C",
              }}
            >
              Te acompañamos a potenciar tu compañía y a encontrar una fórmula
              propia para impulsar su desarrollo
            </Typography>

            <Link
              to={"/contacto"}
              style={{ textDecoration: "none", textTransform: "none" }}
            >
              <Box mt={"49px"}>
                <BlackButtom texto={"Contáctanos"} linkTo={"/contacto"} />
              </Box>
            </Link>
          </Box>
          <Box width={"45%"} ml={"6%"}>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "24px",
                lineHeight: "34px",
                fontWeight: 300,
              }}
            >
              Somos una consultora especializada en la implementación de
              herramientas tecnológicas y en el trabajo personalizado con
              quienes integran los equipos que asistimos, para fortalecer sus
              mejores competencias y sentar las bases para un crecimiento
              sostenible centrado en la innovación.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "#18CC66",
            width: "100%",

            mt: "70px",
            pt: "67px",
            pb: "67px",
          }}
        >
          <Box width={"87%"} m={"auto"}>
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontWeight: "500",
                fontSize: "32px",
                color: "white",
              }}
            >
              Diseñamos soluciones a medida de las necesidades de tu empresa,
              alineadas con tus objetivos de negocios, a través de dos tipos de
              servicios:
            </Typography>
          </Box>
          <Box display={"flex"} width={"87%"} m={"auto"}>
            <Box mt={"30px"} width={"40%"}>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  lineHeight: "34px",
                  fontWeight: 300,
                }}
              >
                <strong>HR on demandas:</strong> trabajamos de manera
                personalizada e interdisciplinaria con tus equipos, para
                ejecutar planes de acción que te acompañen a dar un salto de
                crecimiento a largo plazo.
              </Typography>
            </Box>
            <Box mt={"30px"} ml={"11%"} width={"40%"}>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  lineHeight: "34px",
                  fontWeight: 300,
                }}
              >
                <strong>HR Tech Trends: </strong> te ayudamos a aplicar la
                tecnología en la gestión del capital humano, para que puedas
                implementar herramientas digitales y una estrategia de
                transformación exitosa.
              </Typography>
            </Box>
          </Box>
          <Box ml={"6%"} sx={{ mt: "49px" }}>
            <BlackButtom texto={"Conoce más"} linkTo={"/queHacemos"} />
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{
              ml: "7%",
              mt: "48px",
              mb: "48px",
              color: "#272525",

              fontFamily: "Merriweather",
              fontSize: "42px",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Por qué sumarnos a tu equipo
          </Typography>

          <Box sx={{ margin: "auto" }}>
            <Carousel autoPlay={false} sx={{ marginBottom: "86px" }}>
             
              <Testimonios />
              <Testimonios1 />
              <Testimonios2 />
             
             
            </Carousel>
          </Box>
        </Box>
      </Hidden>

      <Hidden lgUp smDown>
        <Parallax speed={-8}>
          <Box mt={-2} width={"100%"}>
            <img width={"100%"} src="/header1.png" alt="" />
          </Box>
        </Parallax>
        <Box height={"500%"}>
          {/*  <Box sx={{ position: "absolute", top: "44%" }}>
            <img src="/nosotros4.png" alt="" />
          </Box> */}
          <Box
            sx={{
              position: "absolute",
              top: "14% ",
              left: "8%",
              width: "88%",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "2em",
                fontWeight: "300",
                color: "white",
              }}
            >
              Somos el puente entre el equipo que tienes y el que quieres
            </Typography>
          </Box>
        </Box>

        <Box m={"auto"} width={"87%"} display={"flex"} mt={"76px"}>
          <Box width={"45%"}>
            <Typography
              sx={{
                fontFamily: "Marriweather",
                fontSize: "37px",
                lineHeight: "40px",
                fontWeight: "100",
                color: "#07659C",
              }}
            >
              Te acompañamos a potenciar tu compañía y a encontrar una fórmula
              propia para impulsar su desarrollo
            </Typography>

            <Link
              to={"/contacto"}
              style={{ textDecoration: "none", textTransform: "none" }}
            >
              <Box mt={"49px"}>
                <BlackButtom texto={"Contáctanos"} linkTo={"/contacto"} />
              </Box>
            </Link>
          </Box>
          <Box width={"45%"} ml={"6%"}>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "24px",
                lineHeight: "34px",
                fontWeight: 300,
              }}
            >
              Somos una consultora especializada en la implementación de
              herramientas tecnológicas y en el trabajo personalizado con
              quienes integran los equipos que asistimos, para fortalecer sus
              mejores competencias y sentar las bases para un crecimiento
              sostenible centrado en la innovación.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "#18CC66",
            width: "100%",

            mt: "70px",
            pt: "67px",
            pb: "67px",
          }}
        >
          <Box width={"87%"} m={"auto"}>
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontWeight: "500",
                fontSize: "32px",
                color: "white",
              }}
            >
              Diseñamos soluciones a medida de las necesidades de tu empresa,
              alineadas con tus objetivos de negocios, a través de dos tipos de
              servicios:
            </Typography>
          </Box>
          <Box display={"flex"} width={"87%"} m={"auto"}>
            <Box mt={"30px"} width={"40%"}>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  lineHeight: "34px",
                  fontWeight: 300,
                }}
              >
                <strong>HR on demandas:</strong> trabajamos de manera
                personalizada e interdisciplinaria con tus equipos, para
                ejecutar planes de acción que te acompañen a dar un salto de
                crecimiento a largo plazo.
              </Typography>
            </Box>
            <Box mt={"30px"} ml={"11%"} width={"40%"}>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  lineHeight: "34px",
                  fontWeight: 300,
                }}
              >
                <strong>HR Tech Trends: </strong> te ayudamos a aplicar la
                tecnología en la gestión del capital humano, para que puedas
                implementar herramientas digitales y una estrategia de
                transformación exitosa.
              </Typography>
            </Box>
          </Box>
          <Box ml={"6%"} sx={{ mt: "49px" }}>
            <BlackButtom texto={"Conoce más"} linkTo={"/queHacemos"} />
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{
              textAlign: "center",
              mt: "48px",
              mb: "48px",
              color: "#272525",

              fontFamily: "Merriweather",
              fontSize: "42px",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Por qué sumarnos a tu equipo
          </Typography>

          <Box sx={{ width: "87%", margin: "auto" }}>
            <Carousel sx={{ width: "90%", m: "auto", mt: 8, mb: 8 }}>
              {TestimoniosCradData.map((persona) => (
                <TestimonioCard
                  nombre={persona.nombre}
                  key={persona.id}
                  texto={persona.texto}
                  imagen={persona.imagen}
                  empresa={persona.empresa}
                  cargo={persona.cargo}
                />
              ))}
            </Carousel>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box bgcolor={"#73F0A2"} width={"100%"} m={"auto"}>
          <Box
            sx={{
              width: "88%",
              pb: "12%",
              pt: "12%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "30px",
                fontWeight: "100",
                lineHeight: "40px",
                color: "white",
                ml: "12%",
              }}
            >
              Somos el puente entre el equipo que tienes y el que quieres
            </Typography>
          </Box>

          <Box pt={"5%"} pb={"5%"} ml={"10%"}>
            <BlackButtom texto={"Conócenos"} linkTo={"/quienesSomos"} />
          </Box>
        </Box>

        <Box m={"auto"} width={"80%"} mt={"7%"}>
          <Box width={"98%"} mt={5} mb={5}>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 300,
              }}
            >
              Somos una consultora especializada en la implementación de
              herramientas tecnológicas y en el trabajo personalizado con
              quienes integran los equipos que asistimos, para fortalecer sus
              mejores competencias y sentar las bases para un crecimiento
              sostenible centrado en la innovación.
            </Typography>
          </Box>
        </Box>

        <QueHacemos />
        <Typography
            sx={{
             p:"8%",
              color: "#272525",
               textAlign:"center",
              fontFamily: "Merriweather",
              fontSize: "32px",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            ¿Por qué sumarnos a tu equipo?
          </Typography>
        <Box sx={{ width: "87%", margin: "auto" }}>
          <Carousel sx={{ width: "90%", m: "auto", mb: 8 }}>
            {TestimoniosCradData.map((persona) => (
              <TestimonioCard
                nombre={persona.nombre}
                key={persona.id}
                texto={persona.texto}
                imagen={persona.imagen}
                empresa={persona.empresa}
                cargo={persona.cargo}
              />
            ))}
          </Carousel>
        </Box>
        {/* carrusel <Box>
          <Typography
            sx={{
              textAlign: "center",
              mt: "48px",
              mb: "48px",

              color: "#272525",
              width: "90%",
              fontFamily: "Merriweather",
              fontSize: "42px",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Por qué sumarnos a tu equipo
          </Typography>

          <Box sx={{ width: "87%", margin: "auto" }}>
            <Carousel sx={{ width: "90%", m: "auto", mt: 8, mb: 8 }}>
              {TestimoniosCradData.map((persona) => (
                <TestimonioCard
                  nombre={persona.nombre}
                  key={persona.id}
                  texto={persona.texto}
                  imagen={persona.imagen}
                  empresa={persona.empresa}
                  cargo={persona.cargo}
                />
              ))}
            </Carousel>
          </Box>
        </Box> */}
      </Hidden>
    </>
  );
};

export default Home;
