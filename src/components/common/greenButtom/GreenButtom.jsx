import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const GreenButtom = ({ texto, linkTo }) => {
  return (
    <Button
    disableRipple={true}
      component={Link} // Usa Link como el componente de Button
      to={linkTo} // Pasa la URL a la que se debe dirigir el enlace
      variant="contained"
      sx={{
        height: "43px",
        width: "177px",
        borderRadius: "100px",
        backgroundColor: "#18CC66",
        boxShadow: "none",
        "&:hover": {
          height: "43px",
          width: "177px",
          borderRadius: "100px",
          backgroundColor: "#18CC66",
          boxShadow: "none",
        },
      }}
    >
      <Typography
        sx={{
          textTransform: "none",
          fontFamily: "Manrope",
          fontSize: "16px",
          lineHeight: "20px",
          fontWeight: 600,
          letterSpacing: "0.1",
          color: "black",
        }}
      >
        {texto}
      </Typography>
    </Button>
  );
};

export default GreenButtom;
