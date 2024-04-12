import { Box, Hidden, Typography } from "@mui/material";

const TestimonioCard = (props) => {
  return (
    <>
      <Hidden smDown>
        <Box sx={{ width: "400px", m: "auto" }}>
          <Box
            sx={{
              mt: "52px",
              padding: 6,
              backgroundColor: "#E5DE04",
              borderRadius: "33px",
            }}
          >
            <Box
              sx={{
                m: "auto",
                borderRadius: "50%",
                overflow: "hidden",
                width: "80px",
                height: "80px",
                mt: -10,
              }}
            >
              <img width={"100%"} src={props.imagen} alt="" />
            </Box>
            <Typography
              sx={{
                mt: "25px",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "black",
              }}
            >
              {props.texto}
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontFamily: "Manrope",

                fontWeight: 800,
                fontSize: "16px",

                lineHeight: "26px",
                color: "black",
                textTransform: "uppercase",
              }}
            >
              {props.nombre}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "18px",
                color: "black",
              }}
            >
              {props.cargo}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 100,
                lineHeight: "18px",
                color: "black",
              }}
            >
              {props.empresa}
            </Typography>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box sx={{ width: "100%", m: "auto" }}>
          <Box
            sx={{
              mt: "52px",
              padding: 3,
              backgroundColor: "#E5DE04",
              borderRadius: "33px",
            }}
          >
            <Box
              sx={{
                m: "auto",
                borderRadius: "50%",
                overflow: "hidden",
                width: "80px",
                height: "80px",
                mt: -10,
              }}
            >
              <img width={"100%"} src={props.imagen} alt="" />
            </Box>
            <Typography
              sx={{
                mt: "25px",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "black",
              }}
            >
              {props.texto}
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontFamily: "Manrope",

                fontWeight: 800,
                fontSize: "16px",

                lineHeight: "26px",
                color: "black",
                textTransform: "uppercase",
              }}
            >
              {props.nombre}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "18px",
                color: "black",
              }}
            >
              {props.cargo}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 100,
                lineHeight: "18px",
                color: "black",
              }}
            >
              {props.empresa}
            </Typography>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default TestimonioCard;
