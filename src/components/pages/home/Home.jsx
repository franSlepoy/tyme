import { Box, Button, Divider, Hidden, IconButton, Typography } from "@mui/material";

import BasicAccordion from "../../common/basicAccordion/BasicAccordion";
import BasicAccordion1 from "../../common/basicAccordion/BasicAccordion1";
import Testimonios from "../../common/testimonios/Testimonios";
import { Link, NavLink } from "react-router-dom";
import Testimonios1 from "../../common/testimonios/Testimonios1";
import Carousel from "react-material-ui-carousel";
import { TestimoniosCradData } from "../../../servidor/testimoniosData";

import BlackButtom from "../../common/blackButtom/BlackButtom";
import TestimonioCard from "../../common/testimonios/TestimonioCard/TestimonioCard";

const Home = () => {
  return (
    <>
      <Hidden smDown>
        <Box width={"100%"}>
          <img style={{ width: "100%" }} src="/header1.png" alt="" />
        </Box>

        <Box m={"auto"} width={"88%"} display={"flex"} mt={"76px"}>
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
              <BlackButtom texto={"Contáctanos"} />
            </Link>
          </Box>
          <Box width={"45%"} ml={"5%"}>
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
           pb:"67px"
          }}
        >
          <Box width={"88%"} m={"auto"}>
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
          <Box display={"flex"} width={"88%"} m={"auto"}>
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
            <Box mt={"30px"} ml={"10%"} width={"40%"}>
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
          <Box textAlign={"center"}>
          <BlackButtom texto={"Conoce más"} />
          </Box>
          
        </Box>

        

        <Box>
          <Typography
            sx={{
              mt: "75px",
              mb:"48px",
              color: "#272525",
              textAlign: "center",
              fontFamily: "Merriweather",
              fontSize: "42px",
              fontWeight: "100",
              lineHeight: "normal",
            }}
          >
            Por qué sumarnos a tu equipo
          </Typography>

          <Box sx={{ mt:"", width: "88%", margin:"auto" }}>
            <Carousel   >
              <Testimonios />
              <Testimonios1 />
            </Carousel>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Typography
          sx={{
            fontFamily: "Manrope",
            fontWeight: "800",
            color: "#003350",
            fontSize: "46px",
            textAlign: "center",
            letterSpacing: "-2.23px",
            mt: "70px",
          }}
        >
          Human Consulting
        </Typography>
        <Box
          sx={{
            position: "relative",
            mt: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <img src="/header1.png" alt="" style={{ Width: '100%', maxHeight: '100%', objectFit: 'cover' }} /> */}
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", objectFit: "cover" }}
          >
            <source src="/mobile.mp4" type="video/mp4" />
          </video>
          <Typography
            sx={{
              width: "100%",
              position: "absolute",
              color: "white",
              fontSize: "30px",
              fontWeight: "400",
              textAlign: "center",
              left: "50%",
              transform: "translate(-50%)",
              top: 58,
              fontFamily: "Manrope",
            }}
          >
            Diferentes motivos, una sencilla solución… Tyme
          </Typography>
        </Box>

        <Box mt={3} ml={3} width={"90%"} mb={3}>
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: "24px",
              fontWeight: "200",
              color: "#003350",
              lineHeight: "34px",
            }}
          >
            <strong style={{ fontWeight: "800" }}>
              Cada organización tiene su fórmula.
            </strong>{" "}
            No existe una solución universal para la prosperidad de cada
            organización. Nuestra fórmula secreta es que vemos el cambio de
            manera diferente.
          </Typography>
          <Typography
            sx={{
              mt: 3,
              fontFamily: "Manrope",
              fontSize: "24px",
              fontWeight: "200",
              color: "#003350",
              lineHeight: "34px",
            }}
          >
            <strong style={{ fontWeight: "800" }}>
              En Tyme te ayudamos a encontrar tu fórmula
            </strong>{" "}
            y de esa manera trabajamos,{" "}
            <strong style={{ fontWeight: "bold" }}>
              de manera personalizada.
            </strong>
          </Typography>
          <Link to={"/contacto"} style={{ textDecoration: "none" }}>
            {" "}
            <Button
              variant="contained"
              sx={{
                mt: "31px",
                padding: "10px 24px",
                width: "177px",
                borderRadius: "100px",
                backgroundColor: "#003350",
                "&:hover": {
                  borderRadius: "100px",
                  backgroundColor: "#71EAEA",
                  color: "#F9F9F9",
                  textAlign: "center",
                  fontWeight: "700",
                  lineHeight: "20px",
                },
              }}
            >
              Contactanos
            </Button>
          </Link>
        </Box>

        <Box mt={15} width={"90%"} ml={2}>
          <Typography
            sx={{
              fontFamily: "Merriweather",
              fontSize: "36px",
              fontWeight: 400,
              lineHeight: "normal",
              color: "#003350",
            }}
          >
            HR On Demand
          </Typography>

          <BasicAccordion />
          <Typography
            sx={{
              mt: "59px",
              fontFamily: "Merriweather",
              fontSize: "36px",
              fontWeight: 400,
              lineHeight: "normal",
              color: "#003350",
            }}
          >
            HR Tech Trends
          </Typography>

          <BasicAccordion1 />
        </Box>

        <Box
          ml={2}
          mt={4}
          sx={{ backgroundColor: "#F9F9F9", p: 2, width: "90%" }}
        >
          <Box sx={{ width: "90%" }}>
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "36px",
                fontWeight: 400,
                lineHeight: "normal",
                color: "#003350",
              }}
            >
              Tyme se enfoca en el lado humano del cambio
            </Typography>
            <Typography
              sx={{
                mt: "28px",
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: 300,
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
              }}
            >
              Desde una mirada holística e integral, ayudamos a transformar y
              potenciar los negocios a través de las personas y la tecnología.
            </Typography>
            <Typography
              mt={3}
              sx={{
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: 300,
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
              }}
            >
              Construimos soluciones personalizadas que realmente resuelven tus
              problemas más difíciles, y se alinean a tus equipos de trabajo
              fomentando fuertemente la innovación.
            </Typography>
          </Box>

          <Box mt={3}>
            <img width={"100%"} src="/personas.png" alt="personas trabajando" />
          </Box>
        </Box>

        <Typography
          sx={{
            mt: "75px",
            color: "#003350",
            textAlign: "center",
            fontFamily: "Merriweather",
            fontSize: "36px",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Palabras que resuenan, voces que inspiran
        </Typography>
        <Carousel sx={{ width: "90%", m: "auto", mt: 8 }}>
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
      </Hidden>
    </>
  );
};

export default Home;
