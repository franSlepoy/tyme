import { Box, Button, Typography } from "@mui/material";
import BlackButtom from "../blackButtom/BlackButtom";

const Charlas7 = ({ handleCloseComponente }) => {
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
          Cryptowork
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
          desbloqueando el potencial de las criptomonedas
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
          Exploración del impacto y las oportunidades que las criptomonedas y la
          tecnología blockchain están generando en el mundo del trabajo, y cómo
          están transformando el modo en que se llevan a cabo las transacciones
          en el mercado laboral. 
        </Typography>
        <BlackButtom texto={"Consultanos"} />
      </Box>
      <Box ml={"5%"}>
        <Box position={"absolute"} top={"31%"} left={"71%"}>
        <img width={"120%"} src="/c.png" alt="" />
        </Box>
        <Box ml={"1%"} mt={"45%"}>
          <img src="/redondo.png" alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Charlas7;
