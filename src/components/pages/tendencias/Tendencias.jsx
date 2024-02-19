import {
  Box,
  Hidden,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { ArticulosData } from "../../../servidor/ArticulosData";
import ArticuloCard from "../../common/articulosCard/ArticulosCard";
import Carousel from "react-material-ui-carousel";
import { CharlasData } from "../../../servidor/CharlasData";
import TextoCard1 from "../../common/textoCard/TextoCard1";
import { Parallax } from "react-scroll-parallax";
import BlackButtom from "../../common/blackButtom/BlackButtom";

const Tendencias = () => {
  return (
    <>
      <Hidden smDown>
        <Parallax speed={-12} tagOuter="figure">
          <Box mt={1}>
            <img src="/tendencias1.png" alt="" />
          </Box>
        </Parallax>
        <Box>
          <Box
            sx={{
              position: "absolute",
              top: "70% ",
              left: "6%",
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
              <strong>Peter Senge</strong> , experto en desarrollo
              organizacional
            </Typography>
          </Box>
          <Box sx={{ position: "absolute", top: "108vh", left: "50%" }}>
            <img src="/flechaVerde.png" alt="" />
          </Box>
        </Box>

        <Box width={"100%"} mt={"15%"}>
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
            <BlackButtom texto={"Contáctanos"} />
          </Box>
          <Box position={"absolute"} top={"140%"}>
            <img src="/tendencias2.png" alt="" />
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
                ml:1
              }}
            >
              Artículos propios
            </Typography>
            <Box position={"absolute"} left={"60%"} top={"186%"}>
                <img src="/tendencias4.png" alt="" />
            </Box>
            <Box position={"absolute"} left={"87%"} top={"198%"}>
                <img src="/tendencias6.png" alt="" />
            </Box>

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
          Tendencias
        </Typography>
        <Typography
          sx={{
            with: "600px",
            ml: 6,
            mt: 1,
            color: "#003350",
            fontFamily: "Manrope",
            fontSize: "22px",
            fontWeight: "500",
            lineHeight: "20px",
            letterSpacing: "0.1px",
          }}
        >
          Blog – never stop learning{" "}
        </Typography>
        <Typography
          sx={{
            width: "90%",
            ml: 2,
            mt: 4,
            color: "#003350",
            fontFamily: "Manrope",
            fontSize: "18px",
            fontWeight: "300",
            lineHeight: "28px",
            letterSpacing: "0.5px",
          }}
        >
          {" "}
          En Tyme nos consideramos eternos estudiantes, y por invertimos entre
          una y dos horas diarias en leer, aprender y evolucionar. También es lo
          que nos permite llevarle a nuestros clientes una actualización
          constante en términos de innovación, nuevas metodologías, casos de
          éxito, etc.
        </Typography>

        <Box ml={2} mt={6}>
          <Box ml={2}>
            <img src="/flecha.png" alt="" />
          </Box>
          <Box sx={{ width: "90%", ml: 2, mt: 2 }}>
            <Typography
              sx={{
                color: "#003350",
                fontFamily: "Manrope",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              “El aprendizaje solo cobra verdadero valor cuando se comparte con
              otros, ya que, al hacerlo, se enriquece el entorno y se potencia
              el crecimiento colectivo. Compartir el conocimiento fomenta la
              colaboración, el aprendizaje continuo y el desarrollo de
              soluciones más innovadoras y efectivas”
            </Typography>
            <Typography
              sx={{
                color: "#003350",
                fontFamily: "Manrope",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              {" "}
              – Peter Senge{" "}
            </Typography>
          </Box>
        </Box>

        {/* <Typography sx={{width:"1028px", ml:6,mt:4, color:"#003350",fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}}>Por ello, en esta sección te compartiremos artículos y recomendaremos libros orientados a líderes de cualquier tipo de organización. Son libros basados en metodologías, gestión de las personas, management, etc. Todas herramientas que son aplicables a todo tipo de negocio.</Typography> */}

        <Typography
          sx={{
            textAlign: "center",
            width: "90%",
            mt: 8,
            color: "#003350",
            fontFamily: "Manrope",
            fontSize: "42px",
            fontWeight: "800",
            lineHeight: "normal",
            letterSpacing: "-1.68px",
          }}
        >
          Artículos propios
        </Typography>

        <ImageList sx={{ m: "auto", width: "85%" }} cols={1} rowHeight={504}>
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

        {/*  <Typography sx={{ml:6, mt:8,color:"#003350", fontFamily:"Manrope", fontSize:"42px", fontWeight:"800", lineHeight:"normal", letterSpacing:"-1.68px"}}>Libros recomendados </Typography>

<Box  width={"1448px"} ml={-18} mt={8}>
    <Box display={"flex"}  >
    <Box p={5} width={"288px"} height={"288px"} bgcolor={"#78EEA3"}>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"24px", fontWeight:"700", lineHeight:"normal"}}>La quinta disciplina</Typography>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}}>Peter Senge</Typography>
</Box>
<Box p={5}  width={"288px"} height={"288px"} bgcolor={"#91F1B6"}>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"24px", fontWeight:"700", lineHeight:"normal"}}>Funky Business</Typography>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}}>Kjell A. Nordström y Jonas Ridderstråle</Typography>
</Box>
<Box p={5} width={"288px"} height={"288px"} bgcolor={" #ACF4C7"}>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"24px", fontWeight:"700", lineHeight:"normal"}}>Key Person Of Influence</Typography>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}}>Daniel Priestley</Typography>
</Box>
<Box p={5} width={"288px"} height={"288px"} bgcolor={"#C7F7DA"}>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"24px", fontWeight:"700", lineHeight:"normal"}}>Platform Revolution</Typography>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}}>Geoffrey G. Parker, Marshall W. Van Alstyne y Sangeet Paul Choudary</Typography>
</Box>
<Box p={5} width={"288px"} height={"288px"} bgcolor={"#E3FBEB"}>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"24px", fontWeight:"700", lineHeight:"normal"}}>Originales</Typography>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}}>Adam Grant</Typography>
</Box>
    </Box>

</Box>

<Box sx={{ mt:8,  ml:"82px", borderRadius:"20px", color:"#003350" }}>
        <Carousel   >
         {
             CharlasData.map( card => <TextoCard1 key={card.id}  titulo={card.titulo} texto={card.texto} textoOtro={card.textoOtro} /> )
         }
       </Carousel>
</Box>
<Box display={"flex"} mt={8} width={"1448px"} ml={-18}>
<Box p={5} width={"288px"} height={"288px"} bgcolor={"#FEE879"}>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"24px", fontWeight:"700", lineHeight:"normal"}}>La quinta disciplina</Typography>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}}>Peter Senge</Typography>
</Box>
<Box p={5}  width={"288px"} height={"288px"} bgcolor={" #FEEC92"}>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"24px", fontWeight:"700", lineHeight:"normal"}}>Funky Business</Typography>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}}>Kjell A. Nordström y Jonas Ridderstråle</Typography>
</Box>
<Box p={5} width={"288px"} height={"288px"} bgcolor={" #FEF0AD"}>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"24px", fontWeight:"700", lineHeight:"normal"}}>Key Person Of Influence</Typography>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}}>Daniel Priestley</Typography>
</Box>
<Box p={5} width={"288px"} height={"288px"} bgcolor={"#FFF5C7"}>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"24px", fontWeight:"700", lineHeight:"normal"}}>Platform Revolution</Typography>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}}>Geoffrey G. Parker, Marshall W. Van Alstyne y Sangeet Paul Choudary</Typography>
</Box>
<Box p={5} width={"288px"} height={"288px"} bgcolor={"#FFFAE3"}>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"24px", fontWeight:"700", lineHeight:"normal"}}>Originales</Typography>
    <Typography sx={{color:"#003350",fontFamily:"Manrope", fontSize:"18px", fontWeight:"300", lineHeight:"28px", letterSpacing:"0.5px"}}>Adam Grant</Typography>
</Box>
</Box> */}
      </Hidden>
    </>
  );
};

export default Tendencias;
