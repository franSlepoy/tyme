import { Box, Button, Typography } from "@mui/material";
import BlackButtom from "../blackButtom/BlackButtom";

const Charlas5 = ({ handleCloseComponente }) => {
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
         HR 5.0
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
          brazando la revolución de las tendencias en RRHH
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
          Cómo incorporar nuevas tecnologías que sumen productividad y sean un salto de calidad para tu empresa y tus equipos. De qué manera identificar por qué y para qué sumarlas como un valor a la organización y aprovechar su potencial.
        </Typography>
        <BlackButtom texto={"Consultanos"} />
      </Box>
      <Box  ml={"5%"}>
        <Box position={"absolute"} top={"35%"} left={"72%"}>
          <img src="/iconCH5.png" alt="" />
        </Box>
        <Box ml={"1%"} mt={"45%"}>
          <img src="/redondo.png" alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Charlas5;
