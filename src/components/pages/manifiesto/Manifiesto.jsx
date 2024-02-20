import { Box, Button, Hidden, Typography } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import BlackButtom from "../../common/blackButtom/BlackButtom";

const Manifiesto = () => {
  return (
    <>
      <Hidden smDown>
        <Parallax speed={-12} tagOuter="figure">
          <Box mt={1}>
            <img
              height={"744vh"}
              width={"102.6%"}
              src="/manifiesto1.png"
              alt=""
            />
          </Box>
        </Parallax>
        <Box>
          <Box sx={{ position: "absolute", top: "62%" }}>
            <img src="/manifiesto3.png" alt="" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "34% ",
              left: "56%",
              width: "42%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "42px",
                fontWeight: "300",
                color: "black",
              }}
            >
              En Tyme, sabemos que el tiempo es nuestro mejor aliado y por eso
              queremos acompañarte, equilibrando la vida personal y laboral de
              todos tus talentos.
            </Typography>
          </Box>
          <Box sx={{ position: "absolute", top: "92vh", left: "50%" }}>
            <img src="/flechaBajo.png" alt="" />
          </Box>
        </Box>

        <Box
          width={"100%"}
          height={"84vh"}
          sx={{ bgcolor: "rgba(15, 150, 233, 0.4)" }}
        >
          <Box display={"flex"} width={"87%"} m={"auto"}>
            <Box mt={"15%"} width={"52%"}>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  lineHeight: "34px",
                  fontWeight: "300",
                }}
              >
                Nuestro objetivo es generar conciencia sobre el{" "}
                <strong>valor del tiempo</strong> y reivindicar su{" "}
                <strong>importancia,</strong> ayudando a las empresas a ordenar
                su esfuerzo para que las{" "}
                <strong>
                  estrategias y metas para multiplicar el negocio se cumplan con
                  resultados concretos.
                </strong>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  lineHeight: "34px",
                  fontWeight: "300",
                }}
              >
                Nos proponemos <strong>ser un puente,</strong> evaluando los
                talentos y el potencial de cada organización, para crear planes
                que equilibren la energía y el tiempo de sus equipos, de modo
                que puedan mejorar su rendimiento, aumentar su productividad y
                atravesar una <strong>experiencia que valoren.</strong>
              </Typography>
            </Box>
            <Box mt={"14%"} ml={"12%"} width={"30%"}>
              <Typography
                sx={{
                  fontFamily: "Marriweather",
                  fontSize: "48px",
                  color: "black",
                  lineHeight:"52px"
                }}
              >
                ¿Nos hacemos un tiempo para conocernos y trabajar juntos?
              </Typography>
              <Box mt={"5%"}>
                <BlackButtom texto={"Contactanos"} linkTo={"/contacto"} />
              </Box>
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
          Manifiesto
        </Typography>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#F9F9F9",
            width: "100%",
            mt: "88px",
            height: "100%",
            position: "relative",
          }}
        >
          <Box m>
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
            <Box sx={{ mt: "-50px", width: "400px" }}>
              <Typography
                sx={{
                  position: "absolute",
                  width: "80%",
                  ml: 2,
                  color: "#003350",
                  fontFamily: "Manrope",
                  fontSize: "32px",
                  fontWeight: "800",
                  lineHeight: "normal",
                  letterSpacing: "-1.68px",
                }}
              >
                El tiempo es una palabra que paradójicamente toma valor cuando
                es escaso, pero ¿somos conscientes de esto?
              </Typography>
            </Box>
          </Box>

          <Box sx={{ ml: -57, mt: 41 }}>
            <img width={"100%"} src="/maniefiesto.png" alt="" />
          </Box>
        </Box>

        <Box mt={"87px"}>
          <Box width={"100%"}>
            <Typography
              sx={{
                pl: 1,
                fontFamily: "Manrope",
                fontSize: "26px",
                fontWeight: "400",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
              }}
            >
              Nuestra razón de ser
            </Typography>
            <Typography
              sx={{
                mt: 3,
                pl: 1,
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
              }}
            >
              Pareciera que estamos toda la vida combatiendo contra el tiempo, y
              siempre decimos que es el culpable. En la vida, no hay culpables,
              hay responsables. En realidad, es nuestro mejor aliado, nuestro
              mejor socio.{" "}
            </Typography>
            <Typography
              sx={{
                pl: 1,
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
              }}
            >
              {" "}
              … porque necesitamos tiempo para disfrutar, para aprender, para
              evolucionar, para emprender, para lograr una conexión real. Para
              despertar, abrir los ojos y descubrir nuestro verdadero sendero,
              nuestro trayecto, sea cual sea. Cada persona tiene su camino. Y el
              camino de uno no es el camino del otro.
            </Typography>
          </Box>
          <Box mt={3}>
            <img width={"100%"} src="/relojDeArena.png" alt="" />
          </Box>
        </Box>

        <Box mt={2}>
          <Box width={"100%"}>
            <Typography
              sx={{
                pl: 1,
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
              }}
            >
              Lo más curioso es que aún seguimos hablando del tiempo sin hacer
              algo al respecto, pensando que algo o alguien exterior nos
              ayudará. Cuando la respuesta está hacia adentro. Tener libertad
              del tiempo y qué hacer con él ¿nos asusta? Es una posibilidad,
              pero también la obligación de decidir qué hacemos con él.
            </Typography>
            <Box width={"100%"}>
              <Typography
                sx={{
                  pl: 1,
                  fontFamily: "Manrope",
                  fontSize: "18px",
                  fontWeight: "300",
                  lineHeight: "28px",
                  letterSpacing: "0.5px",
                  color: "#003350",
                }}
              >
                La gran pregunta es:
              </Typography>
              <Typography
                sx={{
                  pl: 1,
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: "3800",
                  lineHeight: "28px",
                  letterSpacing: "0.5px",
                  color: "#003350",
                }}
              >
                ¿Eres dueño de tu tiempo?.
              </Typography>
            </Box>
          </Box>

          <Box width={"100%"}>
            <Typography
              sx={{
                pl: 1,
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
              }}
            >
              Porque el tiempo hay que abrazarlo con ambas manos. Con toda tu
              energía, con entusiasmo y con mucha fuerza para que no se escape.
              Como uno de esos abrazos que nunca quisieras que terminen.{" "}
            </Typography>
            <Typography
              sx={{
                pl: 1,
                fontFamily: "Manrope",
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "28px",
                letterSpacing: "0.5px",
                color: "#003350",
              }}
            >
              {" "}
              Lo más importante no es el tiempo, sino lo que hacemos con él. Por
              ello, nuestra razón de ser es generar conciencia del tiempo,
              reivindicarlo para multiplicar la productividad de las personas.{" "}
            </Typography>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Manifiesto;
