import { Box, Hidden, Typography } from "@mui/material";
import Testimonios from "../../common/testimonios/Testimonios";
import { Link } from "react-router-dom";
import Testimonios1 from "../../common/testimonios/Testimonios1";
import Carousel from "react-material-ui-carousel";
import BlackButtom from "../../common/blackButtom/BlackButtom";
import { Parallax } from "react-scroll-parallax";
import GreenButtom from "../../common/greenButtom/GreenButtom";
import { Link as ScrollLink } from "react-scroll";
import Testimonios2 from "../../common/testimonios/Testimonios2";
import QueHacemos from "../queHacemos/QueHacemos";
import TestimonioCard1 from "../../common/testimonios/TestimonioCard/TestimonioCard1";
import TestimonioCard2 from "../../common/testimonios/TestimonioCard/TestimonioCard2";
import TestimonioCard3 from "../../common/testimonios/TestimonioCard/TestimonioCard3";
import TestimonioCard4 from "../../common/testimonios/TestimonioCard/TestimonioCard4";
import TestimonioCard5 from "../../common/testimonios/TestimonioCard/TestimonioCard5";
import TestimonioCard6 from "../../common/testimonios/TestimonioCard/TestimonioCard6";
import TestimonioCard7 from "../../common/testimonios/TestimonioCard/TestimonioCard7";
import TestimonioCard8 from "../../common/testimonios/TestimonioCard/TestimonioCard8";
import TestimonioCrad9 from "../../common/testimonios/TestimonioCard/TestimonioCrad9";

const Home = () => {
  return (
    <>
      <Hidden lgDown>
        <Parallax speed={-12}>
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
                fontSize: "36px",
                lineHeight: "44px",
                fontWeight: "300",
                color: "white",

                width: "445px",
              }}
            >
              Somos el puente entre el equipo que tienes y el que quieres
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "85%",
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
          width={"86%"}
          display={"flex"}
          pt={"10%"}
        >
          <Box width={"45%"}>
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "32px",
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
              Somos una consultora especializada en evaluar y diagnosticar
              organizaciones a partir del trabajo personalizado, para
              desarrollar sus talentos, asesorarlas en la implementación de
              tecnologías en RRHH y sentar las bases para un crecimiento
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
          <Box width={"86%"} m={"auto"}>
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
          <Box display={"flex"} width={"86%"} m={"auto"}>
            <Box mt={"30px"} width={"40%"}>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  lineHeight: "34px",
                  fontWeight: 300,
                }}
              >
                <strong>HR on demand:</strong> trabajamos de manera
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
          <Box ml={"7%"} sx={{ mt: "49px" }}>
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
        <Parallax speed={-5}>
          <Box mt={-3} width={"100%"}>
            <img style={{ width: "100%" }} src="/home.png" alt="" />
          </Box>
        </Parallax>
        <Box height={"500%"}>
          <Box
            sx={{
              position: "absolute",
              top: "16% ",
              left: "22%",
              width: "55%",
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
              Somos una consultora especializada en evaluar y diagnosticar
              organizaciones a partir del trabajo personalizado, para
              desarrollar sus talentos, asesorarlas en la implementación de
              tecnologías en RRHH y sentar las bases para un crecimiento
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
                <strong>HR on demand:</strong> trabajamos de manera
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

          <Box sx={{ width: "80%", margin: "auto" }}>
            <Carousel
              sx={{ pb: 15, position: "relative" }}
              indicatorContainerProps={{
                sx: {
                  position: "absolute",
                  bottom: 10,
                  left: "50%",
                  transform: "translateX(-50%)",
                },
              }}
            >
              <TestimonioCard1 />
              <TestimonioCard2 />
              <TestimonioCard3 />
              <TestimonioCard4 />
              <TestimonioCard5 />
              <TestimonioCard6 />
              <TestimonioCard7 />
              <TestimonioCard8 />
              <TestimonioCrad9 />
            </Carousel>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box>
          <img width={"100%"} src="/homeMobile.png" alt="" />
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
              Somos una consultora especializada en evaluar y diagnosticar
              organizaciones a partir del trabajo personalizado, para
              desarrollar sus talentos, asesorarlas en la implementación de
              tecnologías en RRHH y sentar las bases para un crecimiento
              sostenible centrado en la innovación.
            </Typography>
          </Box>
        </Box>

        <QueHacemos />
        <Typography
          sx={{
            p: "8%",
            color: "#272525",
            textAlign: "center",
            fontFamily: "Merriweather",
            fontSize: "32px",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          ¿Por qué sumarnos a tu equipo?
        </Typography>
        <Box>
          <Box sx={{ width: "80%", margin: "auto", pb: 3 }}>
            <Carousel
              sx={{ pb: 15, position: "relative" }}
              indicatorContainerProps={{
                sx: {
                  position: "absolute",
                  bottom: 10,
                  left: "50%",
                  transform: "translateX(-50%)",
                },
              }}
            >
              <TestimonioCard1 />
              <TestimonioCard2 />
              <TestimonioCard3 />
              <TestimonioCard4 />
              <TestimonioCard5 />
              <TestimonioCard6 />
              <TestimonioCard7 />
              <TestimonioCard8 />
              <TestimonioCrad9 />
            </Carousel>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Home;
