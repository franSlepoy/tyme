import { Box, Button, Typography } from "@mui/material";
import BlackButtom from "../blackButtom/BlackButtom";

const Charlas5 = ({ handleCloseComponente }) => {
  return (
    <Box
      position={"absolute"}
      top={"348%"}
      left={"6%"}
      display={"flex"}
      width={"87%"}
      pt={"5%"}
      pb={"5%"}
      sx={{
        backgroundImage: `url("/Gameon1.png")`, // Reemplaza con la ruta de tu imagen
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box ml={"10%"}  width={"53%"}>
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
          HR 5.0
        </Typography>
        <Typography
          sx={{
            mt: "1%",
            width: "97%",
            fontFamily: "Manrope",
            fontSize: "30px",
            fontWeight: "500",
            lineHeight: "36px",
            color: "black",
          }}
        >
          brazando la revolución de las tendencias en RRHH
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
          }}
        >
          Cómo incorporar nuevas tecnologías que sumen productividad y sean un
          salto de calidad para tu empresa y tus equipos. De qué manera
          identificar por qué y para qué sumarlas como un valor a la
          organización y aprovechar su potencial.
        </Typography>
        <BlackButtom texto={"Consultanos"} linkTo={"/contacto"} />
      </Box>
      
    </Box>
  );
};

export default Charlas5;
