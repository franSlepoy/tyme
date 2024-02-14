import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, NavLink } from "react-router-dom";
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
            <Box sx={{ display: "flex" }}>
              <Box sx={{ mt: "47px" }}>
                <a style={{ textDecoration: "none" }} href="/">
                  <img src="/logoFooter.png" alt="logo" />
                </a>
              </Box>
              <Box sx={{ ml: "86px", mt: "42px" }}>
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

              <Box sx={{ width: "181px", ml: "18px", mt: "56px" }}></Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    ml: "70vh",
                    mt: "56px",
                    textAlign: "end",
                  }}
                >
                  <Box>
                    <a
                      href="https://www.linkedin.com/company/tymeconsulting/"
                      color="#003350"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon sx={{ fontSize: 46, color: "white",  }} />
                    </a>
                  </Box>

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
                        }}
                      />
                    </a>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    ml: "5ovh",
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
                    ml: "51vh",
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
            p: 2,
            mt: "100px",
            backgroundColor: "#F9F9F9",
            width: "100%",
            height: "477px",
          }}
        >
          <Box sx={{ ml: 3, width: "125px" }}>
            <img src="/logoTyme.png" alt="logo" />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "90px", ml: 3, mt: 4 }}>
              <a style={{ textDecoration: "none" }} href="/">
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    color: "#003350",
                    fontSize: "16px",
                    fontWeight: "300",
                    lineHeight: "20px",
                    letterSpacing: "0.1px",
                  }}
                >
                  Inicio
                </Typography>
              </a>
              <Link to={"/nosotros"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    mt: "11px",
                    fontFamily: "Manrope",
                    color: "#003350",
                    fontSize: "16px",
                    fontWeight: "300",
                    lineHeight: "20px",
                    letterSpacing: "0.1px",
                  }}
                >
                  Nosotros
                </Typography>
              </Link>
              <Link to={"/queHacemos"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    mt: "11px",
                    fontFamily: "Manrope",
                    color: "#003350",
                    fontSize: "16px",
                    fontWeight: "300",
                    lineHeight: "20px",
                    letterSpacing: "0.1px",
                  }}
                >
                  Qué hacemos
                </Typography>
              </Link>
              <Link to={"/manifiesto"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    mt: "11px",
                    fontFamily: "Manrope",
                    color: "#003350",
                    fontSize: "16px",
                    fontWeight: "300",
                    lineHeight: "20px",
                    letterSpacing: "0.1px",
                  }}
                >
                  Manifiesto
                </Typography>
              </Link>
            </Box>

            <Box sx={{ width: "100%", ml: 6, mt: 4 }}>
              <Link to={"/ticTacElTiempo"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    color: "#003350",
                    fontSize: "16px",
                    fontWeight: "300",
                    lineHeight: "20px",
                    letterSpacing: "0.1px",
                  }}
                >
                  Tic Tac: el tiempo
                </Typography>
              </Link>
              <Link
                to={"/charlasYconferencias"}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    mt: "11px",
                    fontFamily: "Manrope",
                    color: "#003350",
                    fontSize: "16px",
                    fontWeight: "300",
                    lineHeight: "20px",
                    letterSpacing: "0.1px",
                  }}
                >
                  Charlas y Conferencias
                </Typography>
              </Link>
              <Link to={"/tendencias"} style={{ textDecoration: "none" }}>
                {" "}
                <Typography
                  sx={{
                    mt: "11px",
                    fontFamily: "Manrope",
                    color: "#003350",
                    fontSize: "16px",
                    fontWeight: "300",
                    lineHeight: "20px",
                    letterSpacing: "0.1px",
                  }}
                >
                  Tendencias
                </Typography>
              </Link>
              <Link to={"/contacto"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    mt: "11px",
                    fontFamily: "Manrope",
                    color: "#003350",
                    fontSize: "16px",
                    fontWeight: "300",
                    lineHeight: "20px",
                    letterSpacing: "0.1px",
                  }}
                >
                  Contacto
                </Typography>
              </Link>
            </Box>
          </Box>

          <Box ml={3}>
            <Box sx={{ display: "flex", mt: "56px" }}>
              <Box>
                <a
                  href="https://www.linkedin.com/company/tymeconsulting/"
                  color="#003350"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon sx={{ fontSize: 46, color: "#003350" }} />
                </a>
              </Box>

              {/*  <Box mt={"4px"}>
    <a href="https://twitter.com/tymeconsulting" color="#003350" target="_blank" rel="noopener noreferrer"  >
     <img  width={70} src="/twiter.png" alt="" />
    </a>
    </Box> */}

              {/* <Link href="URL_de_Facebook" color="inherit" target="_blank" rel="noopener noreferrer">
      <FacebookIcon sx={{ fontSize: 46, color: "#003350" }}  />
    </Link> */}
              <Box>
                <a
                  href="https://www.instagram.com/tymeconsulting/"
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon sx={{ fontSize: 46, color: "#003350" }} />
                </a>
              </Box>
            </Box>
            <Typography
              sx={{
                mt: 2,
                fontFamily: "Manrope",
                color: "#003350",
                fontSize: "16px",
                fontWeight: "300",
                lineHeight: "20px",
                letterSpacing: "0.1px",
              }}
            >
              2023 © Tyme.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Manrope",
                color: "#003350",
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
      </Hidden>
    </>
  );
}
