import { Box, Button, Typography } from "@mui/material";
import BlackButtom from "../blackButtom/BlackButtom";

const Charlas4 = ({ handleCloseComponente }) => {
  return (
    <Box
    position={"absolute"}
    top={"128%"}
    left={"6%"}
    display={"flex"}
    height={"78vh"}
    width={"87%"}
    style={{
      backgroundColor: "#A0D5F6",
    }}
    zIndex={100}
    >
      <Box ml={"10%"} mt={"6%"} width={"53%"}>
        <Button onClick={handleCloseComponente} sx={{ ml: -3 }}>
          <img  src="/flechaCH.png" alt="" />
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
          Ecualizando realidades
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
          Diversidad, inclusión y empatía como aliadas para que las diferencias
          sean aprovechadas como oportunidades y se conviertan en un impacto
          positivo en el negocio, generando soluciones colaborativas y creativas
          ante problemas compartidos.
        </Typography>
        <BlackButtom texto={"Consultanos"} linkTo={"/contacto"} />
      </Box>
      <Box width={"40%"} ml={6}>
        <img height={"100%"} src="/ch04.png" alt="" />
        
      </Box>
    </Box>
  );
};

export default Charlas4;
