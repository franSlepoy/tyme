import { Box, Button, Hidden, Typography } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import BlackButtom from "../../common/blackButtom/BlackButtom";
import { Link as ScrollLink } from "react-scroll";

const Manifiesto = () => {
  return (
    <>
      <Hidden lgDown>
        <Parallax speed={-12} tagOuter="figure">
          <Box mt={2} width={"100%"} overflow="hidden">
            <img
              style={{ objectFit: "cover", height: "700px", width: "100%" }}
              src="/maniefiesto1.png"
              alt=""
            />
          </Box>
        </Parallax>
        <Box>
          <Box sx={{ position: "absolute", top: "300px" }}>
            <img width={"10%"} src="/manifiesto3.png" alt="" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "250px ",
              left: "45%",
              width: "52%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "36px",
                lineHeight: "44px",
                fontWeight: "400",
                color: "black",
                width: "90%",
              }}
            >
              En Tyme, sabemos que el tiempo es nuestro mejor aliado y por eso
              queremos acompañarte, equilibrando la vida personal y laboral de
              todos tus talentos.
            </Typography>
          </Box>

          <ScrollLink to="seccionDestino" smooth={true}>
            <Button sx={{ position: "absolute", top: "700px", left: "50%" }}>
              <img src="/flechaBajo.png" alt="" />
            </Button>
          </ScrollLink>
        </Box>

        <Box
          id="seccionDestino"
          width={"100%"}
          sx={{ bgcolor: "rgba(15, 150, 233, 0.4)", pt: "150px", pb: "150px" }}
        >
          <Box display={"flex"} width={"85.5%"} m={"auto"}>
            <Box width={"52%"}>
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
            <Box ml={"12%"} width={"30%"}>
              <Typography
                sx={{
                  fontFamily: "Merriweather",
                  fontSize: "42px",
                  color: "black",
                  lineHeight: "52px",
                }}
              >
                ¿Nos hacemos un tiempo para conocernos y trabajar juntos?
              </Typography>
              <Box mt={"15%"}>
                <BlackButtom texto={"Contáctanos"} linkTo={"/contacto"} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Hidden>

      <Hidden lgUp smDown>
        <Parallax speed={-6} tagOuter="figure">
          <Box mt={-3} width={"100%"} overflow="hidden">
            <img
              style={{ objectFit: "cover" }}
              width={"100%"}
              height={"700px"}
              src="/maniefiesto1.png"
              alt=""
            />
          </Box>
        </Parallax>

        <Box>
          <Box
            sx={{
              position: "absolute",
              top: "350px ",
              left: "56%",
              width: "42%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "32px",
                fontWeight: "300",
                color: "black",
              }}
            >
              En Tyme, sabemos que el tiempo es nuestro mejor aliado y por eso
              queremos acompañarte, equilibrando la vida personal y laboral de
              todos tus talentos.
            </Typography>
          </Box>
        </Box>

        <Box pt={5} width={"100%"} sx={{ bgcolor: "rgba(15, 150, 233, 0.4)" }}>
          <Box display={"flex"} width={"87%"} m={"auto"}>
            <Box mt={"5%"} width={"52%"} pb={"5%"}>
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
            <Box mt={"5%"} ml={"12%"} width={"30%"} pb={"5%"}>
              <Typography
                sx={{
                  fontFamily: "Marriweather",
                  fontSize: "48px",
                  color: "black",
                  lineHeight: "52px",
                }}
              >
                ¿Nos hacemos un tiempo para conocernos y trabajar juntos?
              </Typography>
              <Box mt={"5%"}>
                <BlackButtom texto={"Contáctanos"} linkTo={"/contacto"} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box>
          <img width={"100%"} src="/mobileManifiesto.png" alt="" />
        </Box>

        <Box sx={{ bgcolor: "#1296E9", mt: -1, pt: 5, pb: 5 }}>
          <Box
            sx={{
              width: "80%",
              m: "auto",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "20px",
                fontWeight: "300",
                color: "white",
              }}
            >
              En Tyme, creemos que el tiempo es la mejor inversión, y que lo más
              importante es lo que hacemos con él. Muchas veces, en nuestra
              experiencia acompañando organizaciones, detectamos que sus dueños,
              líderes y CEOs no se toman un tiempo para reflexionar y disfrutar
              lo que han generado.
            </Typography>
          </Box>
        </Box>

        <Box
          width={"100%"}
          sx={{ pb: "10%", bgcolor: "rgba(15, 150, 233, 0.4)" }}
        >
          <Box m={"auto"}>
            <Box width={"88%"} m={"auto"} pt={"10%"}>
              <Typography
                sx={{
                  width: "76%",
                  textAlign: "center",
                  margin: "auto",
                  fontFamily: "Merriweather",
                  fontSize: "30px",
                  color: "black",
                  lineHeight: "32px",
                }}
              >
                ¿Nos hacemos un tiempo para conocernos y trabajar juntos?
              </Typography>
              <Box mt={"12%"} mb={"12%"} textAlign={"center"}>
                <BlackButtom texto={"Contáctanos"} linkTo={"/contacto"} />
              </Box>
            </Box>
            <Box width={"80%"} m={"auto"} pt={"4%"}>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
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
                  fontSize: "20px",
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
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Manifiesto;
