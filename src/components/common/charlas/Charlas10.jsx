import { Box, Button, Hidden, Typography } from "@mui/material";
import BlackButtom from "../blackButtom/BlackButtom";

const Charlas10 = ({ handleCloseComponente }) => {
  return (
    <>
      <Hidden lgDown>
        <Box
          position={"absolute"}
          top={"128%"}
          left={"6%"}
          display={"flex"}
          width={"87%"}
          sx={{ bgcolor: "#A0D5F6" }}
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
              Beyond office walls:
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
              teletrabajo y revolución del espacio laboral
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
              ¿Cómo se redefine el concepto de oficina y horario laboral en
              tiempos de teletrabajo? Estrategias para impulsar la innovación,
              una cultura de confianza y el equilibrio laboral y personal, con
              herramientas digitales para una colaboración productiva
            </Typography>
            <Box pb={4}>
              <BlackButtom texto={"Consúltanos "} linkTo={"/contacto"} />
            </Box>
          </Box>
          <Box width={"40%"} ml={6}>
            <img width={"100%"} height={"100%"} src="/beyond.png" alt="" />
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
              Beyond office walls:
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
              teletrabajo y revolución del espacio laboral
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
              ¿Cómo se redefine el concepto de oficina y horario laboral en
              tiempos de teletrabajo? Estrategias para impulsar la innovación,
              una cultura de confianza y el equilibrio laboral y personal, con
              herramientas digitales para una colaboración productiva
            </Typography>
            <Box pb={4}>
              <BlackButtom texto={"Consúltanos "} linkTo={"/contacto"} />
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
          top={"398%"}
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
                fontSize: "30px",
                fontWeight: "700",
                lineHeight: "32px",
                color: "white",
                width: "80%",
              }}
            >
              Beyond office walls:
            </Typography>
            <Typography
              sx={{
                mt: "1%",
                width: "98%",
                fontFamily: "Manrope",
                fontSize: "24px",
                fontWeight: "600",
                lineHeight: "26px",
                color: "black",
              }}
            >
              teletrabajo y revolución del espacio laboral
            </Typography>
            <Typography
              sx={{
                mt: "4%",
                mb: "5%",
                fontFamily: "Manrope",
                fontSize: "20px",
                fontWeight: "300",
                lineHeight: "28px",
                color: "black",
                width: "90%",
              }}
            >
              ¿Cómo se redefine el concepto de oficina y horario laboral en
              tiempos de teletrabajo? Estrategias para impulsar la innovación,
              una cultura de confianza y el equilibrio laboral y personal, con
              herramientas digitales para una colaboración productiva
            </Typography>
            <BlackButtom texto={"Consúltanos "} linkTo={"/contacto"} />
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Charlas10;
