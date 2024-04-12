import { Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import Acompañamiento2 from "./Acompañamiento2";

const Acompañamiento1 = ({
  handleOpenModal4,
  handleCloseModal4,
  openModal4,
}) => {
  return (
    <>
      <Hidden smDown>
        <Box
          pl={"10%"}
          pt={"6%"}
          sx={{ width: "100%", height: "74vh", backgroundColor: "#104B70" }}
        >
          <Box
            display={"flex"}
            onClick={() => {
              handleCloseModal4();
            }}
            bgcolor={"transparent"}
            border={"none"}
            sx={{ textDecoration: "none", cursor: "pointer" }}
            ml={-3.5}
          >
            <img height={"30px"} src="/arrowButton.png" alt="" />
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Manrope",
                fontWeight: "200",
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
              maxWidth={"580px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "45px",
                lineHeight: "55px",
                fontWeight: "700",
                color: "white",
                mt: "2%",
              }}
            >
              Acompañamiento para certificaciones
            </Typography>

            <Typography
              maxWidth={"780px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "22px",
                lineHeight: "30px",
                color: "white",
                fontWeight: "100",
                mt: "5%",
                width: "700px",
              }}
            >
              Te asistimos en cada paso hasta su aprobación, como una
              herramienta que valida el compromiso de tu empresa con altos
              estándares de calidad. Esto suma un valor diferencial que permite
              atraer nuevos clientes y acceder a nuevos mercados, y promueve una
              revisión continua de los procesos internos que potencian un
              crecimiento sostenible y a largo plazo.
            </Typography>
          </Box>
          <Box position={"absolute"} left={"75%"} top={"10%"}>
            <img src="/Acom.png" alt="" />
          </Box>
        </Box>
        <Box
          width={"220px"}
          height={"220px"}
          sx={{
            bgcolor: "#1296E9",
            borderRadius: "100%",
            position: "absolute",
            left: "72%",
            top: "32vh",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Manrope",
              fontSize: "22px",
              lineHeight: "25px",
              color: "black",
              mt: "30%",
            }}
          >
            Por qué es importante <strong>certificar</strong>
          </Typography>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box
          p={"8%"}
          sx={{
            width: "100%",

            backgroundColor: "#104B70",
          }}
        >
          

          <Box>
            <Typography
              width={"93%"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "30px",
                lineHeight: "32px",
                fontWeight: "700",
                color: "white",
                mt: "7%",
              }}
            >
              Acompañamiento para certificaciones...
            </Typography>

            <Typography
              maxWidth={"780px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "20px",
                lineHeight: "28px",
                color: "white",
                fontWeight: "300",
                mt: "8%",
              }}
            >
              Te asistimos en cada paso hasta su aprobación, como una
              herramienta que valida el compromiso de tu empresa con altos
              estándares de calidad. Esto suma un valor diferencial que permite
              atraer nuevos clientes y acceder a nuevos mercados, y promueve una
              revisión continua de los procesos internos que potencian un
              crecimiento sostenible y a largo plazo.
            </Typography>
          </Box>
          <Box position={"absolute"} top={"10%"}>
            <img src="/Acom.png" alt="" />
          </Box>
        </Box>
        <Box mt={-1}>
          <Acompañamiento2/>
        </Box>
      </Hidden>
    </>
  );
};

export default Acompañamiento1;
