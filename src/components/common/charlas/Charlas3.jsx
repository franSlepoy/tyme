import { Box, Button, Hidden, Typography } from "@mui/material";
import BlackButtom from "../blackButtom/BlackButtom";

const Charlas3 = ({ handleCloseComponente }) => {
  return (
    <>
      <Hidden smDown>
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
              Construyendo un legado{" "}
            </Typography>
            <Typography
              sx={{
                mt: "1%",
                width: "74%",
                fontFamily: "Manrope",
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "36px",
                color: "black",
              }}
            >
              liderazgo transformador en tiempos de incertidumbre
            </Typography>
            <Typography
              sx={{
                mt: "4%",
                mb: "5%",
                fontFamily: "Manrope",
                fontSize: "24px",
                fontWeight: "300",
                lineHeight: "30px",
                color: "black",
              }}
            >
              Cómo la influencia puede ayudarte a motivar a tu equipo y tus
              clientes, y desencadenar una ola de creatividad en tu empresa.
              Cómo cultivar una cultura de confianza y herramientas para
              implementar el cambio midiendo su impacto en el negocio.
            </Typography>
            <Box pb={4}>
              <BlackButtom texto={"Consultanos"} linkTo={"/contacto"} />
            </Box>
          </Box>
          <Box width={"40%"} ml={6}>
            <img width={"100%"} height={"100%"} src="/ch03.png" alt="" />
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box
          position={"absolute"}
          top={"128%"}
          left={"6%"}
          pb={"8%"}
          width={"87%"}
          sx={{ bgcolor: "#73F0A2" }}
          zIndex={100}
        >
          <Box ml={"10%"} mt={"6%"} width={"93%"}>
            <Button onClick={handleCloseComponente} sx={{ ml: -3 }}>
              <img src="/flechaCH.png" alt="" />
            </Button>

            <Typography
              sx={{
                mt: "3%",
                fontFamily: "Manrope",
                fontSize: "38px",
                fontWeight: "700",
                lineHeight: "45px",
                color: "white",
                width: "80%",
              }}
            >
              Construyendo un legado{" "}
            </Typography>
            <Typography
              sx={{
                mt: "1%",
                width: "98%",
                fontFamily: "Manrope",
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "36px",
                color: "black",
              }}
            >
              liderazgo transformador en tiempos de incertidumbre
            </Typography>
            <Typography
              sx={{
                mt: "4%",
                mb: "5%",
                fontFamily: "Manrope",
                fontSize: "24px",
                fontWeight: "300",
                lineHeight: "30px",
                color: "black",
                width: "90%",
              }}
            >
              Cómo la influencia puede ayudarte a motivar a tu equipo y tus
              clientes, y desencadenar una ola de creatividad en tu empresa.
              Cómo cultivar una cultura de confianza y herramientas para
              implementar el cambio midiendo su impacto en el negocio.
            </Typography>
            <BlackButtom texto={"Consultanos"} linkTo={"/contacto"} />
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Charlas3;
