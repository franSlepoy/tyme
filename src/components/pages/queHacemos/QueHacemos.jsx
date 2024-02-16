import { Box, Button, Hidden, Typography } from "@mui/material";

import Carousel from "react-material-ui-carousel";
import { QueHacemosData } from "../../../servidor/QueHacemosTexto";
import TextoCard from "../../common/textoCard/TextoCard";
import BasicAccordion2 from "../../common/basicAccordion/BasicAccordion2";
import { CarouselTextoLogoData } from "../../../servidor/CarouselTextoLogoData";
import TextoLogoCard from "../../common/textoLogoCard/TextoLogoCard";
import BasicAccordion3 from "../../common/basicAccordion/BasicAccordion3";
import { CarouselTextoLogoData1 } from "../../../servidor/CarouselTextoLogoData1";
import BasicAccordion4 from "../../common/basicAccordion/BasicAccordion4";
import { Link, NavLink } from "react-router-dom";
import { WazeLaboralData } from "../../../servidor/WazeLaboral";
import { Parallax } from "react-scroll-parallax";
import GreenButtom from "../../common/greenButtom/GreenButtom";
import BlackButtom from "../../common/blackButtom/BlackButtom";

const QueHacemos = () => {
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
                <Box
                  display={"flex"}
                  mt={"16%"}
                  component={NavLink}
                  to={"/eDyP"}
                  sx={{ textDecoration: "none" }}
                >
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
                      color: "black",
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
                <Box
                  display={"flex"}
                  mt={"8%"}
                  component={NavLink}
                  to={"/cultura"}
                  sx={{ textDecoration: "none" }}
                >
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
                      color: "black",
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
                <Box
                  display={"flex"}
                  mt={"8%"}
                  component={NavLink}
                  to={"/waze"}
                  sx={{ textDecoration: "none" }}
                >
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
                      color: "black",
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
                <Box
                  display={"flex"}
                  mt={"8%"}
                  component={NavLink}
                  to={"/acompañamiento"}
                  sx={{ textDecoration: "none" }}
                >
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
                      color: "black",
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
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Box
                  display={"flex"}
                  mt={"22%"}
                  component={NavLink}
                  to={"/mentoring"}
                  sx={{ textDecoration: "none" }}
                >
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
                      color: "black",
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
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Box
                  display={"flex"}
                  mt={"8%"}
                  component={NavLink}
                  to={"/tYe"}
                  sx={{ textDecoration: "none" }}
                >
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
                      color: "black",
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
        <Box>
          <Typography
            sx={{
              width: "90%",
              color: "#003350",
              fontFamily: "Manrope",
              m: "auto",
              fontSize: "58px",
              fontWeight: "800",
              lineHeight: "normal",
              letterSpacing: "-2.32px",
              mt: "80px",
            }}
          >
            ¿Qué hacemos?
          </Typography>

          <Box
            sx={{
              backgroundColor: "#F9F9F9",
              width: "100%",
              mt: "88px",
              height: "100%",
              position: "relative",
            }}
          >
            <Box>
              <Box
                sx={{
                  borderRadius: "100px",
                  width: "90px",
                  height: "90px",
                  mt: 4,
                  backgroundColor: "#71EAEA",
                }}
              ></Box>
              <Box sx={{ mt: "-78px", width: "90%" }}>
                <Typography
                  sx={{
                    position: "absolute",
                    width: "90%",
                    ml: 2,
                    color: "#003350",
                    fontFamily: "Manrope",
                    fontSize: "28px",
                    fontWeight: "800",
                    lineHeight: "normal",
                    letterSpacing: "-1.68px",
                  }}
                >
                  Lo primero que hacemos es el cambio centrado en las personas,
                  de verdad.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 19 }}>
              <img width={"100%"} src="/queHacemosImagen.png" alt="" />
            </Box>
          </Box>

          <Box sx={{ ml: 5, mt: "16px" }}>
            <Typography
              sx={{
                width: "90%",
                mt: 10,
                fontFamily: "Manrope",
                fontSize: "42px",
                fontWeight: "800",
                lineHeight: "normal",
                letterSpacing: "-1.68px",
                color: "#003350",
              }}
            >
              Nuestros servicios
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundImage: `url("/queHacemosRectangle69.png")`, // Usamos la URL de la imagen importada
              backgroundSize: "cover", // Para que la imagen cubra todo el fondo
              width: "100%", // Para que ocupe el 100% del ancho
              mt: "48px",
              height: "100%",
              p: 3,
              mb: 3,
            }}
          >
            <Box p={1}>
              <Typography
                sx={{
                  fontFamily: "Merriweather",
                  fontSize: "36px",
                  fontWeight: "700",
                  color: "#003350",
                }}
              >
                HR On Demand
              </Typography>
              <Box display={"flex"} mt={"22px"}>
                <img src="/hrLogo1.png" alt="" />
                <Typography
                  sx={{
                    ml: "10px",
                    fontFamily: "Manrope",
                    fontSize: "12px",
                    fontWeight: "800",
                    letterSpacing: "0.5px",
                    color: "#003350",
                  }}
                >
                  Radiografía Transformadora de organizaciones: Evaluación y
                  Diagnóstico
                </Typography>
              </Box>
              <Box display={"flex"} mt={"22px"}>
                <img src="/hrLogo2.png" alt="" />
                <Typography
                  sx={{
                    width: "90%",
                    ml: "10px",
                    fontFamily: "Manrope",
                    fontSize: "12px",
                    fontWeight: "800",
                    letterSpacing: "0.5px",
                    color: "#003350",
                  }}
                >
                  Conexión real con la Experiencia del empleado
                </Typography>
              </Box>
              <Box display={"flex"} mt={"22px"}>
                <img src="/hrLogo3.png" alt="" />
                <Typography
                  sx={{
                    width: "378px",
                    ml: "10px",
                    fontFamily: "Manrope",
                    fontSize: "12px",
                    fontWeight: "800",
                    letterSpacing: "0.5px",
                    color: "#003350",
                  }}
                >
                  Waze laboral
                </Typography>
              </Box>
              <Box display={"flex"} mt={"22px"}>
                <img src="/hrLogo4.png" alt="" />
                <Typography
                  sx={{
                    ml: "10px",
                    fontFamily: "Manrope",
                    fontSize: "12px",
                    fontWeight: "800",
                    letterSpacing: "0.5px",
                    color: "#003350",
                  }}
                >
                  Certificaciones: los primeros pasos
                </Typography>
              </Box>
            </Box>

            <Box mt={"22px"} ml={2}>
              <Typography
                sx={{
                  fontFamily: "Merriweather",
                  fontSize: "36px",
                  fontWeight: "700",
                  color: "#003350",
                }}
              >
                HR Tech Trends
              </Typography>
              <Box display={"flex"} mt={"22px"}>
                <img src="/hrLogo5.png" alt="" />
                <Typography
                  sx={{
                    width: "378px",
                    ml: "10px",
                    fontFamily: "Manrope",
                    fontSize: "12px",
                    fontWeight: "800",
                    letterSpacing: "0.5px",
                    color: "#003350",
                  }}
                >
                  Mentoring personalizado
                </Typography>
              </Box>
              <Box display={"flex"} mt={"22px"}>
                <img src="/hrLogo6.png" alt="" />
                <Typography
                  sx={{
                    width: "378px",
                    ml: "10px",
                    fontFamily: "Manrope",
                    fontSize: "12px",
                    fontWeight: "800",
                    letterSpacing: "0.5px",
                    color: "#003350",
                  }}
                >
                  Training y educación en tecnología para RRHH
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: "100%", height: "230px", bgcolor: "#003350" }}>
            <Typography
              sx={{
                pt: "92px",
                textAlign: "center",
                color: "#F9F9F9",
                fontFamily: "Merriweather",
                fontSize: "36px",
                fontWeight: "700",
              }}
            >
              HR On Demand
            </Typography>
          </Box>

          <Box display={"flex"} mt={"42px"} sx={{ ml: 3 }}>
            <img src="/hrLogo1.png" alt="" />
            <Typography
              sx={{
                textDecoration: "underline",
                ml: "10px",
                width: "100%",
                fontFamily: "Manrope",
                fontSize: "14px",
                color: "#003350",
              }}
            >
              Radiografía Transformadora de organizaciones: Evaluación y
              Diagnóstico
            </Typography>
          </Box>

          <Typography
            sx={{
              mt: "39px",
              width: "100%",
              fontFamily: "Manrope",
              fontSize: "18px",
              fontWeight: "300",
              lineHeight: "28px",
              letterSpacing: "0.5px",
              color: "#003350",
            }}
          >
            Con un método propio de evaluación e implementando tecnología al
            proceso, tal como gamificación, web3, IA, etc, evaluamos a las
            organizaciones haciendo una perfecta combinación. Personas y
            tecnologías, el maridaje perfecto.
          </Typography>
          <Typography
            sx={{
              mt: "39px",
              width: "100%",
              fontFamily: "Manrope",
              fontSize: "18px",
              fontWeight: "300",
              lineHeight: "28px",
              letterSpacing: "0.5px",
              color: "#003350",
            }}
          >
            Nuestro equipo de expertos en Gestión del Talento se compromete a
            trabajar junto a ti para garantizar que tus empleados alcancen su
            máximo potencial y que tu empresa florezca en un ambiente laboral
            enriquecedor y productivo, alcanzando los objetivos de negocio
            buscado.
          </Typography>
          <Typography
            sx={{
              mt: "39px",
              width: "100%",
              fontFamily: "Manrope",
              fontSize: "18px",
              fontWeight: "300",
              lineHeight: "28px",
              letterSpacing: "0.5px",
              color: "#003350",
            }}
          >
            En Tyme tenemos un equipo muy talentoso con grandes capacidades de
            diagnóstico gracias a:
          </Typography>

          <Box sx={{ mt: "28px" }}>
            <Box>
              <img width={"100%"} src="/gente.png" alt="" />
            </Box>

            <Box
              sx={{
                mt: 3,
                width: "90%",
                ml: 2,
                border: "solid  1px",
                borderRadius: "20px",
                color: "#003350",
              }}
            >
              <Carousel height={"500px"}>
                {QueHacemosData.map((card) => (
                  <TextoCard
                    key={card.id}
                    titulo={card.titulo}
                    texto={card.texto}
                  />
                ))}
              </Carousel>
            </Box>
          </Box>
          <Typography
            sx={{
              mt: "56px",
              fontFamily: "Merriweather",
              fontSize: "36px",
              fontWeight: "400",
              color: "#003350",
            }}
          >
            Nuestra forma de trabajo:
          </Typography>

          <Box mt={"30px"}>
            <Box mr={8}>
              <img width={"340px"} src="/steps1.png" alt="" />
            </Box>
            <BasicAccordion2 />
          </Box>

          <Box sx={{ mt: 4, width: "100%", bgcolor: "#F9F9F9" }}>
            <Box display={"flex"}>
              <Box sx={{ mt: "80px", ml: 2 }}>
                <img src="/hrLogo2.png" alt="" />
              </Box>
              <Typography
                sx={{
                  textDecoration: "underline",
                  ml: 2,
                  mt: 10,
                  width: "100%",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#003350",
                }}
              >
                Conexión real con la Experiencia del empleado
              </Typography>
            </Box>

            <Typography
              sx={{
                mt: 1,
                ml: 2,
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
              }}
            >
              Hoy no podemos concebir un ciclo de vida del empleado sin foco en
              la EXPERIENCIA.
            </Typography>
            <Typography
              sx={{
                mt: 1,
                ml: 2,
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
                mr: "50px",
              }}
            >
              Por eso, en Tyme, entendemos que{" "}
              <strong style={{ fontWeight: "800" }}>
                el corazón de cada organización está en sus personas.
              </strong>{" "}
              Nos focalizamos en crear y nutrir una experiencia del empleado
              excepcional desde el primer día hasta el último, trabajando en
              todas o en algunas de las etapas.
            </Typography>
            <Typography
              sx={{
                mt: 1,
                ml: 2,
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
              }}
            >
              Nuestro enfoque integral abarca el{" "}
              <strong>desarrollo de la cultura organizacional,</strong>
              fortaleciendo la{" "}
              <strong style={{ fontWeight: "800" }}>
                marca empleadora, trabajando fuertemente con los Líderes/ Jefes,
              </strong>{" "}
              y propiciando un ambiente laboral en el que cada individuo se
              sienta valorado, escuchado y así lograr su potencial.
            </Typography>
            <Typography
              sx={{
                mt: 1,
                ml: 2,
                fontFamily: "Manrope",
                fontSize: "18px",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
              }}
            >
              Un empleado con una buena experiencia dentro del ciclo de vida en
              la organización evita:
            </Typography>

            <Box sx={{ mt: 4, ml: "-25px" }}>
              <Box
                sx={{
                  bgcolor: "#FFF",
                  width: "90%",
                  ml: "8%",
                  border: "solid  1px",
                  borderRadius: "20px",
                  color: "#003350",
                }}
              >
                <Carousel height={"500px"}>
                  {CarouselTextoLogoData.map((card) => (
                    <TextoLogoCard
                      key={card.id}
                      titulo={card.titulo}
                      texto={card.texto}
                      logo={card.logo}
                    />
                  ))}
                </Carousel>
              </Box>
              <Box></Box>
            </Box>

            <Typography
              sx={{
                ml: 2,
                mt: "56px",
                fontFamily: "Merriweather",
                fontSize: "36px",
                fontWeight: "400",
                color: "#003350",
              }}
            >
              Cuál es la solución que proponemos en Tyme
            </Typography>

            <Box mt={3}>
              <Box>
                <img width={"100%"} src="/reunion.png" alt="" />
              </Box>
              <BasicAccordion3 />
            </Box>

            <Box width={"90%"}>
              <Typography
                sx={{
                  ml: 2,
                  mt: 4,
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  fontWeight: "300",
                  lineHeight: "34px",
                  letterSpacing: "0.5px",
                  color: "#003350",
                }}
              >
                Resultados transformadores: nuestro enfoque centrado en las
                personas y la experiencia del empleado ha demostrado generar
                resultados cuanti y cualitativos en organizaciones de diversas
                industrias.
              </Typography>
              <Typography
                sx={{
                  textDecoration: "underline",
                  ml: 2,
                  mt: 4,
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "34px",
                  letterSpacing: "0.5px",
                  color: "#003350",
                }}
              >
                Confía en nosotros para llevar a tu empresa al siguiente nivel.
              </Typography>
            </Box>
          </Box>
          {/*  <Box sx={{mt:5}}>
            <img width={"105%"} src="/firuleteQueHacemos.png" alt="" />
        </Box>  */}

          <Box mt={4}>
            <Box
              sx={{
                width: "100%",
                fontFamily: "Manrope",
                fontSize: "20px",
                fontWeight: "400",
                color: "#003350",
              }}
            >
              <Box>
                <Box sx={{ ml: 3 }}>
                  <img src="/hrLogo3.png" alt="" />
                </Box>
                <Typography
                  sx={{
                    textDecoration: "underline",
                    mt: -5,
                    textDecoration: "underline",
                    ml: 14,
                    width: "90%",
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: "400",
                    color: "#003350",
                  }}
                >
                  Waze laboral
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box mt={3}>
            <Typography
              sx={{
                mt: "37px",
                ml: 3,
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
              }}
            >
              ¿Estás buscando una solución innovadora para potenciar y
              desarrollo el talento de tu empresa en un mundo laboral en
              constante cambio?{" "}
            </Typography>
            <Typography
              sx={{
                mt: 2,
                ml: 3,
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
                mr: "50px",
              }}
            >
              Con nuestro servicio de Waze Laboral, y a través de nuestra propia
              metodología, te ofrecemos un servicio de vanguardia para diseñar
              planes de reskilling y upskilling a medida, permitiendo que tus
              empleados se adapten y prosperen en la nueva era del trabajo. En
              un entorno empresarial que evoluciona rápidamente.
            </Typography>
            <Typography
              sx={{
                mt: 2,
                ml: 3,
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
              }}
            >
              En Tyme entendemos que el reskilling y upskilling son
              fundamentales para impulsar el crecimiento, competitividad y
              sostenibilidad del negocio. Trabajamos en la transformación de los
              puestos de trabajo y en las personas.
            </Typography>
            <Typography
              sx={{
                mt: 2,
                ml: 3,
                fontFamily: "Manrope",
                fontSize: "18px",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
              }}
            >
              Nuestra propuesta es:
            </Typography>
          </Box>

          <Box mt={2}>
            <Box
              sx={{ bgcolor: "#FFF5C7", borderRadius: "20px", height: "640px" }}
            >
              <img width={"100%"} src="/professional.png" alt="" />
              <Box width={"90%"}>
                <Typography
                  sx={{
                    ml: "34px",
                    mt: "34px",
                    mb: 2,
                    fontFamily: "Manrope",
                    fontSize: "18px",
                    fontWeight: "800",
                    lineHeight: "28px",
                    letterSpacing: "0.5px",
                    color: "#003350",
                  }}
                >
                  Personalización Integral:
                </Typography>
                <Typography
                  sx={{
                    ml: "34px",
                    mb: "38px",
                    fontFamily: "Manrope",
                    fontSize: "18px",
                    fontWeight: "300",
                    lineHeight: "28px",
                    letterSpacing: "0.5px",
                    color: "#003350",
                  }}
                >
                  {" "}
                  Cada empresa es única, y en Tyme creemos en la
                  personalización. Nuestros expertos y nuestra tecnología
                  analizará las necesidades específicas de tu organización y
                  diseñarán planes de reskilling y upskilling que se adapten
                  perfectamente a tu cultura empresarial y objetivos
                  estratégicos.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 2, bgcolor: "#FFF5C7", borderRadius: "20px" }}>
              <img width={"100%"} src="/professional1.png" alt="" />
              <Box width={"90%"}>
                <Typography
                  sx={{
                    ml: 3,
                    mt: "34px",
                    mb: 2,
                    fontFamily: "Manrope",
                    fontSize: "18px",
                    fontWeight: "800",
                    lineHeight: "28px",
                    letterSpacing: "0.5px",
                    color: "#003350",
                  }}
                >
                  Enfoque basado en el Presente y Futuro:
                </Typography>
                <Typography
                  sx={{
                    ml: 3,
                    mb: "34px",
                    fontFamily: "Manrope",
                    fontSize: "18px",
                    fontWeight: "300",
                    lineHeight: "28px",
                    letterSpacing: "0.5px",
                    color: "#003350",
                  }}
                >
                  Nuestro enfoque está centrado en las habilidades y
                  competencias necesarias para prosperar en el futuro. Partimos
                  de la foto actual y hacia donde vuestra organización quiere ir
                  y creamos el camino. Nos aseguramos de que tus empleados estén
                  equipados con las capacidades más relevantes y demandadas en
                  el mercado laboral, preparándolos para los desafíos venideros.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Typography
            sx={{
              ml: 0,
              mt: 2,
              width: "100%",
              fontFamily: "Manrope",
              fontSize: "36px",
              fontWeight: "400",
              color: "#003350",
            }}
          >
            ¿Cómo funciona nuestro servicio de Waze Laboral?
          </Typography>

          <Box>
            <Box
              sx={{
                mt: 3,
                bgcolor: "#FFF",
                width: "100%",
                border: "solid  1px",
                borderColor: "aqua",
                borderRadius: "20px",
                color: "#003350",
              }}
            >
              <Carousel height={"400px"}>
                {WazeLaboralData.map((card) => (
                  <TextoLogoCard
                    key={card.id}
                    titulo={card.titulo}
                    texto={card.texto}
                  />
                ))}
              </Carousel>
              <Box
                sx={{ bgcolor: "#FFF", width: "45%", color: "#003350" }}
              ></Box>
            </Box>
            <Box mt={5}>
              <img width={"100%"} src="/femaleWorking.png" alt="" />
            </Box>
          </Box>

          <Box sx={{ mt: 4, height: "100%", bgcolor: "#F9F9F9" }}>
            <Box display={"flex"}>
              <Box sx={{ mt: 4, ml: 2 }}>
                <img src="/hrLogo4.png" alt="" />
              </Box>
              <Typography
                sx={{
                  textDecoration: "underline",
                  ml: 3,
                  mt: 2,
                  width: "100%",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#003350",
                }}
              >
                Te acompañamos en tus primeros pasos hacia una certificación
              </Typography>
            </Box>

            <Typography
              sx={{
                mt: 4,
                ml: 2,
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
              }}
            >
              Nuestro equipo interdisciplinario comprende las complejidades de
              cualquier tipo de certificación y sabe cómo preparar a tu empresa
              para alcanzar los requisitos necesarios. Tenemos una metodología
              propia, y por ellos ofrecemos un servicio personalizado y enfocado
              en tus necesidades específicas, guiándote desde la fase inicial
              hasta la obtención exitosa de la certificación.
            </Typography>
            <Typography
              sx={{
                mt: 2,
                ml: 2,
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
                mr: "50px",
              }}
            >
              Estamos comprometidos con tu éxito. Trabajaremos incansablemente
              para asegurarnos de que tu empresa esté lista para la
              certificación.
            </Typography>
            <Typography
              sx={{
                mt: 2,
                ml: 2,
                mr: "58px",
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
              }}
            >
              No te enfrentes solo al proceso de certificación. Permítenos ser
              tu socio en este viaje. En Tyme, estamos listos para ayudarte a
              dar tus primeros pasos, asegurando que tu empresa se destaque por
              su excelencia.
            </Typography>

            <Typography
              sx={{
                ml: 2,
                mt: 4,
                width: "90%",
                fontFamily: "Manrope",
                fontSize: "20px",
                fontWeight: "400",
                color: "#003350",
              }}
            >
              Importancia de cualquier tipo de certificación
            </Typography>
          </Box>
          <Box
            sx={{
              mb: 2,
              bgcolor: "#E3FBEB",
              width: "90%",
              ml: 2,
              mt: 2,
              border: "solid  1px",
              borderRadius: "20px",
              color: "#003350",
            }}
          >
            <Carousel height={"520px"}>
              {CarouselTextoLogoData1.map((card) => (
                <TextoLogoCard
                  key={card.id}
                  titulo={card.titulo}
                  texto={card.texto}
                  logo={card.logo}
                />
              ))}
            </Carousel>
          </Box>

          <Box sx={{ width: "100%", height: "230px", bgcolor: "#003350" }}>
            <Typography
              sx={{
                pt: "92px",
                ml: 3,
                color: "#F9F9F9",
                fontFamily: "Merriweather",
                fontSize: "36px",
                fontWeight: "700",
              }}
            >
              HR Tech Trends
            </Typography>
          </Box>

          <Box display={"flex"}>
            <Box
              sx={{
                width: "90%",
                fontFamily: "Manrope",
                fontSize: "20px",
                fontWeight: "400",
                color: "#003350",
              }}
            >
              {" "}
              <Box display={"flex"}>
                <Box sx={{ mt: "80px", ml: 3 }}>
                  <img src="/hrLogo5.png" alt="" />
                </Box>
                <Typography
                  sx={{
                    textDecoration: "underline",
                    ml: 5,
                    mt: 9,
                    width: "100%",
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: "400",
                    color: "#003350",
                  }}
                >
                  Mentoring personalizado: Abrazando e integrando la
                  Transformación Digital en Recursos Humanos.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box mt={3}>
            <Box>
              <img width={"100%"} src="/futurista.png" alt="" />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "18px",
                  fontWeight: "300",
                  lineHeight: "28px",
                  letterSpacing: "0.5px",
                  color: "#003350",
                }}
              >
                Nuestro servicio de mentoring es una oportunidad para Líderes y
                profesionales del área de Recursos Humanos que desean abrazar la
                transformación digital y mantenerse a la vanguardia en el ámbito
                de la tecnología aplicada a la gestión del talento. Nos
                enfocamos en escucharte, acompañarte, asesorarte, proporcionarte
                conocimiento y experiencias, e implementar nuevas herramientas.
                También te facilitaremos las mejores prácticas para aprovechar
                al máximo las últimas tendencias, impulsando la eficiencia, la
                productividad y mejorando la experiencia de tus empleados en la
                organización.
              </Typography>
            </Box>
          </Box>

          <Box mt={2}>
            <Box>
              <img width={"100%"} src="/futurista1.png" alt="" />
            </Box>
            <Box>
              <Typography
                sx={{
                  mt: 2,
                  fontFamily: "Manrope",
                  fontSize: "18px",
                  fontWeight: "300",
                  lineHeight: "28px",
                  letterSpacing: "0.5px",
                  color: "#003350",
                }}
              >
                Nuestro servicio de mentoring es una oportunidad para Líderes y
                profesionales del área de Recursos Humanos que desean abrazar la
                transformación digital y mantenerse a la vanguardia en el ámbito
                de la tecnología aplicada a la gestión del talento. Nos
                enfocamos en escucharte, acompañarte, asesorarte, proporcionarte
                conocimiento y experiencias, e implementar nuevas herramientas.
                También te facilitaremos las mejores prácticas para aprovechar
                al máximo las últimas tendencias, impulsando la eficiencia, la
                productividad y mejorando la experiencia de tus empleados en la
                organización.
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              mt: 4,
              width: "1011px",
              fontFamily: "Manrope",
              fontSize: "36px",
              fontWeight: "400",
              color: "#003350",
            }}
          >
            Nuestro Enfoque
          </Typography>
          <Typography
            sx={{
              mt: 4,
              fontFamily: "Manrope",
              fontSize: "18px",
              fontWeight: "300",
              lineHeight: "28px",
              letterSpacing: "0.5px",
              color: "#003350",
            }}
          >
            Nuestro servicio de mentoring es una oportunidad para Líderes y
            profesionales del área de Recursos Humanos que desean abrazar la
            transformación digital y mantenerse a la vanguardia en el ámbito de
            la tecnología aplicada a la gestión del talento. Nos enfocamos en
            escucharte, acompañarte, asesorarte, proporcionarte conocimiento y
            experiencias, e implementar nuevas herramientas. También te
            facilitaremos las mejores prácticas para aprovechar al máximo las
            últimas tendencias, impulsando la eficiencia, la productividad y
            mejorando la experiencia de tus empleados en la organización.
          </Typography>

          <Typography
            sx={{
              mt: 4,
              width: "100%",
              fontFamily: "Manrope",
              fontSize: "36px",
              fontWeight: "400",
              color: "#003350",
            }}
          >
            ¿Qué incluye nuestro servicio de Mentoring?
          </Typography>

          <Box mt={"30px"}>
            <BasicAccordion4 />
            <Box mt={3}>
              <img width={"100%"} src="/groupFreelancer.png" alt="" />
            </Box>
          </Box>

          <Box sx={{ width: "460px", mt: 3, ml: -6 }}>
            <img width={"100%"} src="/beneficiosDeIntegrar.png" alt="" />
          </Box>

          <Box sx={{ mt: 3 }}>
            <Box>
              <img width={"100%"} src="/realidadVirtual.png" alt="" />
            </Box>

            <Box
              bgcolor={"#FFF5C7"}
              sx={{ width: "100%", borderRadius: "20px" }}
            >
              <Box ml={2} mt={2} p={2}>
                <img src="/horario.png" alt="" />
                <Typography
                  sx={{
                    fontFamily: "Merriweather",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: " #003350",
                  }}
                >
                  Training y educación en tecnología para RRHH
                </Typography>
                <Box maxWidth={"300px"}>
                  <Button
                    component={NavLink}
                    to={"/charlasYconferencias"}
                    variant="contained"
                    sx={{
                      mt: "31px",
                      padding: "10px 24px",
                      width: "90%",
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
                    Charlas y Conferencias
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            width={"100%"}
            sx={{
              borderRadius: "20px",
              borderColor: "black",
              border: "solid 1px",
              mt: 4,
            }}
          >
            <Box>
              <Typography
                sx={{
                  m: "auto",
                  mt: 8,
                  width: "60%",
                  fontSize: "14px",
                  fontWeight: "300",
                  lineHeight: "34px",
                }}
              >
                Con nuestros servicios te ayudamos a liberar un nuevo orden que
                asegure la continuidad y expansión de la empresa, asegurando que
                el cambio se desarrolle en el día a día para que los procesos y
                la empresa sigan en marcha.
              </Typography>
            </Box>
            <Box sx={{ ml: 10, mb: 8 }}>
              <Link to={"/contacto"} style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    mt: "31px",
                    padding: "10px 24px",
                    width: "70%",
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
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default QueHacemos;
