import {
  Box,
  Button,
  Hidden,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

import { Parallax } from "react-scroll-parallax";
import BlackButtom from "../../common/blackButtom/BlackButtom";
import { Link as ScrollLink } from "react-scroll";
import { ArticulosData } from "../../../servidor/ArticulosData";
import ArticuloCard from "../../common/articulosCard/ArticulosCard";

const Tendencias = () => {
  return (
    <>
      <Hidden lgDown>
        <Parallax speed={-12} tagOuter="figure">
          <Box mt={1}>
            <img
              style={{ objectFit: "cover", height: "700px", width: "100%" }}
              src="/tendencias1.png"
              alt=""
            />
          </Box>
        </Parallax>
        <Box>
          <Box
            sx={{
              position: "absolute",
              top: "400px ",
              left: "7%",
              width: "56%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "25px",
                fontWeight: "100",
                color: "white",
              }}
            >
               “El aprendizaje solo cobra verdadero valor cuando se comparte con
              otros, ya que, al hacerlo, se enriquece el entorno y se potencia
              el crecimiento colectivo. Compartir el conocimiento fomenta la
              colaboración, el aprendizaje continuo y el desarrollo de
              soluciones más innovadoras y efectivas”.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "25px",
                fontWeight: "300",
                color: "white",
                mt: 2,
              }}
            >
              <strong>Peter Senge,</strong> experto en desarrollo organizacional
            </Typography>
          </Box>

          <ScrollLink to="seccionDestino" smooth={true}>
            <Button sx={{ position: "absolute", top: "700px", left: "50%" }}>
              <img src="/flechaVerde.png" alt="" />
            </Button>
          </ScrollLink>
        </Box>

        <Box width={"100%"} pt={"200px"} pb={"50px"} id="seccionDestino">
          <Typography
            sx={{
              fontFamily: "Merriweather",
              fontSize: "32px",
              fontWeight: "300",
              color: "#07659C",
              width: "88%",
              margin: "auto",
              lineHeight: "40px",
              ml: "7%",
            }}
          >
            En Tyme, nos parece clave invertir tiempo en nuevos aprendizajes y
            conocimientos para darles a nuestros clientes una actualización
            constante en innovación, nuevas metodologías, casos de éxito y
            tendencias. Acá, compartimos algunos de esos aportes.
          </Typography>
          <Box width={"86%"} m={"auto"} mt={"3%"} mb={"3%"}>
            <BlackButtom texto={"Contáctanos"} linkTo={"/contacto"} />
          </Box>
          <Box position={"absolute"} top={"1000px"}>
            <img width={"100%"} src="/tendencias2.png" alt="" />
          </Box>
        </Box>

        <Box width={"100%"} bgcolor={"#A0D5F6"}>
          <Box width={"88%"} m={"auto"} pt={"6%"} pb={"10%"}>
            <Typography
              sx={{
                color: "black",
                fontFamily: "Manrope",
                fontSize: "50px",
                fontWeight: "300",
                ml: 1,
              }}
            >
              Artículos propios
            </Typography>

            <ImageList sx={{ width: "100%" }} cols={4} rowHeight={504}>
              {ArticulosData.map((item) => (
                <ImageListItem key={item.id}>
                  <ArticuloCard
                    titulo={item.titulo}
                    imagen={item.imagen}
                    link={item.link}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Box>
      </Hidden>

      <Hidden lgUp smDown>
        <Parallax speed={-6} tagOuter="figure">
          <Box mt={-2}>
            <img
              style={{ objectFit: "cover", height: "700px", width: "100%" }}
              src="/tendencias1.png"
              alt=""
            />
          </Box>
        </Parallax>
        <Box>
          <Box
            sx={{
              position: "absolute",
              top: "400px ",
              left: "6%",
              width: "76%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "25px",
                fontWeight: "100",
                color: "white",
              }}
            >
               “El aprendizaje solo cobra verdadero valor cuando se comparte con
              otros, ya que, al hacerlo, se enriquece el entorno y se potencia
              el crecimiento colectivo. Compartir el conocimiento fomenta la
              colaboración, el aprendizaje continuo y el desarrollo de
              soluciones más innovadoras y efectivas”.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "25px",
                fontWeight: "300",
                color: "white",
                mt: 2,
              }}
            >
              <strong>Peter Senge</strong> , experto en desarrollo
              organizacional
            </Typography>
          </Box>
        </Box>

        <Box width={"100%"} mt={"8%"}>
          <Typography
            sx={{
              fontFamily: "Merriweather",
              fontSize: "32px",
              fontWeight: "300",
              color: "#07659C",
              width: "88%",
              margin: "auto",
              lineHeight: "40px",
            }}
          >
            En Tyme, nos parece clave invertir tiempo en nuevos aprendizajes y
            conocimientos para darles a nuestros clientes una actualización
            constante en innovación, nuevas metodologías, casos de éxito y
            tendencias. Acá, compartimos algunos de esos aportes.
          </Typography>
          <Box width={"88%"} m={"auto"} mt={"3%"} mb={"3%"}>
            <BlackButtom texto={"Contáctanos"} linkTo={"/contacto"} />
          </Box>
          <Box position={"absolute"} top={"140%"}>
            <img width={"100%"} src="/tendencias2.png" alt="" />
          </Box>
        </Box>

        <Box width={"100%"} bgcolor={"#A0D5F6"}>
          <Box width={"88%"} m={"auto"} pt={"6%"} pb={"10%"}>
            <Typography
              sx={{
                color: "black",
                fontFamily: "Manrope",
                fontSize: "50px",
                fontWeight: "300",
                ml: 1,
              }}
            >
              Artículos propios
            </Typography>

            <ImageList sx={{ width: "100%" }} cols={3} rowHeight={504}>
              {ArticulosData.map((item) => (
                <ImageListItem key={item.id}>
                  <ArticuloCard
                    titulo={item.titulo}
                    imagen={item.imagen}
                    link={item.link}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box>
          <img width={"100%"} src="/mobileTendecias.png" alt="" />
        </Box>

        <Box>
          <Box
            sx={{
              mt: -1,
              width: "100%",
              bgcolor: "#18CC66",
              p: "11%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "20px",
                fontWeight: "100",
                color: "black",
                width: "90%",
              }}
            >
               “El aprendizaje solo cobra verdadero valor cuando se comparte con
              otros, ya que, al hacerlo, se enriquece el entorno y se potencia
              el crecimiento colectivo. Compartir el conocimiento fomenta la
              colaboración, el aprendizaje continuo y el desarrollo de
              soluciones más innovadoras y efectivas”.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "20px",
                fontWeight: "300",
                color: "white",
                mt: 2,
              }}
            >
              <strong>Peter Senge</strong> , experto en desarrollo
              organizacional
            </Typography>
          </Box>
        </Box>

        <Box width={"100%"} bgcolor={"#A0D5F6"}>
          <Box width={"58%"} ml={"12%"} pt={"6%"}>
            <Typography
              sx={{
                color: "black",
                fontFamily: "Manrope",
                fontSize: "40px",
                fontWeight: "300",
                lineHeight: "36px",
                mt: 2,
              }}
            >
              Artículos propios
            </Typography>
            <Box mt={"10%"}>
              <BlackButtom texto={"Consúltanos"} linkTo={"/contacto"} />
            </Box>
          </Box>
          <ImageList
            sx={{ width: "85%", pb: "8%", m: "auto" }}
            cols={1}
            rowHeight={510}
          >
            {ArticulosData.map((item) => (
              <ImageListItem key={item.id}>
                <ArticuloCard
                  titulo={item.titulo}
                  imagen={item.imagen}
                  link={item.link}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Hidden>
    </>
  );
};

export default Tendencias;
