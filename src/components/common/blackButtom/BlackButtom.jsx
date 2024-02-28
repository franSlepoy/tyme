import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BlackButtom = ({ texto, linkTo }) => {
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
        backgroundColor: "black",
        "&:hover": {
          borderRadius: "100px",
          backgroundColor: "black", // Mismo color de fondo que el estado normal
          color: "white", // Mismo color de texto que el estado normal
          textAlign: "center",
        },
      }}
    >
      <Typography 
        sx={{
          
          textTransform: "none",
          fontFamily: "Manrope",
          lineHeight: "20px",
          fontWeight: 400,
          letterSpacing: "0.1",
        }}
      >
        {texto}
      </Typography>
    </Button>
  );
};

export default BlackButtom;
