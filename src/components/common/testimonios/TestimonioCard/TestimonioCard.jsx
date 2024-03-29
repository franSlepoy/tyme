import { Box, Typography } from "@mui/material";

const TestimonioCard = (props) => {
  return (
    <Box>
      <Box
        sx={{
          m: "auto",
          borderRadius: "50%",
          overflow: "hidden",
          width: "160px",
          height: "165px",
        }}
      >
        <img width={"100%"} src={props.imagen} alt="avatar" />
      </Box>

      <Box
        sx={{ padding: 5, backgroundColor: "#E5DE04", borderRadius: "20px", width:{md:"60%", sm:"100%"}, m:"auto" }}
      >
        <Typography
          sx={{
            mt: "25px",
            fontFamily: "Manrope",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "28px",
            color: "black",
          }}
        >
          {props.texto}{" "}
        </Typography>
        <Typography
          sx={{
            mt: 2,
            fontFamily: "Manrope",

            fontWeight: 800,
            fontSize: "16px",

            lineHeight: "28px",
            color: "black",
            textTransform: "uppercase",
          }}
        >
          {props.nombre}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "18px",
            color: "black",
          }}
        >
          {props.cargo}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "18px",
            color: "black",
          }}
        >
          {props.empresa}
        </Typography>
      </Box>
    </Box>
  );
};

export default TestimonioCard;
