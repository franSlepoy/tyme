import { Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

const Evaluacion2 = () => {
  return (
    <>
    <Hidden smDown>
    <Box
      p={"6%"}
      sx={{ width: "100%", height: "94vh", backgroundColor: "#104B70" }}
    >
      <Box display={"flex"} component={NavLink} to={"/queHacemos"} sx={{textDecoration:"none"}}>
        <img height={"30px"} src="/arrowButton.png" alt="" />
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: "Manrope",
            fontWeight: "300",
            color: "white",
            lineHeight: "34px",
            ml: "4px",
            mt: "-2px",
          }}
        >
          HR on demand
        </Typography>
      </Box>

      <Box>
        <Typography
          maxWidth={"980px"}
          sx={{
            fontFamily: "Manrope",
            fontSize: "48px",
            lineHeight: "45px",
            fontWeight: "700",
            color: "white",
            mt: "4%",
          }}
        >
          Equipo de expertos en gestión del talento
        </Typography>

        <Typography
          maxWidth={"780px"}
          sx={{
            fontFamily: "Manrope",
            fontSize: "26px",
            lineHeight: "35px",
            color: "white",
            fontWeight: "300",
            mt: "2%",
          }}
        >
          Junto a profesionales de diversas disciplinas y experiencia en
          management y RRHH, desarrollamos planes de mejora.
        </Typography>
      </Box>

      <Box display={"flex"} mt={"3%"}>
        <Box maxWidth={"230px"}>
          <Typography
            sx={{
              color: "#72C8FF",
              fontFamily: "Manrope",
              fontSize: "40px",
              fontWeight: "700",
              lineHeight: "30px",
            }}
          >
            1
          </Typography>
          <Typography
            sx={{
              color: "#73F0A2",
              fontFamily: "Manrope",
              fontSize: "24px",
              fontWeight: "800",
              mt: 2,
            }}
          >
            Análisis integral y diagnóstico personalizado.
          </Typography>
        </Box>
        <Box ml={"4%"}>
          <Typography
            sx={{
              color: "#72C8FF",
              fontFamily: "Manrope",
              fontSize: "40px",
              fontWeight: "700",
              lineHeight: "30px",
            }}
          >
            2
          </Typography>
          <Typography sx={{
              color: "#73F0A2",
              fontFamily: "Manrope",
              fontSize: "24px",
              fontWeight: "800",
              mt: 2,
            }}>Plan a medida.</Typography>
        </Box>
        <Box ml={"4%"} maxWidth={"200px"}>
          <Typography
            sx={{
              color: "#72C8FF",
              fontFamily: "Manrope",
              fontSize: "40px",
              fontWeight: "700",
              lineHeight: "30px",
            }}
          >
            3
          </Typography>
          
          <Typography sx={{
              color: "#73F0A2",
              fontFamily: "Manrope",
              fontSize: "24px",
              fontWeight: "800",
              mt: 2,
            }}>
            Guía constante para la incorporación de los cambios
            organizacionales.
          </Typography>
        </Box>
        <Box ml={"4%"} maxWidth={"200px"}>
          <Typography
            sx={{
              color: "#72C8FF",
              fontFamily: "Manrope",
              fontSize: "40px",
              fontWeight: "700",
              lineHeight: "30px",
            }}
          >
            4
          </Typography>
          <Typography sx={{
              color: "#73F0A2",
              fontFamily: "Manrope",
              fontSize: "24px",
              fontWeight: "800",
              mt: 2,
            }}>Acompañamiento para adaptar las estrategias.</Typography>
        </Box>
      </Box>

      <Box position={"absolute"} left={"75%"} top={"10%"}>
        <img src="/evolucion.png" alt="" />
      </Box>
    </Box>
    </Hidden>

    <Hidden smUp>
    <Box
      p={"6%"}
      sx={{
        width: "100%",
        height: "100vh", // Ajustar la altura al 100% del viewport height
        backgroundColor: "#104B70",
        overflowY: "auto", // Permitir scroll vertical si es necesario
      }} 
    >
      <Box display={"flex"} component={NavLink} to={"/queHacemos"} sx={{textDecoration:"none"}}>
        <img height={"30px"} src="/arrowButton.png" alt="" />
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: "Manrope",
            fontWeight: "300",
            color: "white",
            lineHeight: "34px",
            ml: "4px",
            mt: "-2px",
          }}
        >
          HR on demand
        </Typography>
      </Box>

      <Box>
        <Typography
          maxWidth={"980px"}
          sx={{
            fontFamily: "Manrope",
            fontSize: "48px",
            lineHeight: "45px",
            fontWeight: "700",
            color: "white",
            mt: "4%",
          }}
        >
          Equipo de expertos en gestión del talento
        </Typography>

        <Typography
          maxWidth={"780px"}
          sx={{
            fontFamily: "Manrope",
            fontSize: "26px",
            lineHeight: "35px",
            color: "white",
            fontWeight: "300",
            mt: "2%",
          }}
        >
          Junto a profesionales de diversas disciplinas y experiencia en
          management y RRHH, desarrollamos planes de mejora.
        </Typography>
      </Box>

      <Box  mt={"3%"}>
        <Box maxWidth={"230px"}>
          <Typography
            sx={{
              color: "#72C8FF",
              fontFamily: "Manrope",
              fontSize: "40px",
              fontWeight: "700",
              lineHeight: "30px",
            }}
          >
            1
          </Typography>
          <Typography
            sx={{
              color: "#73F0A2",
              fontFamily: "Manrope",
              fontSize: "24px",
              fontWeight: "800",
              mt: 2,
            }}
          >
            Análisis integral y diagnóstico personalizado.
          </Typography>
        </Box>
        <Box >
          <Typography
            sx={{
              color: "#72C8FF",
              fontFamily: "Manrope",
              fontSize: "40px",
              fontWeight: "700",
              lineHeight: "30px",
            }}
          >
            2
          </Typography>
          <Typography sx={{
              color: "#73F0A2",
              fontFamily: "Manrope",
              fontSize: "24px",
              fontWeight: "800",
              mt: 2,
            }}>Plan a medida.</Typography>
        </Box>
        <Box  maxWidth={"200px"}>
          <Typography
            sx={{
              color: "#72C8FF",
              fontFamily: "Manrope",
              fontSize: "40px",
              fontWeight: "700",
              lineHeight: "30px",
            }}
          >
            3
          </Typography>
          
          <Typography sx={{
              color: "#73F0A2",
              fontFamily: "Manrope",
              fontSize: "24px",
              fontWeight: "800",
              mt: 2,
            }}>
            Guía constante para la incorporación de los cambios
            organizacionales.
          </Typography>
        </Box>
        <Box  maxWidth={"200px"}>
          <Typography
            sx={{
              color: "#72C8FF",
              fontFamily: "Manrope",
              fontSize: "40px",
              fontWeight: "700",
              lineHeight: "30px",
            }}
          >
            4
          </Typography>
          <Typography sx={{
              color: "#73F0A2",
              fontFamily: "Manrope",
              fontSize: "24px",
              fontWeight: "800",
              mt: 2,
            }}>Acompañamiento para adaptar las estrategias.</Typography>
        </Box>
      </Box>

      <Box position={"absolute"} left={"75%"} top={"10%"}>
        <img src="/evolucion.png" alt="" />
      </Box>
    </Box>
    </Hidden>
    
    </>
    
   
  );
};

export default Evaluacion2;
