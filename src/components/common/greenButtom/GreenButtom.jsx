import { Button, Typography } from "@mui/material";

const GreenButtom = ({ texto }) => {
  return (
    <Button
      variant="contained"
      sx={{
        height: "43px",
        width: "177px",
        borderRadius: "100px",
        backgroundColor: "#18CC66",
        "&:hover": {
            height: "43px",
            width: "177px",
            borderRadius: "100px",
            backgroundColor: "#18CC66",
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
