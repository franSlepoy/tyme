import { Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import Waze2 from "./Waze2";

const Evaluacion1 = ({ handleOpenModal3, handleCloseModal3, openModal3 }) => {
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
              handleCloseModal3();
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
              Waze laboral
            </Typography>

            <Typography
              maxWidth={"780px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "22px",
                lineHeight: "30px",
                color: "white",
                fontWeight: "100",
                mt: "9%",
                width: "700px",
              }}
            >
              Diseñamos soluciones innovadoras para transformar los puestos de
              trabajo y potenciar el talento de tu empresa, adaptándolo a un
              mundo laboral que cambia constantemente, con planes de reskilling
              y upskilling. Nuestra metodología se basa en la personalización y
              en un enfoque integral que prepara a tus equipos para nuevos
              desafíos y demandas del mercado.
            </Typography>
          </Box>
          <Box position={"absolute"} left={"75%"} top={"10%"}>
            <img src="/waze.png" alt="" />
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box
          p={"6%"}
          sx={{ width: "100%", height: "94vh", backgroundColor: "#104B70" }}
        >
          

          <Box>
            <Typography
              maxWidth={"580px"}
              sx={{
                fontFamily: "Manrope",
                fontSize: "30px",
                lineHeight: "32px",
                fontWeight: "800",
                color: "white",
                mt: "7%",
              }}
            >
              Waze laboral
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
              Diseñamos soluciones innovadoras para transformar los puestos de
              trabajo y potenciar el talento de tu empresa, adaptándolo a un
              mundo laboral que cambia constantemente, con planes de reskilling
              y upskilling. Nuestra metodología se basa en la personalización y
              en un enfoque integral que prepara a tus equipos para nuevos
              desafíos y demandas del mercado.
            </Typography>
          </Box>
          <Box position={"absolute"} top={"10%"}>
            <img src="/waze.png" alt="" />
          </Box>
        </Box>
        <Box mt={-25}>
          <Waze2/>
        </Box>
      </Hidden>
    </>
  );
};

export default Evaluacion1;
