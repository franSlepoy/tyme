import { Box, Button, Hidden, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";

import { Parallax } from "react-scroll-parallax";
import GreenButtom from "../../common/greenButtom/GreenButtom";
import BlackButtom from "../../common/blackButtom/BlackButtom";

const QueHacemos = () => {
  return (
    <>
      <Hidden lgDown>
        <Parallax speed={-12} tagOuter="figure">
          <Box>
            <img width={"100%"} src="/nosotros1.png" alt="" />
          </Box>
        </Parallax>
        <Box>
          <Box sx={{ position: "absolute", top: "22%", left: "53%" }}>
            <img src="/nosotros2.png" alt="" />
          </Box>
          <Box
            sx={{ position: "absolute", top: "46% ", left: "7%", width: "52%" }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "40px",
                fontWeight: "300",
                color: "white",
              }}
            >
              Somos tus socios estratégicos para acompañar a tus equipos a dar
              un salto de crecimiento.
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: { sm: "95%", md: "90%", lg: "80%" },
              left: "7%",
            }}
          >
            <GreenButtom texto={"Conoce más"} />
          </Box>
        </Box>
        <Box width={"100%"} height={"90px"}>
          <Typography
            sx={{
              mt: "3%",
              ml: "5%",
              fontFamily: "Merriweather",
              fontSize: "42px",
              fontWeight: "200",
            }}
          >
            Nuestros servicios
          </Typography>
        </Box>

        <Box
          sx={{ width: "100%", backgroundColor: "#1296E9", minHeight: "70vh" }}
        >
          <Box sx={{ position: "absolute", mt: "75px" }}>
            <img src="/nosotros3.png" alt="" />
          </Box>
          <Box display={"flex"} width={"90%"} m={"auto"}>
            <Box width={"40%"}>
              <Typography
                mt={"178px"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "600",
                  color: "white",
                  fontSize: "64px",
                }}
              >
                HR on demand:
              </Typography>
              <Typography
                mt={"-12px"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "400",
                  fontSize: "40px",
                }}
              >
                respuesta a medida
              </Typography>
              <Box mt={"13%"}>
                <GreenButtom texto={"Consultanos"} linkTo={"/contacto"} />
              </Box>
            </Box>
            <Box ml={"12%"} width={"40%"}>
              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  position: "relative",
                }}
              >
                <Box
                  display={"flex"}
                  mt={"16%"}
                  component={NavLink}
                  to={"/eDyP"}
                  sx={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "#73F0A2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "black";
                  }}
                >
                  <img
                    style={{ height: "60px" }}
                    src="/nosotrosLogo1.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      ml: "28px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                    }}
                  >
                    <span>Evaluación,</span>{" "}
                    <span className="highlighted-text">
                      diagnóstico y planificación
                    </span>{" "}
                  </Typography>
                </Box>
              </Button>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                }}
              >
                <Box
                  display={"flex"}
                  mt={"8%"}
                  component={NavLink}
                  to={"/cultura"}
                  sx={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "#73F0A2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "black";
                  }}
                >
                  <img
                    style={{ height: "60px" }}
                    src="/nosotrosLogo2.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      ml: "28px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                    }}
                  >
                    Desarrollo de la{" "}
                    <span className="highlighted-text">
                      cultura organizacional
                    </span>{" "}
                    y liderazgos
                  </Typography>
                </Box>
              </Button>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                }}
              >
                <Box
                  display={"flex"}
                  mt={"8%"}
                  component={NavLink}
                  to={"/waze"}
                  sx={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "#73F0A2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "black";
                  }}
                >
                  <img
                    style={{ height: "50px", marginLeft: "4px" }}
                    src="/nosotrosLogo3.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      mt: "12px",
                      ml: "42px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                    }}
                  >
                    <span className="highlighted-text">Waze laboral</span>
                  </Typography>
                </Box>
              </Button>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                }}
              >
                <Box
                  display={"flex"}
                  mt={"8%"}
                  component={NavLink}
                  to={"/acompañamiento"}
                  sx={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "#73F0A2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "black";
                  }}
                >
                  <img
                    style={{ height: "40px", marginLeft: "3px" }}
                    src="/nosotrosLogo4.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      mt: -2,
                      ml: "38px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                    }}
                  >
                    Acompañamiento para{" "}
                    <span className="highlighted-text">certificaciones</span>
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{ width: "100%", backgroundColor: "#18CC66", minHeight: "70vh" }}
        >
          <Box sx={{ position: "absolute" }}>
            <img src="/nosotros4.png" alt="" />
          </Box>
          <Box display={"flex"} width={"90%"} m={"auto"}>
            <Box width={"40%"}>
              <Typography
                mt={"105px"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  color: "white",
                  fontSize: "64px",
                }}
              >
                HR on demand:
              </Typography>
              <Typography
                mt={"-12px"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "400",
                  fontSize: "40px",
                  width: "330px",
                }}
              >
                tecnología para la gestión del capital humano
              </Typography>
              <Box mt={"6%"}>
                <BlackButtom texto={"Consultanos"} linkTo={"/contacto"} />
              </Box>
            </Box>

            <Box ml={"12%"} mt={"7%"} width={"40%"}>
              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Box
                  display={"flex"}
                  mt={"22%"}
                  component={NavLink}
                  to={"/mentoring"}
                  sx={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "#73F0A2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "black";
                  }}
                >
                  <img
                    style={{ height: "42px" }}
                    src="/nosotrosLogo5.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      ml: "28px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                    }}
                  >
                    <span className="highlighted-text">Mentoring</span> {""}
                    personalizado
                  </Typography>
                </Box>
              </Button>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "blue",
                  },
                }}
              >
                <Box
                  display={"flex"}
                  mt={"8%"}
                  component={NavLink}
                  to={"/tYe"}
                  sx={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "#73F0A2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "black";
                  }}
                >
                  <img
                    className="highlighted-image"
                    style={{ height: "46px", marginTop: 12 }}
                    src="/nosotrosLogo6.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      ml: "28px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                    }}
                  >
                    Training y{" "}
                    <span className="highlighted-text">
                      educación en innovación
                    </span>{" "}
                    {""} tecnológica
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Hidden>

      <Hidden lgUp smDown>
        <Parallax speed={-12} tagOuter="figure">
          <Box mt={-1}>
            <img width={"100%"} src="/nosotros1.png" alt="" />
          </Box>
        </Parallax>
        <Box>
          <Box sx={{ position: "absolute", top: "22%", left: "40.6%" }}>
            <img width={"100%"} src="/nosotros2.png" alt="" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "26% ",
              left: "7%",
              width: "500px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "2em",
                fontWeight: "300",
                color: "white",
              }}
            >
              Somos tus socios estratégicos para acompañar a tus equipos a dar
              un salto de crecimiento.
            </Typography>
          </Box>
        </Box>
        <Box width={"100%"} height={"90px"}>
          <Typography
            sx={{
              mt: "3%",
              ml: "5%",
              fontFamily: "Merriweather",
              fontSize: "42px",
              fontWeight: "200",
            }}
          >
            Nuestros servicios
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            backgroundColor: "#1296E9",
            minHeight: "70vh",
            pb: "5%",
            pt: "5%",
          }}
        >
          <Box sx={{ position: "absolute", mt: "75px" }}>
            <img width={"100%"} src="/nosotros3.png" alt="" />
          </Box>
          <Box display={"flex"} width={"90%"} m={"auto"}>
            <Box width={"40%"}>
              <Typography
                mt={"20%"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "600",
                  color: "white",
                  fontSize: "64px",
                }}
              >
                HR on demand:
              </Typography>
              <Typography
                mt={"-12px"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "400",
                  fontSize: "40px",
                }}
              >
                respuesta a medida
              </Typography>
              <Box mt={"13%"}>
                <GreenButtom texto={"Consultanos"} linkTo={"/contacto"} />
              </Box>
            </Box>
            <Box ml={"12%"} width={"40%"}>
              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  position: "relative",
                }}
              >
                <Box
                  display={"flex"}
                  mt={"6%"}
                  component={NavLink}
                  to={"/eDyP"}
                  sx={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "#73F0A2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "black";
                  }}
                >
                  <img
                    style={{ height: "60px" }}
                    src="/nosotrosLogo1.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      ml: "28px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                    }}
                  >
                    <span>Evaluación,</span>{" "}
                    <span className="highlighted-text">
                      diagnóstico y planificación
                    </span>{" "}
                  </Typography>
                </Box>
              </Button>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                }}
              >
                <Box
                  display={"flex"}
                  mt={"8%"}
                  component={NavLink}
                  to={"/cultura"}
                  sx={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "#73F0A2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "black";
                  }}
                >
                  <img
                    style={{ height: "60px" }}
                    src="/nosotrosLogo2.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      ml: "28px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                    }}
                  >
                    Desarrollo de la{" "}
                    <span className="highlighted-text">
                      cultura organizacional
                    </span>{" "}
                    y liderazgos
                  </Typography>
                </Box>
              </Button>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                }}
              >
                <Box
                  display={"flex"}
                  mt={"8%"}
                  component={NavLink}
                  to={"/waze"}
                  sx={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "#73F0A2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "black";
                  }}
                >
                  <img
                    style={{ height: "50px", marginLeft: "4px" }}
                    src="/nosotrosLogo3.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      mt: "12px",
                      ml: "42px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                    }}
                  >
                    <span className="highlighted-text">Waze laboral</span>
                  </Typography>
                </Box>
              </Button>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                }}
              >
                <Box
                  display={"flex"}
                  mt={"8%"}
                  component={NavLink}
                  to={"/acompañamiento"}
                  sx={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "#73F0A2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "black";
                  }}
                >
                  <img
                    style={{ height: "40px", marginLeft: "3px" }}
                    src="/nosotrosLogo4.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      mt: -2,
                      ml: "38px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                    }}
                  >
                    Acompañamiento para{" "}
                    <span className="highlighted-text">certificaciones</span>
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{ width: "100%", backgroundColor: "#18CC66", minHeight: "70vh" }}
        >
          <Box sx={{ position: "absolute" }}>
            <img width={"100%"} src="/nosotros4.png" alt="" />
          </Box>
          <Box display={"flex"} width={"90%"} m={"auto"}>
            <Box width={"40%"}>
              <Typography
                mt={"20%"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  color: "white",
                  fontSize: "64px",
                }}
              >
                HR on demand:
              </Typography>
              <Typography
                mt={"-12px"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "400",
                  fontSize: "40px",
                  width: "530px",
                }}
              >
                respuesta a medida
              </Typography>
              <Box mt={"6%"}>
                <BlackButtom texto={"Consultanos"} linkTo={"/contacto"} />
              </Box>
            </Box>

            <Box ml={"12%"} mt={"7%"} width={"40%"}>
              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Box
                  display={"flex"}
                  mt={"22%"}
                  component={NavLink}
                  to={"/mentoring"}
                  sx={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "#73F0A2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "black";
                  }}
                >
                  <img
                    style={{ height: "42px" }}
                    src="/nosotrosLogo5.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      ml: "28px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                    }}
                  >
                    <span className="highlighted-text">Mentoring</span> {""}
                    personalizado
                  </Typography>
                </Box>
              </Button>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "blue",
                  },
                }}
              >
                <Box
                  display={"flex"}
                  mt={"8%"}
                  component={NavLink}
                  to={"/tYe"}
                  sx={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "#73F0A2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "black";
                  }}
                >
                  <img
                    className="highlighted-image"
                    style={{ height: "46px", marginTop: 12 }}
                    src="/nosotrosLogo6.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      ml: "28px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                    }}
                  >
                    Training y{" "}
                    <span className="highlighted-text">
                      educación en innovación
                    </span>{" "}
                    {""} tecnológica
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Parallax speed={-12} tagOuter="figure">
          <Box width={"100%"} mt={-4}>
            <img
              style={{ objectFit: "cover" }}
              height={"470vh"}
              width={"100%"}
              src="/nosotros1.png"
              alt=""
            />
          </Box>
        </Parallax>
        <Box>
          <Box
            sx={{
              position: "absolute",
              top: "26% ",
              left: "7%",
              width: "70%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "2em",
                fontWeight: "300",
                color: "white",
              }}
            >
              Somos tus socios estratégicos para acompañar a tus equipos a dar
              un salto de crecimiento.
            </Typography>
          </Box>
        </Box>
        <Box width={"100%"} height={"10vh"}>
          <Typography
            sx={{
              mt: "33%",
              ml: "5%",
              fontFamily: "Merriweather",
              fontSize: "32px",
              fontWeight: "200",
            }}
          >
            Nuestros servicios
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            backgroundColor: "#1296E9",
            minHeight: "70vh",
            pb: 5,
            pt: 1,
          }}
        >
          <Box width={"100%"}>
            <Box width={"95%"} textAlign={"center"}>
              <Typography
                mt={"20%"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "600",
                  color: "white",
                  fontSize: "44px",
                }}
              >
                HR on demand:
              </Typography>
              <Typography
                mt={"-12px"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "400",
                  fontSize: "30px",
                }}
              >
                respuesta a medida
              </Typography>
              <Box mt={"4%"}>
                <GreenButtom texto={"Consultanos"} linkTo={"/contacto"} />
              </Box>
            </Box>

            <Box mt={5} width={"100%"}>
              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Box
                  component={NavLink}
                  to={"/eDyP"}
                  sx={{ textDecoration: "none" }}
                >
                  <img
                    style={{ height: "60px" }}
                    src="/nosotrosLogo1.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    <span>Evaluación,</span>{" "}
                    <span className="highlighted-text">
                      diagnóstico y planificación
                    </span>{" "}
                  </Typography>
                </Box>
              </Button>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Box
                  component={NavLink}
                  to={"/cultura"}
                  sx={{ textDecoration: "none" }}
                >
                  <img
                    style={{ height: "60px" }}
                    src="/nosotrosLogo2.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                      textAlign: "center",
                      p:2
                    }}
                  >
                    Cultura organizacional y liderazgo
                  </Typography>
                </Box>
              </Button>

              <Button
                disableRipple
                style={{
                
                  textTransform: "none",
                  width:"100vw",
                  position: "relative",
                }}
              >
                <Box
                
                  component={NavLink}
                  to={"/waze"}
                  sx={{ textDecoration: "none" }}
                >
                  <img
                    style={{ height: "60px" }}
                    src="/nosotrosLogo3.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                      textAlign: "center",
                      p:2,
                      width:"100%"
                    }}
                  >
                   Waze Laboral
                  </Typography>
                </Box>
              </Button>

              <Button
                disableRipple
                style={{
                  width:"100vw",
                  textTransform: "none",
                  textAlign: "center",
                  color: "black",
                }}
              >
                <Box
                  mt={"8%"}
                  component={NavLink}
                  to={"/acompañamiento"}
                  sx={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "#73F0A2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(
                      ".highlighted-text"
                    ).style.color = "black";
                  }}
                >
                  <img
                    style={{ height: "40px" }}
                    src="/nosotrosLogo4.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      m: "auto",
                      width: "300px",
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                    }}
                  >
                    Acompañamiento para{" "}
                    <span className="highlighted-text">certificaciones</span>
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            backgroundColor: "#18CC66",
            minHeight: "70vh",
            pt: 1,
            pb: 5,
          }}
        >
           <Box width={"100%"}>
            <Box width={"95%"} textAlign={"center"}>
              <Typography
                mt={"20%"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "600",
                  color: "white",
                  fontSize: "44px",
                }}
              >
                HR on demand:
              </Typography>
              <Typography
                mt={"-12px"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "400",
                  fontSize: "30px",
                }}
              >
                respuesta a medida
              </Typography>
              <Box mt={"4%"}>
                <BlackButtom texto={"Consultanos"} linkTo={"/contacto"} />
              </Box>
            </Box>

            <Box mt={5} width={"100%"}>
              <Button
              
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "center",
                  position: "relative",
                  width:"100vw"
                }}
              >
                <Box
                  component={NavLink}
                  to={"/mentoring"}
                  sx={{ textDecoration: "none" }}
                >
                  <img
                    style={{ height: "60px" }}
                    src="/nosotrosLogo5.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Mentoring personalizado
                  </Typography>
                </Box>
              </Button>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Box
                  component={NavLink}
                  to={"/tYe"}
                  sx={{ textDecoration: "none" }}
                >
                  <img
                    style={{ height: "60px" }}
                    src="/nosotrosLogo6.png"
                    alt=""
                  />
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      fontSize: "30px",
                      lineHeight: "34px",
                      color: "black",
                      textAlign: "center",
                      p:2
                    }}
                  >
                    Training en innovación tecnológica
                  </Typography>
                </Box>
              </Button>

              <Button
                disableRipple
                style={{
                
                  textTransform: "none",
                  width:"100vw",
                  position: "relative",
                }}
              >
              
              </Button>

            
            </Box>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default QueHacemos;
