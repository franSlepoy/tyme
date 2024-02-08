import {
  AppBar,
  Box,
  Button,
  Hidden,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  return (
    <>
      <Hidden lgDown>
        <AppBar
          position="static"
          color="transparent"
          sx={{
            boxShadow: 0,
            width: "91%",
            margin: "auto",
            height: "99px",
            
          }}
        >
          <Toolbar  sx={{ mt: 2,}}>
            <Box  component={NavLink} to={"/"}>
              <img src="/logo.png" alt="logo" />
            </Box>
            <Box display={"flex"} width={"84%"}>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  textDecoration: "none",
                  minWidth: "122px",

                  fontWeight: 400,
                  ml: "20%",
                  color: "black",

                  fontSize: "16px",
                  fontStyle: "normal",
                  lineHeight: "20px",

                  "&:hover": {
                    borderRadius: "100px",
                    backgroundColor: "#71EAEA",
                  },
                }}
                component={NavLink}
                to={"/nosotros"}
              >
                {/* <Typography fontFamily={"Manrope"}>
                 Quiénes somos
              </Typography> */}
                Quiénes somos
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  textDecoration: "none",
                  minWidth: "110px",
                  ml: 0.8,

                  color: "black",
                  fontWeight: 400,
                  fontSize: "16px",

                  lineHeight: "20px",

                  "&:hover": {
                    borderRadius: "100px",
                    backgroundColor: "#71EAEA",
                  },
                }}
                component={NavLink}
                to={"/queHacemos"}
              >
                Qué hacemos
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  textDecoration: "none",
                  minWidth: "230px",
                  fontWeight: 400,
                  ml: 0.8,

                  color: "black",
                  textAlign: "center",
                  fontSize: "16px",
                  fontStyle: "normal",
                  lineHeight: "20px",

                  "&:hover": {
                    borderRadius: "100px",
                    backgroundColor: "#71EAEA",
                  },
                }}
                component={NavLink}
                to={"/manifiesto"}
              >
                Manifiesto: el valor del tiempo
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  textDecoration: "none",
                  minWidth: "180px",
                  ml: 0.8,

                  color: "black",
                  fontWeight: 400,
                  fontSize: "16px",
                  fontStyle: "normal",
                  lineHeight: "20px",

                  "&:hover": {
                    borderRadius: "100px",
                    backgroundColor: "#71EAEA",
                  },
                }}
                component={NavLink}
                to={"/charlasYconferencias"}
              >
                Charlas y Conferencias
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  textDecoration: "none",
                  minWidth: "92px",
                  ml: 0.8,

                  color: "black",
                  fontWeight: 400,
                  fontSize: "16px",
                  fontStyle: "normal",
                  lineHeight: "20px",
                  "&:hover": {
                    borderRadius: "100px",
                    backgroundColor: "#71EAEA",
                  },
                }}
                component={NavLink}
                to={"/tendencias"}
              >
                Tendencias
              </Typography>
              <Typography
                component={NavLink}
                to={"/contacto"}
                variant="contained"
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  textDecoration: "none",
                  minWidth: "140px",
                  height: "26px",
                  fontWeight: 500,
                  ml: "3%",
                  color: "#003350",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  lineHeight: "25px",

                  borderRadius: "100px",

                  backgroundColor: "#18CC66",
                  "&:hover": {
                    borderRadius: "100px",
                    backgroundColor: "#71EAEA",
                  },
                }}
              >
                Contáctanos
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Hidden>

      <Hidden lgUp>
        <AppBar position="static" color="transparent" sx={{ boxShadow: 0 }}>
          <Toolbar sx={{ justifyContent: "space-around" }}>
            <Box
              sx={{ mt: "47px", ml: "29px", width: "125px", height: "52px" }}
            >
              <img src="/logoTyme.png" alt="logo" />
            </Box>

            <Button
              component={NavLink}
              to={"/menu"}
              variant="contained"
              sx={{
                fontFamily: "Manrope",
                textTransform: "none",
                mt: "47px",
                color: "#003350",
                textAlign: "center",
                fontSize: "16px",
                fontStyle: "normal",
                lineHeight: "20px",
                padding: "30px 40px",
                borderRadius: "100px",
                mr: "25.5px",
                backgroundColor: "#73F0A2",
                "&:hover": {
                  borderRadius: "100px",
                  backgroundColor: "#71EAEA",
                },
              }}
            >
              {" "}
              <MenuIcon />{" "}
            </Button>
          </Toolbar>
        </AppBar>
      </Hidden>
    </>
  );
};

export default NavBar;
