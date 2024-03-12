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
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Drawer from "@mui/material/Drawer";

import { useState } from "react";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

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
            zIndex:100
          }}
        >
          <Toolbar sx={{ mt: 2 }}>
            <Box ml={1} component={NavLink} to={"/"}>
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
                    color: "#73F0A2",
                  },
                }}
                component={NavLink}
                to={"/nosotros"}
              >
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
                    color: "#73F0A2",
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
                    color: "#73F0A2",
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
                    color: "#73F0A2",
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
                    color: "#73F0A2",
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
                    backgroundColor: "#18CC66",
                  },
                }}
              >
                Contáctanos
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Hidden>

      <Hidden lgUp smDown>
        <AppBar
          position="static"
          sx={{ boxShadow: 0, bgcolor: "#0A3A5B", height: "13vh" }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              mt: "2%",
              width: "93%",
              m: "auto",
            }}
          >
            <Button
              sx={{ color: "white" }}
              onClick={toggleDrawer}
              variant="text"
            >
              <MenuIcon fontSize="large" />
            </Button>

            <Box component={NavLink} to={"/"}>
              <img src="/logoM.png" alt="logo" />
            </Box>

            <Button
              component={NavLink}
              to={"/contacto"}
              variant="text"
              sx={{
                color: "white",

                "&:hover": {},
              }}
            >
              <MailOutlineIcon fontSize="large" />
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
          <Box>
            <Box display={"flex"} flexDirection={"column"} bgcolor={"#0C4A75"}>
              <AppBar
                position="static"
                sx={{ boxShadow: 0, bgcolor: "#0A3A5B", height: "13vh" }}
              >
                <Toolbar
                  sx={{
                    justifyContent: "space-between",
                    mt: "2%",
                    width: "93%",
                    m: "auto",
                  }}
                >
                  <Button
                    sx={{ color: "white" }}
                    onClick={toggleDrawer}
                    variant="text"
                  >
                    <MenuIcon fontSize="large" />
                  </Button>

                  <Box component={NavLink} to={"/"}>
                    <img src="/logoM.png" alt="logo" />
                  </Box>

                  <Button
                    sx={{ color: "white" }}
                    component={NavLink}
                    to={"/contacto"}
                    variant="text"
                  >
                    <MailOutlineIcon fontSize="large" />
                  </Button>
                </Toolbar>
              </AppBar>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  textDecoration: "none",
                  mt: 1,
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                }}
                component={NavLink}
                to={"/nosotros"}
              >
                Quiénes somos
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  textDecoration: "none",
                  mt: 1,
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
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
                  mt: 1,
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
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
                  mt: 1,
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
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
                  mt: 1,
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                }}
                component={NavLink}
                to={"/tendencias"}
              >
                Tendencias
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  textDecoration: "none",
                  mt: 1,
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                }}
                component={NavLink}
                to={"/contacto"}
              >
                Contacto
              </Typography>
            </Box>
          </Box>
        </Drawer>
      </Hidden>

      <Hidden smUp>
        <AppBar
          position="static"
          sx={{ boxShadow: 0, bgcolor: "#0A3A5B", height: "9vh", zIndex:100  }}
        >
          <Toolbar
            sx={{
              justifyContent:"space-between",
             
              width: "100%",
              m: "auto",
            }}
          >
            <Button
              sx={{ color: "white" }}
              onClick={toggleDrawer}
              variant="text"
            >
              <MenuIcon fontSize="large" />
            </Button>

            <Box component={NavLink} to={"/"}>
              <img src="/logoM.png" alt="logo" />
            </Box>

            <Button
              component={NavLink}
              to={"/contacto"}
              variant="text"
              sx={{
                color: "white",

                "&:hover": {},
              }}
            >
              <MailOutlineIcon fontSize="large" />
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
          <Box>
            <Box display={"flex"} flexDirection={"column"} bgcolor={"#0C4A75"}>
              <AppBar
                position="static"
                sx={{ boxShadow: 0, bgcolor: "#0A3A5B", height: "13vh" }}
              >
                <Toolbar
                  sx={{
                    justifyContent: "space-between",
                    mt: "2%",
                    width: "93%",
                    m: "auto",
                  }}
                >
                  <Button
                    sx={{ color: "white" }}
                    onClick={toggleDrawer}
                    variant="text"
                  >
                    <MenuIcon fontSize="large" />
                  </Button>

                  <Box component={NavLink} to={"/"}>
                    <img src="/logoM.png" alt="logo" />
                  </Box>

                  <Button
                    sx={{ color: "white" }}
                    component={NavLink}
                    to={"/contacto"}
                    variant="text"
                  >
                    <MailOutlineIcon fontSize="large" />
                  </Button>
                </Toolbar>
              </AppBar>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  textDecoration: "none",
                  mt: 2,
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                }}
                component={NavLink}
                to={"/nosotros"}
              >
                Quiénes somos
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  textDecoration: "none",
                  mt: 2,
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
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
                  mt: 2,
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
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
                  mt: 2,
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
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
                  mt: 2,
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                }}
                component={NavLink}
                to={"/tendencias"}
              >
                Tendencias
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  textDecoration: "none",
                  mt: 2,
                  mb:3,
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                }}
                component={NavLink}
                to={"/contacto"}
              >
                Contacto
              </Typography>
            </Box>
          </Box>
        </Drawer>
      </Hidden>
    </>
  );
};

export default NavBar;
