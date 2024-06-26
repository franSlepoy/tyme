import { Box, Button, Hidden, Typography, Dialog } from "@mui/material";

import { Parallax } from "react-scroll-parallax";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Nosotros = () => {
  // Estado para almacenar el texto seleccionado
  const [textoSeleccionado, setTextoSeleccionado] = useState("");

  // Función para manejar la selección de texto
  const handleTextoSeleccionado = (texto) => {
    setTextoSeleccionado(texto);
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
              <img style={{objectFit:"cover", height:"700px", width:"100%"}} src="/javier1.png" alt="" />
            </Box>
          </Parallax>
          <Box>
            <Box sx={{ position: "absolute", top: "400px", right: "0px" }}>
              <img width={"100%"} src="/nosotros3.png" alt="" />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "300px ",
                left: "7%",
                width: "52%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Merriweather",
                  fontSize: "36px",
                  lineHeight: "44px",
                  fontWeight: "300",

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
                top: "708px",
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
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#1296E9",
                      boxShadow: "none",
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
            <Box sx={{ position: "absolute", right: "0%", top: "400px" }}>
              <img width={"100%"} src="/ilustracion.png" alt="" />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            pb: "15%",
            pt: "15%",
            backgroundColor: "rgba(18,150,233, 0.4)",
          }}
        >
          <Box display={"flex"} width={"93%"} id="seccionDestino">
            <Box sx={{ ml: "7.5%", width: "60%" }}>
              <Typography
                style={{ color: "white" }}
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
                  onClick={() =>
                    handleTextoSeleccionado(
                      "Licenciado en Recursos Humanos egresado de la Universidad Argentina de la Empresa (UADE) y también graduado en UADE Business School y en MIT Sloan School of Management.Se desempeñó como ejecutivo de Recursos Humanos en compañías multinacionales como Toyota, Techint y Unilever, con responsabilidades locales y regionales."
                    )
                  }
                  style={{
                    cursor: "pointer",
                    color: "white",
                    fontWeight: "600",
                    fontFamily: "Merriweather",
                    textDecoration: "underline",
                    transition: "color 0.8s", // Animación suave de transición
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#1296E9"; // Cambiar el color al hacer hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "white"; // Restaurar el color predeterminado al salir del hover
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
                    color: "white",
                    fontWeight: "600",
                    fontFamily: "Merriweather",
                    textDecoration: "underline",
                    transition: "color 0.8s", // Animación suave de transición
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#1296E9"; // Cambiar el color al hacer hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "white"; // Restaurar el color predeterminado al salir del hover
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
                    color: "white",
                    fontWeight: "600",
                    fontFamily: "Merriweather",
                    textDecoration: "underline",
                    transition: "color 0.8s", // Animación suave de transición
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#1296E9"; // Cambiar el color al hacer hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "white"; // Restaurar el color predeterminado al salir del hover
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
                    color: "white",
                    fontWeight: "600",
                    fontFamily: "Merriweather",
                    textDecoration: "underline",
                    transition: "color 0.8s", // Animación suave de transición
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#1296E9"; // Cambiar el color al hacer hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "white"; // Restaurar el color predeterminado al salir del hover
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
                Javier Krawicki
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

            <Box ml={"4%"}>
              <Box>
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
                  <img width={"80%"} src="/iconoN1.png" alt="" />
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{
                    bgcolor: "transparent",
                    mt: 2,
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
                  <img width={"80%"} src="/iconoN2.png" alt="" />
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{
                    bgcolor: "transparent",
                    mt: 2,
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
                  <img width={"80%"} src="/iconoN3.png" alt="" />
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{
                    mt: 2,
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
                  <img width={"80%"} src="/iconoN4.png" alt="" />
                </Button>
              </Box>
            </Box>

            <Box width={"24%"} ml={"4%"}>
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
        </Box>
      </Hidden>

      <Hidden lgUp smDown>
        <Box sx={{ width: "100%" }}>
          <Parallax speed={-6} tagOuter="figure">
            <Box mt={-3}>
              <img style={{objectFit:"cover", height:"700px", width:"100%"}} src="/javier1.png" alt="" />
            </Box>
          </Parallax>
          <Box>
            <Box sx={{ position: "absolute", top: "400px", right: "0px" }}>
              <img width={"100%"} src="/nosotros3.png" alt="" />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "200px ",
                left: "7%",
                width: "52%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Merriweather",
                  fontSize: "30px",
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

            <Box sx={{ position: "absolute", right: "0%", top: "400px" }}>
              <img width={"100%"} src="/ilustracion.png" alt="" />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            pb: "15%",
            pt: "15%",
            backgroundColor: "rgba(18,150,233, 0.4)",
          }}
        >
          <Box display={"flex"} width={"93%"} id="seccionDestino">
            <Box sx={{ ml: "6%", width: "60%" }}>
              <Typography
                style={{ color: "white" }}
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
                  onClick={() =>
                    handleTextoSeleccionado(
                      "Licenciado en Recursos Humanos egresado de la Universidad Argentina de la Empresa (UADE) y también graduado en UADE Business School y en MIT Sloan School of Management.Se desempeñó como ejecutivo de Recursos Humanos en compañías multinacionales como Toyota, Techint y Unilever, con responsabilidades locales y regionales."
                    )
                  }
                  style={{
                    cursor: "pointer",
                    color: "white",
                    fontWeight: "600",
                    fontFamily: "Merriweather",
                    textDecoration: "underline",
                    transition: "color 0.8s", // Animación suave de transición
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#1296E9"; // Cambiar el color al hacer hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "white"; // Restaurar el color predeterminado al salir del hover
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
                    color: "white",
                    fontWeight: "600",
                    fontFamily: "Merriweather",
                    textDecoration: "underline",
                    transition: "color 0.8s", // Animación suave de transición
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#1296E9"; // Cambiar el color al hacer hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "white"; // Restaurar el color predeterminado al salir del hover
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
                    color: "white",
                    fontWeight: "600",
                    fontFamily: "Merriweather",
                    textDecoration: "underline",
                    transition: "color 0.8s", // Animación suave de transición
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#1296E9"; // Cambiar el color al hacer hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "white"; // Restaurar el color predeterminado al salir del hover
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
                    color: "white",
                    fontWeight: "600",
                    fontFamily: "Merriweather",
                    textDecoration: "underline",
                    transition: "color 0.8s", // Animación suave de transición
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#1296E9"; // Cambiar el color al hacer hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "white"; // Restaurar el color predeterminado al salir del hover
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
                Javier Krawicki
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

            <Box ml={"4%"}>
              <Box>
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
                  <img width={"80%"} src="/iconoN1.png" alt="" />
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{
                    bgcolor: "transparent",
                    mt: 2,
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
                  <img width={"80%"} src="/iconoN2.png" alt="" />
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{
                    bgcolor: "transparent",
                    mt: 2,
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
                  <img width={"80%"} src="/iconoN3.png" alt="" />
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{
                    mt: 2,
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
                  <img width={"80%"} src="/iconoN4.png" alt="" />
                </Button>
              </Box>
            </Box>

            <Box width={"24%"} ml={"4%"}>
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
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box>
          <Box>
            <img width={"100%"} src="/mobileNosotros.png" alt="" />
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "20% ",
            left: "9%",
            width: "52%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Merriweather",
              fontSize: "25px",
              fontWeight: "300",
              lineHeight: "31px",
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
            width: "100%",
            backgroundColor: "rgba(18,150,233, 0.4)",
          }}
        >
          <Box
            width={"90%"}
            m={"auto"}
            display={"flex"}
            mt={-5}
            pt={10}
            bgcolor={"rgba(18,150,233, 0.01)"}
          >
            <Box display={"flex"} width={"100%"} m={"auto"}>
              <Box>
                <Button
                  onClick={() =>
                    handleOpenDialog(
                      "Licenciado en Recursos Humanos egresado de la Universidad Argentina de la Empresa (UADE) y también graduado en UADE Business School y en MIT Sloan School of Management.Se desempeñó como ejecutivo de Recursos Humanos en compañías multinacionales como Toyota, Techint y Unilever, con responsabilidades locales y regionales.",
                      1
                    )
                  }
                >
                  <img width={"80%"} src="/iconoN1.png" alt="" />
                </Button>
              </Box>
              <Box ml={1}>
                <Button
                  onClick={() =>
                    handleOpenDialog(
                      "Fundó dos startups: Nawaiam, un videojuego que detecta en 15 minutos el perfil conductual y competencias de los usuarios, y TuPrimerLaburo Argentina - TuPrimeraPega Chile - TuPrimerCurro España, una plataforma dirigida a los jóvenes para su autoconocimiento y desarrollo de habilidades que mejoran su índice de inserción laboral.",
                      2
                    )
                  }
                >
                  <img width={"80%"} src="/iconoN2.png" alt="" />
                </Button>
              </Box>
              <Box ml={1}>
                <Button
                  onClick={() =>
                    handleOpenDialog(
                      "Speaker internacional con más de 150 conferencias dictadas en 10 países sobre gestión del talento, gaming, startups y HR Tech Trends, entre otras temáticas centradas en los Recursos Humanos y la tecnología.",
                      3
                    )
                  }
                >
                  <img width={"80%"} src="/iconoN3.png" alt="" />
                </Button>
              </Box>
              <Box ml={1}>
                <Button
                  onClick={() =>
                    handleOpenDialog(
                      "Fue reconocido internacionalmente como emprendedor por el rey Felipe VI de España, AT&T (Estados Unidos), Latin American Excellence Awards (Brasil), Endeavor y Orgullo UADE (Argentina), Premios Latinoamérica Verde (Ecuador), Acelerar España, 100 mejores ideas empresariales de El Mundo y la Caixa Bank y los Premios Reyes Católicos (España), entre otros. Fue docente universitario por más de 15 años en Argentina, Chile y España en materias como Dirección Estratégica de RRHH y Digital Talent Management.Es columnista en radio, TV, periódicos y podcasts sobre talento y tecnología.",
                      4
                    )
                  }
                >
                  <img width={"80%"} src="/iconoN4.png" alt="" />
                </Button>
              </Box>
            </Box>
          </Box>

          <Box width={"82%"} m={"auto"}>
            <Box>
              <Typography
                sx={{
                  mt: "8%",
                  fontFamily: "Merriweather",
                  fontWeight: "100",
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
                    fontWeight: "400",
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
                  fontSize: "20px",
                  lineHeight: "123.3%",
                  color: "#1296E9",
                  fontWeight: "600",
                  mt: "7%",
                }}
              >
                Javier Krawicki
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  lineHeight: "123.3%",
                  fontWeight: "100",
                  color: "#1296E9",
                  width: "60%",
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
