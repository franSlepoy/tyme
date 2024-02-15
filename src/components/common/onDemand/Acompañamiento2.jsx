import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

const Acompañamiento2 = () => {
  return (
    <Box
      p={"6%"}
      sx={{ width: "100%", height: "94vh", backgroundColor: "#104B70" }}
    >
      <Box display={"flex"} component={NavLink} to={"/nosotros"} sx={{textDecoration:"none"}}>
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
         Por qué es importante certificar
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
          Aumenta la credibilidad y la confianza de tus socios comerciales, clientes y colaboradores.
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
            Aumenta la credibilidad y la confianza de tus socios comerciales, clientes y colaboradores.
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
            }}>
                Mejora la relación con tus empleados porque ratifica el compromiso con políticas de bienestar.
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
            3
          </Typography>
          
          <Typography sx={{
              color: "#73F0A2",
              fontFamily: "Manrope",
              fontSize: "24px",
              fontWeight: "800",
              mt: 2,
            }}>
           Mejora la relación con tus empleados porque ratifica el compromiso con políticas de bienestar.
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
            }}>
                Fomenta la mejora continua y la eficiencia, y asegura el cumplimiento de marcos regulatorios.
            </Typography>
        </Box>
      </Box>

      <Box position={"absolute"} left={"75%"} top={"10%"}>
        <img src="/Acom.png" alt="" />
      </Box>
    </Box>
  );
};

export default Acompañamiento2;