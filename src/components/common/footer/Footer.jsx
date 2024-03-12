import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";
import { Hidden } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Hidden smDown>
        <Box
          sx={{
            backgroundColor: "#07659C",
            width: "100%",
            height: "277px",
          }}
        >
          <Box width={"88%"} m={"auto"}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ mt: "47px" }}>
                <a style={{ textDecoration: "none" }} href="/">
                  <img src="/logoFooter.png" alt="logo" />
                </a>
              </Box>

              <Box sx={{ mt: "42px", width: "62%", pl: 5 }}>
                <Link to={"/nosotros"} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      mt: "11px",
                      fontFamily: "Manrope",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: 100,
                      lineHeight: "20px",
                      letterSpacing: "0.1px",
                      "&:hover": {
                        color: "#73F0A2",
                      },
                    }}
                  >
                    Quiénes somos
                  </Typography>
                </Link>
                <Link to={"/queHacemos"} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      mt: 1,
                      fontFamily: "Manrope",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: 100,
                      lineHeight: "20px",
                      letterSpacing: "0.1px",
                      "&:hover": {
                        color: "#73F0A2",
                      },
                    }}
                  >
                    Qué hacemos
                  </Typography>
                </Link>
                <Link to={"/manifiesto"} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      mt: 1,
                      fontFamily: "Manrope",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "100",
                      lineHeight: "20px",
                      letterSpacing: "0.1px",
                      "&:hover": {
                        color: "#73F0A2",
                      },
                    }}
                  >
                    Manifiesto: el valor del tiempo
                  </Typography>
                </Link>
                <Link
                  to={"/charlasYconferencias"}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      mt: 1,
                      fontFamily: "Manrope",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "100",
                      lineHeight: "20px",
                      letterSpacing: "0.1px",
                      "&:hover": {
                        color: "#73F0A2",
                      },
                    }}
                  >
                    Charlas y Conferencias
                  </Typography>
                </Link>
                <Link to={"/tendencias"} style={{ textDecoration: "none" }}>
                  {" "}
                  <Typography
                    sx={{
                      mt: 1,
                      fontFamily: "Manrope",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "100",
                      lineHeight: "20px",
                      letterSpacing: "0.1px",
                      "&:hover": {
                        color: "#73F0A2",
                      },
                    }}
                  >
                    Tendencias
                  </Typography>
                </Link>
                <Link to={"/contacto"} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      mt: 1,
                      fontFamily: "Manrope",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "100",
                      lineHeight: "20px",
                      letterSpacing: "0.1px",
                      "&:hover": {
                        color: "#73F0A2",
                      },
                    }}
                  >
                    Contacto
                  </Typography>
                </Link>
              </Box>

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mt: "56px",
                  }}
                >
                  <Box>
                    <a
                      href="https://www.linkedin.com/company/tymeconsulting/"
                      color="#003350"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon sx={{ fontSize: 46, color: "white" }} />
                    </a>
                  </Box>

                  {/* <Box>
                    <a
                      href="https://www.linkedin.com/company/tymeconsulting/"
                      color="#003350"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <XIcon sx={{ fontSize: 40, color: "white", mt:0.5, ml:1  }} />
                    </a>
                  </Box> */}

                  <Box>
                    <a
                      href="https://www.instagram.com/tymeconsulting/"
                      color="inherit"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon
                        sx={{
                          fontSize: 46,
                          color: "white",
                          textAlign: "end",
                          ml: 1,
                        }}
                      />
                    </a>
                  </Box>
                </Box>

                <Typography
                  sx={{
                    mt: "9%",
                    fontFamily: "Manrope",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "300",
                    lineHeight: "20px",
                    letterSpacing: "0.1px",
                    textAlign: "end",
                  }}
                >
                  2023 © Tyme.
                </Typography>
                <Typography
                  sx={{
                    minWidth: "232px",

                    fontFamily: "Manrope",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "300",
                    lineHeight: "20px",
                    letterSpacing: "0.1px",
                  }}
                >
                  Todos los derechos reservados.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box
          sx={{
            backgroundColor: "#07659C",
            width: "100%",
            height: "277px",
          }}
        >
          <Box width={"80%"} m={"auto"}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ mt: "47px" }}>
                <a style={{ textDecoration: "none" }} href="/">
                  <img width={"80%"} src="/logoFooter.png" alt="logo" />
                </a>
              </Box>

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mt: "56px",
                  }}
                >
                  <Box>
                    <a
                      href="https://www.linkedin.com/company/tymeconsulting/"
                      color="#003350"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon sx={{ fontSize: 40, color: "white" }} />
                    </a>
                  </Box>

                  {/* <Box>
                    <a
                      href="https://www.linkedin.com/company/tymeconsulting/"
                      color="#003350"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <XIcon sx={{ fontSize: 40, color: "white", mt:0.5, ml:1  }} />
                    </a>
                  </Box> */}

                  <Box>
                    <a
                      href="https://www.instagram.com/tymeconsulting/"
                      color="inherit"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon
                        sx={{
                          fontSize: 40,
                          color: "white",
                          textAlign: "end",
                          ml: 1,
                        }}
                      />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Typography
              sx={{
                mt: "9%",
                fontFamily: "Manrope",
                color: "white",
                fontSize: "13px",
                fontWeight: "200",
                lineHeight: "20px",
                letterSpacing: "0.1px",
              }}
            >
              2023 © Tyme.
            </Typography>
            <Typography
              sx={{
                minWidth: "232px",

                fontFamily: "Manrope",
                color: "white",
                fontSize: "13px",
                fontWeight: "200",
                lineHeight: "20px",
                letterSpacing: "0.1px",
              }}
            >
              Todos los derechos reservados.
            </Typography>
          </Box>
        </Box>
      </Hidden>
    </>
  );
}
