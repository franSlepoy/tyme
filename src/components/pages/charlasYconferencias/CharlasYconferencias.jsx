import { Box, Button, Hidden, Typography } from "@mui/material";
import { CharlasData } from "../../../servidor/CharlasData";
import Carousel from "react-material-ui-carousel";
import TextoCard1 from "../../common/textoCard/TextoCard1";
import Formulario from "../../common/formulario/Formulario";
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
      <Hidden smDown>
        <Parallax speed={-12} tagOuter="figure">
          <Box
            width={"100%"}
            style={{
              backgroundImage: "linear-gradient(to left, #264185, #4D4747)",
            }}
          >
            <img src="/charlas1.png" alt="" />
          </Box>
        </Parallax>
        <Box>
          <Box sx={{ position: "absolute", top: "32%" }}>
            <img src="/nosotros4.png" alt="" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "28% ",
              left: "51%",
              width: "42%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "40px",
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
          sx={{ width: "100%", height: "147vh" }}
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

          <Box display={"flex"} width={"88%"} m={"auto"} mt={"82px"}>
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
            <img src="/charlasGente.png" alt="" />
          </Box>
        </Parallax>

        <Box
          width={"100%"}
          height={"120vh"}
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
          <Box display={"flex"} width={"100%"} ml={"10%"} mt={5}>
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
        <Typography
          sx={{
            width: "80%",
            textAlign: "center",
            color: "#003350",
            fontFamily: "Manrope",
            fontSize: "48px",
            fontWeight: "800",
            lineHeight: "normal",
            letterSpacing: "-2.32px",
            ml: 2,
            mt: "80px",
          }}
        >
          Charlas y Conferencias
        </Typography>
        <Box
          sx={{
            backgroundColor: "#F9F9F9",
            width: "100%",
            mt: 3,
            height: "!00%",
            position: "relative",
          }}
        >
          <Box p={1}>
            <Box
              sx={{
                borderRadius: "100px",
                width: "60px",
                height: "60px",
                mt: 2,
                ml: 2,
                backgroundColor: "#71EAEA",
              }}
            ></Box>
            <Box sx={{ mt: "-68px", width: "300px" }}>
              <Typography
                sx={{
                  width: "90%",
                  ml: 2,
                  color: "#003350",
                  fontFamily: "Manrope",
                  fontSize: "42px",
                  fontWeight: "800",
                  lineHeight: "normal",
                  letterSpacing: "-1.68px",
                }}
              >
                Lo que evoluciona es la humanidad y la tecnología acompaña
              </Typography>
              <br />
              <Typography
                sx={{
                  width: "90%",
                  ml: 2,
                  mt: 1,
                  color: "#003350",
                  fontFamily: "Manrope",
                  fontSize: "18px",
                  fontWeight: "300",
                  lineHeight: "28px",
                  letterSpacing: "-0.5px",
                }}
              >
                Apasionado de la inspiración, la alegría y el poder de
                transmitir experiencias y conocimientos, Javier Krawicki imparte
                charlas y conferencias en todo el mundo sobre las Personas y
                Tecnología, el maridaje perfecto.
              </Typography>
              <Typography
                sx={{
                  width: "90%",
                  ml: 2,
                  mt: 1,
                  color: "#003350",
                  fontFamily: "Manrope",
                  fontSize: "18px",
                  fontWeight: "300",
                  lineHeight: "28px",
                  letterSpacing: "-0.5px",
                }}
              >
                Contacta con nosotros si quieres contratar a Javier para tu
                próxima conferencia, team building, evento o curso.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 3, textAlign: "center" }}>
            <img width={"90%"} src="/curso.png" alt="" />
          </Box>
        </Box>

        <Typography
          sx={{
            ml: 2,
            mt: 3,
            color: "#A3B4BF",
            fontFamily: "Manrope",
            fontSize: "42px",
            fontWeight: "800",
            lineHeight: "normal",
            letterSpacing: "-1.68px",
          }}
        >
          ¿Cuáles son las temáticas de las charlas de Javier Krawicki?
        </Typography>
        <Typography
          sx={{
            ml: 2,
            color: "#A3B4BF",
            fontFamily: "Manrope",
            fontSize: "42px",
            fontWeight: "800",
            lineHeight: "normal",
            letterSpacing: "-1.68px",
          }}
        >
          Están divididas en dos dimensiones: foco en las personas y foco en la
          tecnología.
        </Typography>

        <Box sx={{ mt: 3 }}>
          <img width={"100%"} src="/focoEnPersonas1.png" alt="" />
        </Box>
        <Box sx={{ mt: "-5px" }}>
          <img width={"100%"} src="/focoEnHr1.png" alt="" />
        </Box>
        <Box
          sx={{
            width: "95%",
            mt: 5,
            ml: 1,
            borderRadius: "20px",
            color: "#003350",
          }}
        >
          <Carousel>
            {CharlasData.map((card) => (
              <TextoCard1
                key={card.id}
                titulo={card.titulo}
                texto={card.texto}
                textoOtro={card.textoOtro}
              />
            ))}
          </Carousel>
        </Box>

        <Box>
          <Box width={"90%"} sx={{ mt: 4, ml: 2 }}>
            <Box>
              <Box>
                <Typography
                  sx={{
                    width: "90%",
                    mt: 3,
                    fontFamily: "Manrope",
                    fontSize: "42px",
                    fontWeight: "800",
                    lineHeight: "normal",
                    letterSpacing: "1.68px",
                    color: "#A3B4BF",
                  }}
                >
                  ¿A qué tipo de público van dirigidas las conferencias
                  impartidas por Javier?
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  mt: 3,
                  fontFamily: "Manrope",
                  fontSize: "18px",
                  fontWeight: "300",
                  lineHeight: "28px",
                  letterSpacing: "0.5px",
                  color: "#003350",
                }}
              >
                Las conferencias van dirigidas a todo tipo de organización,
                tanto gubernamental, como no gubernamental, aplicando a todo el
                nivel de la organización en cualquier parte del mundo e
                indiferentemente de la industria.
              </Typography>
              <Typography
                sx={{
                  mt: 5,
                  mb: 3,
                  width: "100%",
                  fontFamily: "Manrope",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "28px",
                  letterSpacing: "0.5px",
                  color: "#003350",
                }}
              >
                Si quieres contratar alguna charla o hacernos alguna consulta:
              </Typography>
            </Box>
          </Box>

          <Box mt={-10}>
            <Formulario />
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default CharlasYconferencias;
