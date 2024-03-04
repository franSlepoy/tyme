import { Box, Button, Hidden, Typography, Dialog } from "@mui/material";

import { Parallax } from "react-scroll-parallax";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

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
  const [selectedText, setSelectedText] = useState("");
  const [selectedButton, setSelectedButton] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpenDialog = (text, buttonNumber) => {
    setSelectedText(text);
    setSelectedButton(buttonNumber);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <Hidden lgDown>
        <Box sx={{ width: "100%" }}>
          <Parallax speed={-12} tagOuter="figure">
            <Box>
              <img width={"100%"} src="/javier1.png" alt="" />
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
                  lineHeight: "50px",
                  color: "white",
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
              <ScrollLink
                to="seccionDestino" // ID de la sección de destino
                smooth={true} // Desplazamiento suave
              >
                <Button
                  disableRipple={true}
                  variant="contained"
                  sx={{
                    height: "43px",
                    width: "177px",
                    borderRadius: "100px",
                    backgroundColor: "#1296E9",
                    textTransform: "none",
                    "&:hover": {
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
              </ScrollLink>
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
          <Box display={"flex"} width={"93%"} id="seccionDestino">
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
            <Button
              disableRipple={true}
              sx={{
                bgcolor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() =>
                handleTextoSeleccionado(
                  "Licenciado en Recursos Humanos egresado de la Universidad Argentina de la Empresa (UADE) y también graduado en UADE Business School y en MIT Sloan School of Management.Se desempeñó como ejecutivo de Recursos Humanos en compañías multinacionales como Toyota, Techint y Unilever, con responsabilidades locales y regionales."
                )
              }
            >
              <img src="/iconoN1.png" alt="" />
            </Button>
          </Box>
          <Box sx={{ position: "absolute", top: "140%", left: "62%" }}>
            <Button
             sx={{
              bgcolor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
              disableRipple={true}
              onClick={() =>
                handleTextoSeleccionado(
                  "Fundó dos startups: Nawaiam, un videojuego que detecta en 15 minutos el perfil conductual y competencias de los usuarios, y TuPrimerLaburo Argentina - TuPrimeraPega Chile - TuPrimerCurro España, una plataforma dirigida a los jóvenes para su autoconocimiento y desarrollo de habilidades que mejoran su índice de inserción laboral."
                )
              }
            >
              <img src="/iconoN2.png" alt="" />
            </Button>
          </Box>
          <Box sx={{ position: "absolute", top: "190%", left: "62%" }}>
            <Button
             sx={{
              bgcolor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
              disableRipple={true}
              onClick={() =>
                handleTextoSeleccionado(
                  "Speaker internacional con más de 150 conferencias dictadas en 10 países sobre gestión del talento, gaming, startups y HR Tech Trends, entre otras temáticas centradas en los Recursos Humanos y la tecnología."
                )
              }
            >
              <img src="/iconoN3.png" alt="" />
            </Button>
          </Box>
          <Box
           sx={{ position: "absolute", top: "204%", left: "52%" }}>
            <Button
             sx={{
              bgcolor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
              disableRipple={true}
              onClick={() =>
                handleTextoSeleccionado(
                  "Fue reconocido internacionalmente como emprendedor por el rey Felipe VI de España, AT&T (Estados Unidos), Latin American Excellence Awards (Brasil), Endeavor y Orgullo UADE (Argentina), Premios Latinoamérica Verde (Ecuador), Acelerar España, 100 mejores ideas empresariales de El Mundo y la Caixa Bank y los Premios Reyes Católicos (España), entre otros. Fue docente universitario por más de 15 años en Argentina, Chile y España en materias como Dirección Estratégica de RRHH y Digital Talent Management.Es columnista en radio, TV, periódicos y podcasts sobre talento y tecnología."
                )
              }
            >
              <img src="/iconoN4.png" alt="" />
            </Button>
          </Box>
        </Box>
      </Hidden>

      <Hidden lgUp smDown>
        <Parallax speed={-12} tagOuter="figure">
          <Box
            sx={{ width: "100%", height: "94vh", backgroundColor: "#453D3B" }}
          >
            <Box sx={{ ml: "34%" }}>
              <img height={"624vh"} src="/javier.png" alt="" />
            </Box>
          </Box>
        </Parallax>
        <Box>
          <Box sx={{ position: "absolute", top: "62%" }}>
            <img width={"100%"} src="/nosotros3.png" alt="" />
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "20% ",
              left: "7%",
              width: "52%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "30px",
                fontWeight: "300",
                color: "white",
              }}
            >
              Somos una consultora boutique internacional especializada en
              potenciar el desarrollo de las organizaciones, a través de la
              innovación tecnológica y el trabajo personalizado.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "201vh",
            backgroundColor: "rgba(18,150,233, 0.4)",
          }}
        >
          <Box
            display={"flex"}
            mt={3}
            pt={25}
            pl={5}
            bgcolor={"rgba(18,150,233, 0.01)"}
          >
            <Box>
              <Button
                onClick={() =>
                  handleTextoSeleccionado(
                    "Licenciado en Recursos Humanos egresado de la Universidad Argentina de la Empresa (UADE) y también graduado en UADE Business School y en MIT Sloan School of Management.Se desempeñó como ejecutivo de Recursos Humanos en compañías multinacionales como Toyota, Techint y Unilever, con responsabilidades locales y regionales."
                  )
                }
              >
                <img src="/iconoN1.png" alt="" />
              </Button>
            </Box>
            <Box ml={2}>
              <Button
                onClick={() =>
                  handleTextoSeleccionado(
                    "Fundó dos startups: Nawaiam, un videojuego que detecta en 15 minutos el perfil conductual y competencias de los usuarios, y TuPrimerLaburo Argentina - TuPrimeraPega Chile - TuPrimerCurro España, una plataforma dirigida a los jóvenes para su autoconocimiento y desarrollo de habilidades que mejoran su índice de inserción laboral."
                  )
                }
              >
                <img src="/iconoN2.png" alt="" />
              </Button>
            </Box>
            <Box ml={2}>
              <Button
                onClick={() =>
                  handleTextoSeleccionado(
                    "Speaker internacional con más de 150 conferencias dictadas en 10 países sobre gestión del talento, gaming, startups y HR Tech Trends, entre otras temáticas centradas en los Recursos Humanos y la tecnología."
                  )
                }
              >
                <img src="/iconoN3.png" alt="" />
              </Button>
            </Box>
            <Box ml={2}>
              <Button
                onClick={() =>
                  handleTextoSeleccionado(
                    "Fue reconocido internacionalmente como emprendedor por el rey Felipe VI de España, AT&T (Estados Unidos), Latin American Excellence Awards (Brasil), Endeavor y Orgullo UADE (Argentina), Premios Latinoamérica Verde (Ecuador), Acelerar España, 100 mejores ideas empresariales de El Mundo y la Caixa Bank y los Premios Reyes Católicos (España), entre otros. Fue docente universitario por más de 15 años en Argentina, Chile y España en materias como Dirección Estratégica de RRHH y Digital Talent Management.Es columnista en radio, TV, periódicos y podcasts sobre talento y tecnología."
                  )
                }
              >
                <img src="/iconoN4.png" alt="" />
              </Button>
            </Box>
          </Box>

          <Box display={"flex"} width={"93%"}>
            <Box sx={{ ml: "6%", width: "60%" }}>
              <Typography
                sx={{
                  mt: "8%",
                  fontFamily: "Merriweather",
                  fontWeight: 100,
                  fontSize: "32px",
                  lineHeight: "47px",
                  letterSpacing: "0.5px",
                  color: "white",
                }}
              >
                Mi{" "}
                <span
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

            <Box width={"24%"} ml={"12%"} mt={"5%"} w>
              {textoSeleccionado && (
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: "16px",
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
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box>
          <Box>
            <img width={"100%"} src="/javier.png" alt="" />
          </Box>

          <Box>
            <Box
              sx={{
                position: "absolute",
                top: "18% ",
                left: "7%",
                width: "52%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#1296E9",
                }}
              >
                Quienes somos
              </Typography>
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "20% ",
                left: "7%",
                width: "72%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Merriweather",
                  fontSize: "30px",
                  fontWeight: "300",
                  color: "white",
                  ml: "%",
                  mt: "30px",
                }}
              >
                Somos una consultora boutique internacional especializada en
                potenciar el desarrollo de las organizaciones, a través de la
                innovación tecnológica y el trabajo personalizado.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            backgroundColor: "rgba(18,150,233, 0.4)",
          }}
        >
          <Box
            width={"93%"}
            display={"flex"}
            mt={-5}
            pt={25}
            pl={1}
            bgcolor={"rgba(18,150,233, 0.01)"}
          >
            <Box>
              <Button
                onClick={() =>
                  handleOpenDialog(
                    "Licenciado en Recursos Humanos egresado de la Universidad Argentina de la Empresa (UADE) y también graduado en UADE Business School y en MIT Sloan School of Management.Se desempeñó como ejecutivo de Recursos Humanos en compañías multinacionales como Toyota, Techint y Unilever, con responsabilidades locales y regionales.",
                    1
                  )
                }
              >
                <img width={"70px"} src="/iconoN1.png" alt="" />
              </Button>
            </Box>
            <Box>
              <Button
                onClick={() =>
                  handleOpenDialog(
                    "Fundó dos startups: Nawaiam, un videojuego que detecta en 15 minutos el perfil conductual y competencias de los usuarios, y TuPrimerLaburo Argentina - TuPrimeraPega Chile - TuPrimerCurro España, una plataforma dirigida a los jóvenes para su autoconocimiento y desarrollo de habilidades que mejoran su índice de inserción laboral.",
                    2
                  )
                }
              >
                <img width={"70px"} src="/iconoN2.png" alt="" />
              </Button>
            </Box>
            <Box>
              <Button
                onClick={() =>
                  handleOpenDialog(
                    "Speaker internacional con más de 150 conferencias dictadas en 10 países sobre gestión del talento, gaming, startups y HR Tech Trends, entre otras temáticas centradas en los Recursos Humanos y la tecnología.",
                    3
                  )
                }
              >
                <img width={"70px"} src="/iconoN3.png" alt="" />
              </Button>
            </Box>
            <Box>
              <Button
                onClick={() =>
                  handleOpenDialog(
                    "Fue reconocido internacionalmente como emprendedor por el rey Felipe VI de España, AT&T (Estados Unidos), Latin American Excellence Awards (Brasil), Endeavor y Orgullo UADE (Argentina), Premios Latinoamérica Verde (Ecuador), Acelerar España, 100 mejores ideas empresariales de El Mundo y la Caixa Bank y los Premios Reyes Católicos (España), entre otros. Fue docente universitario por más de 15 años en Argentina, Chile y España en materias como Dirección Estratégica de RRHH y Digital Talent Management.Es columnista en radio, TV, periódicos y podcasts sobre talento y tecnología.",
                    4
                  )
                }
              >
                <img width={"70px"} src="/iconoN4.png" alt="" />
              </Button>
            </Box>
          </Box>

          <Box width={"93%"}>
            <Box sx={{ ml: "6%", width: "95%" }}>
              <Typography
                sx={{
                  mt: "8%",
                  fontFamily: "Merriweather",
                  fontWeight: 100,
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "0.5px",
                  color: "white",
                }}
              >
                Mi{" "}
                <span
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
                  pb: 5,
                }}
              >
                Fundador y Co-Director de Tyme Consulting
              </Typography>
            </Box>

            <Dialog open={open} onClose={handleCloseDialog}>
              <Box width={"100%"} p={5} bgcolor={"#1296E9"}>
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: "16px",
                    lineHeight: "30px",
                    letterSpacing: "0.5px",
                    color: "white",
                  }}
                >
                  {selectedText}
                </Typography>
              </Box>
            </Dialog>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Nosotros;
