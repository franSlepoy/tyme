import { Box, Button, Hidden, Typography } from "@mui/material";
import BlackButtom from "../blackButtom/BlackButtom";

const Charlas4 = ({ handleCloseComponente }) => {
  return (
    <>
      <>
        <Hidden smDown>
          <Box
            position={"absolute"}
            top={"128%"}
            left={"6%"}
            display={"flex"}
            width={"87%"}
            style={{
              backgroundColor: "#A0D5F6",
            }}
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
                  fontWeight: "800",
                  lineHeight: "45px",
                  color: "white",
                }}
              >
                Ecualizando realidades tu mundo-mi mundo
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
                tu mundo-mi mundo
              </Typography>
              <Typography
                sx={{
                  mt: "4%",
                  mb: "7%",
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "black",
                }}
              >
                Diversidad, inclusión y empatía como aliadas para que las
                diferencias sean aprovechadas como oportunidades y se conviertan
                en un impacto positivo en el negocio, generando soluciones
                colaborativas y creativas ante problemas compartidos.
              </Typography>
              <Box pb={4}>
                <BlackButtom texto={"Consultanos"} linkTo={"/contacto"} />
              </Box>
            </Box>
            <Box width={"40%"} ml={6}>
              <img width={"100%"} height={"100%"} src="/Date.png" alt="" />
            </Box>
          </Box>
        </Hidden>

        <Hidden smUp>
          <Box
            position={"absolute"}
            top={"128%"}
            left={"6%"}
            width={"90%"}
            style={{
              backgroundColor: "#A0D5F6",
            }}
            zIndex={100}
            pb={"5%"}
          >
            <Box ml={"10%"} mt={"6%"} width={"88%"}>
              <Button onClick={handleCloseComponente} sx={{ ml: -3 }}>
                <img src="/flechaCH.png" alt="" />
              </Button>

              <Typography
                sx={{
                  mt: "3%",
                  fontFamily: "Manrope",
                  fontSize: "48px",
                  fontWeight: "800",
                  lineHeight: "45px",
                  color: "white",
                }}
              >
                Date with myself:{" "}
              </Typography>
              <Typography
                sx={{
                  mt: "2%",

                  fontFamily: "Manrope",
                  fontSize: "30px",
                  fontWeight: "500",
                  lineHeight: "36px",
                  color: "black",
                }}
              >
                turismo interior
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
                  width: "90%",
                }}
              >
                La importancia del autoconocimiento para la estabilidad, el
                equilibrio y el desarrollo del potencial de cada persona, como
                herramientas para que mejore su rendimiento y haga eco en el
                crecimiento de la organización de la que forma parte.
              </Typography>
              <BlackButtom texto={"Consultanos"} linkTo={"/contacto"} />
            </Box>
          </Box>
        </Hidden>
      </>
    </>
  );
};

export default Charlas4;
