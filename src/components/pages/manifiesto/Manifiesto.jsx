import { Box, Button, Hidden, Typography } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import BlackButtom from "../../common/blackButtom/BlackButtom";
import { Link as ScrollLink } from "react-scroll";


const Manifiesto = () => {
  return (
    <>
      <Hidden lgDown>
        <Parallax speed={-12} tagOuter="figure">
          <Box mt={2} width={"100%"} height={"100vh"} overflow="hidden" >
            <img width={"103%"}  src="/manifiesto1.png" alt="" />
          </Box>
        </Parallax>
        <Box>
          <Box sx={{ position: "absolute", top: "62%" }}>
            <img width={"10%"} src="/manifiesto3.png" alt="" />
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

         <ScrollLink to="seccionDestino" smooth={true}>
         <Button sx={{ position: "absolute", top: "92vh", left: "50%" }}>
            <img src="/flechaBajo.png" alt="" />
          </Button>
         </ScrollLink>
          
        </Box>

        <Box
            id="seccionDestino"
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
                  lineHeight: "52px",
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

      <Hidden lgUp smDown>
        <Box sx={{ bgcolor: "rgba(15, 150, 233, 0.1)" }} height={"107vh"}>
          <img width={"100%"} height={"710vh"} src="/manifiesto1.png" alt="" />
        </Box>

        <Box>
          <Box sx={{ position: "absolute", top: "62%" }}>
            <img width={"10%"} src="/manifiesto3.png" alt="" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "24% ",
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
          <Box sx={{ position: "absolute", top: "92vh", left: "50%" }}>
            <img src="/flechaBajo.png" alt="" />
          </Box>
        </Box>

        <Box
          width={"100%"}
          height={"144vh"}
          sx={{ bgcolor: "rgba(15, 150, 233, 0.4)" }}
        >
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
                <BlackButtom texto={"Contactanos"} linkTo={"/contacto"} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            width={"100%"}
            height={"300vh"}
            src="/manifiesto1.png"
            alt=""
          />
        </Box>

        <Box sx={{bgcolor: "#1296E9", mt:-1, pt:3, pb:3}}>
          <Box
            sx={{
              width: "93%",
              m:"auto",
             
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
              En Tyme, sabemos que el tiempo es nuestro mejor aliado y por eso
              queremos acompañarte, equilibrando la vida personal y laboral de
              todos tus talentos.
            </Typography>
          </Box>
         
        </Box>

        <Box
          width={"100%"}
          height={"174vh"}
          sx={{ bgcolor: "rgba(15, 150, 233, 0.4)",  }}
        >
          <Box   m={"auto"}>
          <Box width={"88%"} pt={5} m={"auto"}>
              <Typography
                sx={{
                  width:"66%",
                  textAlign:"center",
                  margin:"auto",
                  fontFamily: "Marriweather",
                  fontSize: "30px",
                  color: "black",
                  lineHeight: "52px",
                }}
              >
                ¿Nos hacemos un tiempo para conocernos y trabajar juntos?
              </Typography>
              <Box mt={"12%"} mb={"12%"} textAlign={"center"}>
                <BlackButtom texto={"Contactanos"} linkTo={"/contacto"} />
              </Box>
            </Box>
            <Box width={"93%"} m={"auto"} pt={"4%"} >
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
           
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Manifiesto;
