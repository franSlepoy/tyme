import { Box, Button, Hidden, Typography } from "@mui/material";
import BlackButtom from "../blackButtom/BlackButtom";
import { Link } from "react-router-dom";

const Charlas1 = ({ handleCloseComponente }) => {
  return (
    <>
      <Hidden lgDown>
        <Box
          position={"absolute"}
          top={"128%"}
          left={"6%"}
          display={"flex"}
          width={"87%"}
          sx={{ bgcolor: "#73F0A2" }}
          zIndex={100}
        >
          <Box ml={"10%"} mt={"6%"} width={"53%"}>
            <Button onClick={handleCloseComponente} sx={{ ml: -3 }}>
              <img src="/flechaCH.png" alt="" />
            </Button>

            <Typography
              sx={{
                mt: "3%",
                fontFamily: "Manrope",
                fontSize: "48px",
                fontWeight: "700",
                lineHeight: "45px",
                color: "white",
              }}
            >
              Amplifying impact:
            </Typography>
            <Typography
              sx={{
                mt: "1%",
                width: "64%",
                fontFamily: "Manrope",
                fontSize: "30px",
                fontWeight: "500",
                lineHeight: "36px",
                color: "black",
              }}
            >
              el poder de la influencia y el empoderamiento
            </Typography>
            <Typography
              sx={{
                mt: "4%",
                mb: "7%",
                fontFamily: "Manrope",
                fontSize: "24px",
                fontWeight: "300",
                lineHeight: "30px",
                color: "black",
                width: "550px",
              }}
            >
              Cómo la influencia puede ayudarte a motivar a tu equipo y tus
              clientes, y desencadenar una ola de creatividad en tu empresa.
              Cómo cultivar una cultura de confianza y herramientas para
              implementar el cambio midiendo su impacto en el negocio.
            </Typography>

            <Box pb={4}>
              <Button
                disableRipple={true}
                component={Link} // Usa Link como el componente de Button
                to={"/contacto"} // Pasa la URL a la que se debe dirigir el enlace
                variant="contained"
                sx={{
                  height: "43px",
                  width: "177px",
                  borderRadius: "100px",
                  backgroundColor: "black",
                  "&:hover": {
                    borderRadius: "100px",
                    backgroundColor: "black", // Mismo color de fondo que el estado normal
                    color: "white", // Mismo color de texto que el estado normal
                    textAlign: "center",
                  },
                }}
              >
                <Typography
                  sx={{
                    textTransform: "none",
                    fontFamily: "Manrope",
                    lineHeight: "20px",
                    fontWeight: 400,
                    letterSpacing: "0.1",
                    color: "#73F0A2",
                  }}
                >
                 Consúltanos 
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box width={"40%"}>
            <img width={"100%"} height={"100%"} src="/ch01.png" alt="" />
          </Box>
        </Box>
      </Hidden>

      <Hidden lgUp smDown>
        <Box
          position={"absolute"}
          top={"68%"}
          left={"6%"}
          display={"flex"}
          width={"87%"}
          sx={{ bgcolor: "#73F0A2" }}
          zIndex={100}
        >
          <Box ml={"10%"} mt={"6%"} width={"53%"}>
            <Button onClick={handleCloseComponente} sx={{ ml: -3 }}>
              <img src="/flechaCH.png" alt="" />
            </Button>

            <Typography
              sx={{
                mt: "3%",
                fontFamily: "Manrope",
                fontSize: "48px",
                fontWeight: "700",
                lineHeight: "45px",
                color: "white",
              }}
            >
              Amplifying impact:
            </Typography>
            <Typography
              sx={{
                mt: "1%",
                width: "64%",
                fontFamily: "Manrope",
                fontSize: "30px",
                fontWeight: "500",
                lineHeight: "36px",
                color: "black",
              }}
            >
              el poder de la influencia y el empoderamiento
            </Typography>
            <Typography
              sx={{
                mt: "4%",
                mb: "7%",
                fontFamily: "Manrope",
                fontSize: "24px",
                fontWeight: "300",
                lineHeight: "30px",
                color: "black",
                width: "550px",
              }}
            >
              Cómo la influencia puede ayudarte a motivar a tu equipo y tus
              clientes, y desencadenar una ola de creatividad en tu empresa.
              Cómo cultivar una cultura de confianza y herramientas para
              implementar el cambio midiendo su impacto en el negocio.
            </Typography>

            <Box pb={4}>
              <Button
                disableRipple={true}
                component={Link} // Usa Link como el componente de Button
                to={"/contacto"} // Pasa la URL a la que se debe dirigir el enlace
                variant="contained"
                sx={{
                  height: "43px",
                  width: "177px",
                  borderRadius: "100px",
                  backgroundColor: "black",
                  "&:hover": {
                    borderRadius: "100px",
                    backgroundColor: "black", // Mismo color de fondo que el estado normal
                    color: "white", // Mismo color de texto que el estado normal
                    textAlign: "center",
                  },
                }}
              >
                <Typography
                  sx={{
                    textTransform: "none",
                    fontFamily: "Manrope",
                    lineHeight: "20px",
                    fontWeight: 400,
                    letterSpacing: "0.1",
                    color: "#73F0A2",
                  }}
                >
                  Consúltanos 
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box width={"40%"}>
            <img width={"100%"} height={"100%"} src="/ch01.png" alt="" />
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box
          position={"absolute"}
          top={"108%"}
          width={"90%"}
          ml={"5%"}
          sx={{ bgcolor: "#73F0A2", pb: "6%" }}
          zIndex={100}
        >
          <Box ml={"7%"} mt={"6%"} width={"90%"}>
            <Button onClick={handleCloseComponente} sx={{ ml: -3 }}>
              <img height={"40px"} src="/arrowButton.png" alt="" />
            </Button>

            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "30px",
                fontWeight: "800",

                color: "white",
              }}
            >
              Amplifying impact:
            </Typography>
            <Typography
              sx={{
                mt: 2,

                fontFamily: "Manrope",
                fontSize: "24px",
                fontWeight: "600",
                lineHeight: "28px",
                color: "black",
              }}
            >
              el poder de la influencia y el empoderamiento
            </Typography>
            <Typography
              sx={{
                mt: "28px",
                mb: "14%",
                fontFamily: "Manrope",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "28px",
                color: "black",
              }}
            >
              Cómo la influencia puede ayudarte a motivar a tu equipo y tus
              clientes, y desencadenar una ola de creatividad en tu empresa.
              Cómo cultivar una cultura de confianza y herramientas para
              implementar el cambio midiendo su impacto en el negocio.
            </Typography>
            <BlackButtom texto={"Consúltanos "} />
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Charlas1;
