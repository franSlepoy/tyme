import { Box, Button, Hidden, Typography } from "@mui/material";

import { Parallax } from "react-scroll-parallax";
import Charlas1 from "../../common/charlas/Charlas1";
import { useState } from "react";
import Charlas2 from "../../common/charlas/Charlas2";
import Charlas3 from "../../common/charlas/Charlas3";
import Charlas4 from "../../common/charlas/Charlas4";
import BlackButtom from "../../common/blackButtom/BlackButtom";
import Charlas5 from "../../common/charlas/Charlas5";
import Charlas6 from "../../common/charlas/Charlas6";
import Charlas7 from "../../common/charlas/Charlas7";
import { Link as ScrollLink } from "react-scroll";

const CharlasYconferencias = () => {
  // Estado para controlar qué componente se muestra
  const [componenteVisible, setComponenteVisible] = useState(null);

  const handleCloseComponente = () => {
    setComponenteVisible(null); // Al hacer clic en la flecha, ocultar el componente
  };
  // Funciones para manejar el clic en cada botón
  const handleClickA = () => {
    setComponenteVisible("ComponenteA");
  };
  const handleClickB = () => {
    setComponenteVisible("ComponenteB");
  };
  const handleClickC = () => {
    setComponenteVisible("ComponenteC");
  };
  const handleClickD = () => {
    setComponenteVisible("ComponenteD");
  };
  const handleClickE = () => {
    setComponenteVisible("ComponenteE");
  };
  const handleClickF = () => {
    setComponenteVisible("ComponenteF");
  };
  const handleClickG = () => {
    setComponenteVisible("ComponenteG");
  };
  return (
    <>
      <Hidden lgDown>
        <Parallax speed={-12} tagOuter="figure">
          <Box width={"100%"} overflow="hidden">
            <img height={"100%"} src="/charlas1.png" alt="" />
          </Box>
        </Parallax>
        <Box>
          <Box sx={{ position: "absolute", top: "32%" }}>
            <img src="/nosotros4.png" alt="" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "33% ",
              left: "51%",
              width: "45%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "40px",
                lineHeight: "50px",
                fontWeight: "300",
                color: "white",
              }}
            >
              Desde nuestra experiencia en startups, empresas, consultoría y
              transformación tecnológica, dictamos conferencias y capacitaciones
              para organizaciones, compañías e industrias.
            </Typography>
          </Box>

          <ScrollLink to={"seccionDestino"} smooth={true}>
            <Button
              disableRipple={true}
              sx={{ position: "absolute", top: "94vh", left: "50%" }}
            >
              <img src="/flechaBajo.png" alt="" />
            </Button>
          </ScrollLink>
        </Box>

        <Box
          id={"seccionDestino"}
          style={{
            backgroundImage: "linear-gradient(to right top, #18CC66, #1296E9)",
          }}
          sx={{ width: "100%", height: "152vh", pb: "5%" }}
        >
          <Box display={"flex"} width={"88%"} margin={"auto"}>
            <Box mt={"15%"} width={"50%"}>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  lineHeight: "34px",
                  fontWeight: "300",
                  color: "black",
                }}
              >
                Capacitaciones enfocadas en las nuevas tendencias y estrategias
                para la gestión del capital humano, fortalecimiento de la
                cultura organizacional y los liderazgos, teambuilding y fomento
                de la creatividad y la innovación.
              </Typography>
            </Box>

            <Box ml={"6%"} width={"20%"} mt={"15%"}>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "300",
                  fontSize: "100px",
                  lineHeight: "90%",
                  color: "white",
                }}
              >
                Recursos Humanos
              </Typography>
            </Box>
          </Box>

          <Box
            display={"flex"}
            width={"90%"}
            m={"auto"}
            justifyContent={"space-evenly"}
            mt={"82px"}
          >
            <Box
              width={"24%"}
              component={Button}
              disableRipple={true}
              onClick={handleClickA}
              sx={{
                textTransform: "none",
                display: "flex",
                flexDirection: "column",

                "&:hover": {
                  backgroundColor: "transparent",
                },
              
              }}
            >
              <Box ml={-27}>
                <img src="/iconC1.png" alt="" />
              </Box>

              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 2,
                  ml:-12
                }}
              >
                Amplifying impact:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                  textAlign: "left",
                
                }}
              >
                Cómo la influencia puede ayudarte a motivar a tu equipo y tus
                clientes, y desencadenar una ola de creatividad en tu...{" "}
              </Typography>
            </Box>

            <Box
              width={"25%"}
              ml={1}
              component={Button}
              disableRipple={true}
              onClick={handleClickB}
              sx={{
                textAlign: "left",
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  backgroundColor: "transparent",
                },
            
              }}
            >
              <Box ml={-28}>
                <img src="/iconC2.png" alt="" />
              </Box>

              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                Date with myself: turismo interior{" "}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                La importancia del autoconocimiento para la estabilidad, el
                equilibrio y el d...{" "}
              </Typography>
            </Box>
            <Box
              width={"24%"}
              ml={2}
              component={Button}
              disableRipple={true}
              onClick={handleClickC}
              sx={{
                textAlign: "left",
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Box ml={-31}>
                <img src="/iconC3.png" alt="" />
              </Box>

              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                  ml: -2,
                }}
              >
                Construyendo un legado: liderazgo transformador en tiempos de
                incertidumbre{" "}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                  width: "280px",
                  textAlign: "left",
                  ml: -5,
                }}
              >
                Cómo guiar a tus equipos y cuidar los liderazgos...{" "}
              </Typography>
            </Box>
            <Box
              width={"24%"}
              component={Button}
              disableRipple={true}
              onClick={handleClickD}
              sx={{
                mt: 6,
                textAlign: "left",
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Box ml={-27}>
                <img src="/iconC4.png" alt="" />
              </Box>

              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 2,
                }}
              >
                Sinfonía: cómo armonizar distintas generaciones
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Diversidad, inclusión y empatía como aliadas para que las
                diferencias sean aprovechadas como oportunidades y se...{" "}
              </Typography>
            </Box>
          </Box>
          <Box ml={"44%"} mt={"5%"} mb={"5%"}>
            <BlackButtom texto={"Consultanos"} linkTo={"/contacto"} />
          </Box>
        </Box>
        {componenteVisible === "ComponenteA" && (
          <Charlas1 handleCloseComponente={handleCloseComponente} />
        )}
        {componenteVisible === "ComponenteB" && (
          <Charlas2 handleCloseComponente={handleCloseComponente} />
        )}
        {componenteVisible === "ComponenteC" && (
          <Charlas3 handleCloseComponente={handleCloseComponente} />
        )}
        {componenteVisible === "ComponenteD" && (
          <Charlas4 handleCloseComponente={handleCloseComponente} />
        )}

        <Parallax speed={-12}>
          <Box mt={-3}>
            <img src="/charlasGente.png" alt="" />
          </Box>
        </Parallax>

        <Box
          width={"100%"}
          height={"160vh"}
          pb={"5%"}
          mt={-20}
          style={{
            backgroundImage: "linear-gradient(to right top, #1296E9, #18CC66)",
          }}
        >
          <Box pt={40}>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "100px",
                fontWeight: "300",
                color: "white",
                textAlign: "center",
              }}
            >
              Tecnología
            </Typography>
            <Typography
              m={"auto"}
              sx={{
                width: "83%",
                fontFamily: "Manrope",
                fontSize: "32px",
                fontWeight: "300",
                color: "white",
                textAlign: "center",
              }}
            >
              Capacitaciones sobre estrategias de transformación digital e
              incorporación de Inteligencia Artificial y nuevas tecnologías,
              para convertirlas en un factor diferencial clave que generen un
              salto de crecimiento en tu negocio. 
            </Typography>
          </Box>
          <Box
            display={"flex"}
            width={"72%"}
            m={"auto"}
            justifyContent={"space-evenly"}
            mt={5}
          >
            <Box
              width={"30%"}
              component={Button}
              disableRipple={true}
              onClick={handleClickE}
              sx={{
                textAlign: "left",
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Box ml={-26}>
                <img src="/iconC5.png" alt="" />
              </Box>

              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                HR 5.0: abrazando la revolución de las tendencias en RRHH
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Cómo incorporar nuevas tecnologías que sumen...
              </Typography>
            </Box>
            <Box
              width={"30%"}
              component={Button}
              disableRipple={true}
              onClick={handleClickF}
              sx={{
                textAlign: "left",
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Box ml={-26}>
                <img src="/iconC6.png" alt="" />
              </Box>

              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                Game on: IA, gaming y metaverso redefiniendo el mercado laboral
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Herramientas para aprender cómo estas tres realidades...
              </Typography>
            </Box>
            <Box
              width={"30%"}
              ml={4}
              component={Button}
              disableRipple={true}
              onClick={handleClickG}
              sx={{
                textAlign: "left",
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Box ml={-27}>
                <img src="/iconC7.png" alt="" />
              </Box>

              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                Cryptowork: desbloqueando el potencial de las criptomonedas
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Exploración del impacto y las oportunidades que las...
              </Typography>
            </Box>
          </Box>
          <Box mt={"5%"} ml={"43%"}>
            <BlackButtom texto={"Consultanos"} linkTo={"/contacto"} />
          </Box>
          {componenteVisible === "ComponenteE" && (
            <Charlas5 handleCloseComponente={handleCloseComponente} />
          )}
          {componenteVisible === "ComponenteF" && (
            <Charlas6 handleCloseComponente={handleCloseComponente} />
          )}
          {componenteVisible === "ComponenteG" && (
            <Charlas7 handleCloseComponente={handleCloseComponente} />
          )}
        </Box>
      </Hidden>

      <Hidden lgUp smDown>
        <Parallax speed={-12} tagOuter="figure">
          <Box
            width={"100%"}
            style={{
              backgroundImage: "linear-gradient(to left, #264185, #4D4747)",
            }}
          >
            <img width={"100%"} height={"600vh"} src="/charlas1.png" alt="" />
          </Box>
        </Parallax>
        <Box>
          <Box sx={{ position: "absolute", top: "32%" }}>
            <img width={"100%"} src="/nosotros4.png" alt="" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "18% ",
              left: "51%",
              width: "42%",
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
              Desde nuestra experiencia en startups, empresas, consultoría y
              transformación tecnológica, dictamos conferencias y capacitaciones
              para organizaciones, compañías e industrias.
            </Typography>
          </Box>
          <Box sx={{ position: "absolute", top: "90vh", left: "50%" }}>
            <img src="/flechaBajo.png" alt="" />
          </Box>
        </Box>

        <Box
          style={{
            backgroundImage: "linear-gradient(to right, #18CC66, #1296E9)",
          }}
          sx={{ width: "100%", height: "177vh", pt: "5%", pb: "5%" }}
        >
          <Box display={"flex"} width={"88%"} margin={"auto"}>
            <Box mt={"15%"} width={"50%"}>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  lineHeight: "34px",
                  fontWeight: "300",
                  color: "black",
                }}
              >
                Capacitaciones enfocadas en las nuevas tendencias y estrategias
                para la gestión del capital humano, fortalecimiento de la
                cultura organizacional y los liderazgos, teambuilding y fomento
                de la creatividad y la innovación.
              </Typography>
            </Box>

            <Box ml={"6%"} width={"20%"} mt={"15%"}>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "300",
                  fontSize: "100px",
                  lineHeight: "90%",
                  color: "white",
                }}
              >
                Recursos Humanos
              </Typography>
            </Box>
          </Box>

          <Box
            display={"flex"}
            width={"98%"}
            justifyContent={"space-evenly"}
            mt={"82px"}
          >
            <Box
              width={"20%"}
              component={Button}
              onClick={handleClickA}
              sx={{
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src="/iconC1.png" alt="" />
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                Amplifying impact:{" "}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Cómo la influencia puede ayudarte a motivar a tu equipo y tus
                clientes, y desencadenar una ola de creatividad en tu...{" "}
              </Typography>
            </Box>

            <Box
              width={"20%"}
              ml={4}
              component={Button}
              onClick={handleClickB}
              sx={{
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src="/iconC2.png" alt="" />
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                Date with myself: turismo interior{" "}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                La importancia del autoconocimiento para la estabilidad, el
                equilibrio y el desarrollo del potencial de cada...{" "}
              </Typography>
            </Box>
            <Box
              width={"21%"}
              ml={4}
              component={Button}
              onClick={handleClickC}
              sx={{
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src="/iconC3.png" alt="" />
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                Construyendo un legado: liderazgo transformador en tiempos de
                incertidumbre{" "}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Cómo guiar a tus equipos y cuidar los liderazgos...{" "}
              </Typography>
            </Box>
            <Box
              width={"23%"}
              ml={4}
              component={Button}
              onClick={handleClickD}
              sx={{
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src="/iconC4.png" alt="" />
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                Sinfonía: cómo armonizar distintas generaciones
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Diversidad, inclusión y empatía como aliadas para que las
                diferencias sean aprovechadas como oportunidades y se...{" "}
              </Typography>
            </Box>
          </Box>
          <Box ml={"44%"} mt={"5%"} mb={"5%"}>
            <BlackButtom texto={"Consultanos"} linkTo={"/contacto"} />
          </Box>
        </Box>
        {componenteVisible === "ComponenteA" && (
          <Charlas1 handleCloseComponente={handleCloseComponente} />
        )}
        {componenteVisible === "ComponenteB" && (
          <Charlas2 handleCloseComponente={handleCloseComponente} />
        )}
        {componenteVisible === "ComponenteC" && (
          <Charlas3 handleCloseComponente={handleCloseComponente} />
        )}
        {componenteVisible === "ComponenteD" && (
          <Charlas4 handleCloseComponente={handleCloseComponente} />
        )}

        <Parallax speed={-12}>
          <Box mt={-3}>
            <img width={"100%"} src="/charlasGente.png" alt="" />
          </Box>
        </Parallax>

        <Box
          sx={{ pt: "5%", pb: "5%" }}
          width={"100%"}
          height={"160vh"}
          style={{
            backgroundImage: "linear-gradient(to right, #1296E9, #18CC66)",
          }}
        >
          <Box pt={20}>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "100px",
                fontWeight: "300",
                color: "white",
                textAlign: "center",
              }}
            >
              Tecnología
            </Typography>
            <Typography
              m={"auto"}
              sx={{
                width: "83%",
                fontFamily: "Manrope",
                fontSize: "32px",
                fontWeight: "300",
                color: "white",
                textAlign: "center",
              }}
            >
              Capacitaciones sobre estrategias de transformación digital e
              incorporación de Inteligencia Artificial y nuevas tecnologías,
              para convertirlas en un factor diferencial clave que generen un
              salto de crecimiento en tu negocio. 
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            width={"100%"}
            mt={5}
          >
            <Box
              width={"23%"}
              ml={4}
              component={Button}
              onClick={handleClickE}
              sx={{
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src="/iconC5.png" alt="" />
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                HR 5.0: abrazando la revolución de las tendencias en RRHH
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Cómo incorporar nuevas tecnologías que sumen...
              </Typography>
            </Box>
            <Box
              width={"23%"}
              ml={4}
              component={Button}
              onClick={handleClickF}
              sx={{
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src="/iconC6.png" alt="" />
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                Game on: IA, gaming y metaverso redefiniendo el mercado laboral
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Herramientas para aprender cómo estas tres realidades...
              </Typography>
            </Box>
            <Box
              width={"23%"}
              ml={4}
              component={Button}
              onClick={handleClickG}
              sx={{
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src="/iconC7.png" alt="" />
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                Cryptowork: desbloqueando el potencial de las criptomonedas
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Exploración del impacto y las oportunidades que las...
              </Typography>
            </Box>
          </Box>
          <Box mt={"5%"} ml={"43%"}>
            <BlackButtom texto={"Consultanos"} linkTo={"/contacto"} />
          </Box>
          {componenteVisible === "ComponenteE" && (
            <Charlas5 handleCloseComponente={handleCloseComponente} />
          )}
          {componenteVisible === "ComponenteF" && (
            <Charlas6 handleCloseComponente={handleCloseComponente} />
          )}
          {componenteVisible === "ComponenteG" && (
            <Charlas7 handleCloseComponente={handleCloseComponente} />
          )}
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box width={"100%"}>
          <img
            style={{ objectFit: "cover" }}
            width={"100%"}
            height={"310vh"}
            src="/charlas1.png"
            alt=""
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            bgcolor: "#1296E9",
            p: "7%",
            mt: -1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Merriweather",
              fontSize: "20px",
              fontWeight: "300",
              color: "black",
              lineHeight: "30px",
            }}
          >
            Desde nuestra experiencia en startups, empresas, consultoría y
            transformación tecnológica, dictamos conferencias y capacitaciones
            para organizaciones, compañías e industrias.
          </Typography>
        </Box>

        <Box sx={{ bgcolor: "#18CC66", width: "100%" }}>
          <Box p={"7%"} margin={"auto"}>
            <Box textAlign={"center"} pt={"12%"}>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "100",
                  fontSize: "40px",
                  lineHeight: "36px",
                  color: "white",
                }}
              >
                Recursos Humanos
              </Typography>
            </Box>
          </Box>
          <Box textAlign={"center"} mt={"5%"} mb={"5%"}>
            <BlackButtom texto={"Consultanos"} linkTo={"/contacto"} />
          </Box>

          <Box p={"7%"} mt={"7%"}>
            <Box
              component={Button}
              onClick={handleClickA}
              sx={{
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
              }}
            >
              <img src="/iconC1.png" alt="" />
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                Amplifying impact:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Cómo la influencia puede ayudarte a motivar a tu equipo y tus
                clientes, y desencadenar una ola de creatividad en tu...{" "}
              </Typography>
            </Box>

            <Box
              component={Button}
              onClick={handleClickB}
              sx={{
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src="/iconC2.png" alt="" />
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                Date with myself: turismo interior{" "}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                La importancia del autoconocimiento para la estabilidad, el
                equilibrio y el desarrollo del potencial de cada...{" "}
              </Typography>
            </Box>
            <Box
              component={Button}
              onClick={handleClickC}
              sx={{
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src="/iconC3.png" alt="" />
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                Construyendo un legado: liderazgo transformador en tiempos de
                incertidumbre{" "}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Cómo guiar a tus equipos y cuidar los liderazgos...{" "}
              </Typography>
            </Box>
            <Box
              component={Button}
              onClick={handleClickD}
              sx={{
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src="/iconC4.png" alt="" />
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                Sinfonía: cómo armonizar distintas generaciones
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Diversidad, inclusión y empatía como aliadas para que las
                diferencias sean aprovechadas como oportunidades y se...{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        {componenteVisible === "ComponenteA" && (
          <Charlas1 handleCloseComponente={handleCloseComponente} />
        )}
        {componenteVisible === "ComponenteB" && (
          <Charlas2 handleCloseComponente={handleCloseComponente} />
        )}
        {componenteVisible === "ComponenteC" && (
          <Charlas3 handleCloseComponente={handleCloseComponente} />
        )}
        {componenteVisible === "ComponenteD" && (
          <Charlas4 handleCloseComponente={handleCloseComponente} />
        )}

        <Box sx={{ p: "7%" }} width={"100%"} bgcolor={"#1296E9"}>
          <Box textAlign={"center"}>
            <Typography
              p={"7%"}
              sx={{
                fontFamily: "Manrope",
                fontWeight: "100",
                fontSize: "40px",
                lineHeight: "36px",
                color: "white",
              }}
            >
              Tecnología
            </Typography>
            <Box mt={"5%"} textAlign={"center"}>
              <BlackButtom texto={"Consultanos"} linkTo={"/contacto"} />
            </Box>

            {/* texto que hay que pregunta si va */}
            {/*  <Typography
              m={"auto"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "32px",
                fontWeight: "300",
                color: "white",
              }}
            >
              Capacitaciones sobre estrategias de transformación digital e
              incorporación de Inteligencia Artificial y nuevas tecnologías,
              para convertirlas en un factor diferencial clave que generen un
              salto de crecimiento en tu negocio. 
            </Typography> */}
          </Box>
          <Box width={"100%"} mt={5}>
            <Box
              component={Button}
              onClick={handleClickE}
              sx={{
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src="/iconC5.png" alt="" />
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                HR 5.0: abrazando la revolución de las tendencias en RRHH
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Cómo incorporar nuevas tecnologías que sumen...
              </Typography>
            </Box>
            <Box
              component={Button}
              onClick={handleClickF}
              sx={{
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src="/iconC6.png" alt="" />
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                Game on: IA, gaming y metaverso redefiniendo el mercado laboral
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Herramientas para aprender cómo estas tres realidades...
              </Typography>
            </Box>
            <Box
              component={Button}
              onClick={handleClickG}
              sx={{
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src="/iconC7.png" alt="" />
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "black",
                  mt: 3,
                }}
              >
                Cryptowork: desbloqueando el potencial de las criptomonedas
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Exploración del impacto y las oportunidades que las...
              </Typography>
            </Box>
          </Box>

          {componenteVisible === "ComponenteE" && (
            <Charlas5 handleCloseComponente={handleCloseComponente} />
          )}
          {componenteVisible === "ComponenteF" && (
            <Charlas6 handleCloseComponente={handleCloseComponente} />
          )}
          {componenteVisible === "ComponenteG" && (
            <Charlas7 handleCloseComponente={handleCloseComponente} />
          )}
        </Box>
      </Hidden>
    </>
  );
};

export default CharlasYconferencias;
