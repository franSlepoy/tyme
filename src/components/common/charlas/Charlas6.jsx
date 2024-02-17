import { Box, Button, Typography } from "@mui/material";
import BlackButtom from "../blackButtom/BlackButtom";

const Charlas6 = ({ handleCloseComponente }) => {
  return (
    <Box
      position={"absolute"}
      top={"342%"}
      display={"flex"}
      height={"97vh"}
      width={"100%"}
      style={{
        backgroundImage: "linear-gradient(to right, #18CC66, #D9D9D9)",
      }}
    >
      <Box position={"absolute"}>
        <img width={"120%"} src="/hr.png" alt="" />
      </Box>

     
      <Box ml={"7%"} mt={"6%"} width={"53%"}>
        <Button onClick={handleCloseComponente} sx={{ ml: -3 }}>
          <img height={"40px"} src="/arrowButton.png" alt="" />
        </Button>

        <Typography
          sx={{
            mt: "22px",
            fontFamily: "Manrope",
            fontSize: "48px",
            fontWeight: "800",
            lineHeight: "45px",
            color: "white",
          }}
        >
          Game on
        </Typography>
        <Typography
          sx={{
            mt: 2,
            width: "54%",
            fontFamily: "Manrope",
            fontSize: "30px",
            fontWeight: "600",
            lineHeight: "36px",
            color: "black",
          }}
        >
           IA, gaming y metaverso redefiniendo el mercado laboral
        </Typography>
        <Typography
          sx={{
            mt: "28px",
            mb: "14%",
            fontFamily: "Manrope",
            fontSize: "24px",
            fontWeight: "400",
            lineHeight: "30px",
            color: "black",
          }}
        >
          Herramientas para aprender cómo estas tres realidades están generando
          un nuevo paradigma en el mercado laboral, y usarlas como un
          complemento para generar oportunidades y potenciar las tareas
          estratégicas y creativas de los equipos.
        </Typography>
        <BlackButtom texto={"Consultanos"} />
      </Box>
      <Box ml={"5%"}>
        <Box position={"absolute"} top={"35%"} left={"72%"}>
        <img width={"120%"} src="/ia.png" alt="" />
        </Box>
        <Box ml={"1%"} mt={"45%"}>
          <img src="/redondo.png" alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Charlas6;
