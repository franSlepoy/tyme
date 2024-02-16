import { Box, Button, Hidden, Typography } from "@mui/material";
import { NosotrosCarouselData } from "../../../servidor/NosotrosImages";
import Carousel from "react-material-ui-carousel";
import ImagenCard from "../../common/imageCard/ImageCard";
import { Parallax } from "react-scroll-parallax";
import { useState } from "react";

const Nosotros = () => {
  // Estado para almacenar el texto seleccionado
  const [textoSeleccionado, setTextoSeleccionado] = useState("");
  const [cambiarColor, setCambiarColor] = useState(false);
  // Función para manejar la selección de texto
  const handleTextoSeleccionado = (texto) => {
    setTextoSeleccionado(texto);
  };

  const handleMouseEnter = () => {
    setCambiarColor(true);
  };

  const handleMouseLeave = () => {
    setCambiarColor(false);
  };

  return (
    <>
      <Hidden smDown>
        <Box sx={{ width: "100%", height: "97vh" }}>
          <Parallax speed={-12} tagOuter="figure">
            <Box
              sx={{ with: "100%", height: "97vh", backgroundColor: "#453D3B" }}
            >
              <Box sx={{ position: "absolute", left: "55%" }}>
                <img width={"98.5%"} src="/javier.png" alt="" />
              </Box>
            </Box>
          </Parallax>
          <Box>
            <Box sx={{ position: "absolute", top: "62%" }}>
              <img src="/nosotros3.png" alt="" />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "40% ",
                left: "7%",
                width: "52%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Merriweather",
                  fontSize: "40px",
                  fontWeight: "300",
                  color: "white",
                  ml: "7%",
                }}
              >
                Somos una consultora boutique internacional especializada en
                potenciar el desarrollo de las organizaciones, a través de la
                innovación tecnológica y el trabajo personalizado.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: { sm: "95%", md: "90%", lg: "97%" },
                left: "7%",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  height: "43px",
                  width: "177px",
                  borderRadius: "100px",
                  backgroundColor: "#1296E9",
                  textTransform: "none",
                  "&:hover": {
                    height: "43px",
                    width: "177px",
                    borderRadius: "100px",
                    backgroundColor: "#1296E9",
                  },
                }}
              >
                <Typography
                  sx={{
                    textTransform: "none",
                    fontFamily: "Manrope",
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontWeight: 600,
                    letterSpacing: "0.1",
                    color: "black",
                  }}
                >
                  Conoce más
                </Typography>
              </Button>
            </Box>
            <Box sx={{ position: "absolute", left: "80%", top: "42%" }}>
              <img src="/ilustracion.png" alt="" />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "121vh",
            backgroundColor: "rgba(18,150,233, 0.4)",
          }}
        >
          <Box display={"flex"} width={"93%"}>
            <Box sx={{ ml: "6%", mt: "17%", width: "60%" }}>
              <Typography
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={
                  cambiarColor
                    ? { color: "rgb(18,150,233)" }
                    : { color: "white" }
                }
                sx={{
                  fontFamily: "Merriweather",
                  fontWeight: 100,
                  fontSize: "32px",
                  lineHeight: "47px",
                  letterSpacing: "0.5px",
                }}
              >
                Mi{" "}
                <span
                
                  onMouseEnter={(e) => (e.target.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgb(18,150,233)")
                  }
                  onClick={() =>
                    handleTextoSeleccionado(
                      "Licenciado en Recursos Humanos egresado de la Universidad Argentina de la Empresa (UADE) y también graduado en UADE Business School y en MIT Sloan School of Management.Se desempeñó como ejecutivo de Recursos Humanos en compañías multinacionales como Toyota, Techint y Unilever, con responsabilidades locales y regionales."
                    )
                  }
                  style={{
                    cursor: "pointer",
                    color: "rgb(18,150,233)",
                    fontWeight: "600",
                    fontFamily: "Merriweather",
                  }}
                >
                  experiencia
                </span>{" "}
                en diversas corporaciones multinacionales y la gestión de{" "}
                <span
                  onMouseEnter={(e) => (e.target.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgb(18,150,233)")
                  }
                  onClick={() =>
                    handleTextoSeleccionado(
                      "Fundó dos startups: Nawaiam, un videojuego que detecta en 15 minutos el perfil conductual y competencias de los usuarios, y TuPrimerLaburo Argentina - TuPrimeraPega Chile - TuPrimerCurro España, una plataforma dirigida a los jóvenes para su autoconocimiento y desarrollo de habilidades que mejoran su índice de inserción laboral."
                    )
                  }
                  style={{
                    cursor: "pointer",
                    color: "rgb(18,150,233)",
                    fontWeight: "600",
                    fontFamily: "Merriweather",
                  }}
                >
                  mis propias startups
                </span>{" "}
                y pymes a nivel internacional, con la tecnología como eje
                central, me brindaron{" "}
                <span
                  onMouseEnter={(e) => (e.target.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgb(18,150,233)")
                  }
                  onClick={() =>
                    handleTextoSeleccionado(
                      "Speaker internacional con más de 150 conferencias dictadas en 10 países sobre gestión del talento, gaming, startups y HR Tech Trends, entre otras temáticas centradas en los Recursos Humanos y la tecnología."
                    )
                  }
                  style={{
                    cursor: "pointer",
                    color: "rgb(18,150,233)",
                    fontWeight: "600",
                    fontFamily: "Merriweather",
                  }}
                >
                  aprendizajes valiosos sobre las conductas{" "}
                </span>{" "}
                y soft skills de{" "}
                <span
                  onMouseEnter={(e) => (e.target.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgb(18,150,233)")
                  }
                  onClick={() =>
                    handleTextoSeleccionado(
                      "Fue reconocido internacionalmente como emprendedor por el rey Felipe VI de España, AT&T (Estados Unidos), Latin American Excellence Awards (Brasil), Endeavor y Orgullo UADE (Argentina), Premios Latinoamérica Verde (Ecuador), Acelerar España, 100 mejores ideas empresariales de El Mundo y la Caixa Bank y los Premios Reyes Católicos (España), entre otros. Fue docente universitario por más de 15 años en Argentina, Chile y España en materias como Dirección Estratégica de RRHH y Digital Talent Management.Es columnista en radio, TV, periódicos y podcasts sobre talento y tecnología."
                    )
                  }
                  style={{
                    cursor: "pointer",
                    color: "rgb(18,150,233)",
                    fontWeight: "600",
                    fontFamily: "Merriweather",
                  }}
                >
                  líderes de todo tipo de industrias.
                </span>{" "}
                Con un equipo interdisciplinario, desde Tyme ponemos esa
                experiencia en juego y asistimos a empresas de todo el mundo en
                la gestión del capital humano
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "30px",
                  lineHeight: "123.3%",
                  color: "#1296E9",
                  fontWeight: "600",
                  mt: "7%",
                }}
              >
                Kavier Krawicki
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "22px",
                  lineHeight: "123.3%",
                  color: "white",
                  width: "260px",
                }}
              >
                Fundador y Co-Director de Tyme Consulting
              </Typography>
            </Box>

            <Box width={"24%"} ml={"12%"} mt={"17%"} w>
              {textoSeleccionado && (
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    lineHeight: "30px",
                    letterSpacing: "0.5px",
                    color: "#1296E9",
                  }}
                >
                  {textoSeleccionado}
                </Typography>
              )}
            </Box>
          </Box>
          <Box sx={{ position: "absolute", top: "130%", left: "92%" }}>
            <Button onClick={() =>
                    handleTextoSeleccionado(
                      "Licenciado en Recursos Humanos egresado de la Universidad Argentina de la Empresa (UADE) y también graduado en UADE Business School y en MIT Sloan School of Management.Se desempeñó como ejecutivo de Recursos Humanos en compañías multinacionales como Toyota, Techint y Unilever, con responsabilidades locales y regionales."
                    )
                  }>
              <img src="/iconoN1.png" alt="" />
            </Button>
          </Box>
          <Box sx={{ position: "absolute", top: "140%", left: "62%" }}>
            <Button  onClick={() =>
                    handleTextoSeleccionado(
                      "Fundó dos startups: Nawaiam, un videojuego que detecta en 15 minutos el perfil conductual y competencias de los usuarios, y TuPrimerLaburo Argentina - TuPrimeraPega Chile - TuPrimerCurro España, una plataforma dirigida a los jóvenes para su autoconocimiento y desarrollo de habilidades que mejoran su índice de inserción laboral."
                    )
                  }>
              <img src="/iconoN2.png" alt="" />
            </Button>
          </Box>
          <Box sx={{ position: "absolute", top: "190%", left: "62%" }}>
            <Button onClick={() =>
                    handleTextoSeleccionado(
                      "Speaker internacional con más de 150 conferencias dictadas en 10 países sobre gestión del talento, gaming, startups y HR Tech Trends, entre otras temáticas centradas en los Recursos Humanos y la tecnología."
                    )
                  }>
              <img src="/iconoN3.png" alt="" />
            </Button>
          </Box>
          <Box sx={{ position: "absolute", top: "204%", left: "52%" }}>
            <Button onClick={() =>
                    handleTextoSeleccionado(
                      "Fue reconocido internacionalmente como emprendedor por el rey Felipe VI de España, AT&T (Estados Unidos), Latin American Excellence Awards (Brasil), Endeavor y Orgullo UADE (Argentina), Premios Latinoamérica Verde (Ecuador), Acelerar España, 100 mejores ideas empresariales de El Mundo y la Caixa Bank y los Premios Reyes Católicos (España), entre otros. Fue docente universitario por más de 15 años en Argentina, Chile y España en materias como Dirección Estratégica de RRHH y Digital Talent Management.Es columnista en radio, TV, periódicos y podcasts sobre talento y tecnología."
                    )
                  }>
              <img src="/iconoN4.png" alt="" />
            </Button>
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
