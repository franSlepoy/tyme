import { Box, Button, Dialog, Hidden, Typography } from "@mui/material";

import { Parallax } from "react-scroll-parallax";
import GreenButtom from "../../common/greenButtom/GreenButtom";
import BlackButtom from "../../common/blackButtom/BlackButtom";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import CarouselEv from "../../common/onDemand/CarouselEv";
import CarouselCultura from "../../common/onDemand/CarouselCultura";
import CarouselWaze from "../../common/onDemand/CarouselWaze";
import CarouselAcom from "../../common/onDemand/CarouselAcom";
import CarouselMentoring from "../../common/onDemand/CarouselMentoring";
import CarouselTrai from "../../common/onDemand/CarouselTrai";

const QueHacemos = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [openModal6, setOpenModal6] = useState(false);

  const handleOpenModal1 = () => {
    setOpenModal1(true);
  };

  const handleCloseModal1 = () => {
    setOpenModal1(false);
  };
  const handleOpenModal2 = () => {
    setOpenModal2(true);
  };

  const handleCloseModal2 = () => {
    setOpenModal2(false);
  };
  const handleOpenModal3 = () => {
    setOpenModal3(true);
  };

  const handleCloseModal3 = () => {
    setOpenModal3(false);
  };
  const handleOpenModal4 = () => {
    setOpenModal4(true);
  };

  const handleCloseModal4 = () => {
    setOpenModal4(false);
  };
  const handleOpenModal5 = () => {
    setOpenModal5(true);
  };

  const handleCloseModal5 = () => {
    setOpenModal5(false);
  };
  const handleOpenModal6 = () => {
    setOpenModal6(true);
  };

  const handleCloseModal6 = () => {
    setOpenModal6(false);
  };

  return (
    <>
      <Hidden lgDown>
        <Parallax speed={-6} tagOuter="figure">
          <Box>
            <img
               style={{ objectFit: "cover", height: "700px", width: "100%" }}
              src="/nosotros1.png"
              alt=""
            />
          </Box>
        </Parallax>
        <Box>
          <Box sx={{ position: "absolute", top: "200px", left: "53%" }}>
            <img width={"100%"} src="/nosotros2.png" alt="" />
          </Box>
          <Box
            sx={{ position: "absolute", top: "350px ", left: "7%", width: "52%" }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "36px",
                lineHeight: "44px",
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
              top: "550px",
              left: "7%",
            }}
          >
            <ScrollLink to="seccionDestino" smooth={true}>
              <GreenButtom texto={"Conoce más"} />
            </ScrollLink>
          </Box>
        </Box>
        <Box width={"100%"} height={"90px"} id={"seccionDestino"}>
          <Typography
            sx={{
              mt: "4%",
              ml: "7%",
              fontFamily: "Merriweather",
              fontSize: "42px",
              fontWeight: "200",
            }}
          >
            Nuestros servicios
          </Typography>
        </Box>

        <Box sx={{ width: "100%", backgroundColor: "#1296E9", pb: "5%" }}>
          <Box sx={{ position: "absolute", mt: "75px" }}>
            <img width={"100%"} src="/nosotros3.png" alt="" />
          </Box>
          <Box display={"flex"} width={"90%"} m={"auto"}>
            <Box width={"43%"}>
              <Typography
                mt={"30%"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "600",
                  color: "white",
                  fontSize: "64px",
                  ml: "5.5%",
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
                  ml: "5.5%",
                }}
              >
                respuesta a medida
              </Typography>
              <Box mt={"5.5%"} ml={"7%"}>
                <GreenButtom texto={"Consúltanos"} linkTo={"/contacto"} />
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
                  onClick={handleOpenModal1}
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

              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal1}
                onClose={handleCloseModal1}
              >
                <CarouselEv
                  handleOpenModal1={handleOpenModal1}
                  handleCloseModal1={handleCloseModal1}
                  openModal1={openModal1}
                />
              </Dialog>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                }}
              >
                <Box
                  onClick={handleOpenModal2}
                  display={"flex"}
                  mt={"8%"}
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

              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal2}
                onClose={handleCloseModal2}
              >
                <CarouselCultura
                  handleOpenModal2={handleOpenModal2}
                  handleCloseModal2={handleCloseModal2}
                  openModal2={openModal2}
                />
              </Dialog>

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
                  onClick={handleOpenModal3}
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

              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal3}
                onClose={handleCloseModal3}
              >
                <CarouselWaze
                  handleOpenModal3={handleOpenModal3}
                  handleCloseModal3={handleCloseModal3}
                  openModal3={openModal3}
                />
              </Dialog>

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
                  onClick={handleOpenModal4}
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

              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal4}
                onClose={handleCloseModal4}
              >
                <CarouselAcom
                  handleOpenModal4={handleOpenModal4}
                  handleCloseModal4={handleCloseModal4}
                  openModal4={openModal4}
                />
              </Dialog>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{ width: "100%", backgroundColor: "#18CC66", pt: "8%", pb: "8%" }}
        >
          <Box sx={{ position: "absolute" }}>
            <img width={"100%"} src="/nosotros4.png" alt="" />
          </Box>
          <Box display={"flex"} width={"90%"} m={"auto"}>
            <Box width={"43%"}>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  color: "white",
                  fontSize: "64px",
                  ml: "5.5%",
                }}
              >
                HR Tech Trends
              </Typography>
              <Typography
                mt={"-12px"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "400",
                  fontSize: "40px",
                  width: "105%",
                  ml: "5.5%",
                }}
              >
                tecnología para la gestión del capital humano
              </Typography>
              <Box mt={"6%"} ml={"5.5%"}>
                <BlackButtom texto={"Consúltanos"} linkTo={"/contacto"} />
              </Box>
            </Box>

            <Box ml={"12%"} width={"40%"}>
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
                  onClick={handleOpenModal5}
                  display={"flex"}
                  mt={"5%"}
                  sx={{
                    textDecoration: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
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

              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal5}
                onClose={handleCloseModal5}
              >
                <CarouselMentoring
                  handleOpenModal5={handleOpenModal5}
                  handleCloseModal5={handleCloseModal5}
                  openModal5={openModal5}
                />
              </Dialog>

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
                  onClick={handleOpenModal6}
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

              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal6}
                onClose={handleCloseModal6}
              >
                <CarouselTrai
                  handleOpenModal6={handleOpenModal6}
                  handleCloseModal6={handleCloseModal6}
                  openModal6={openModal6}
                />
              </Dialog>
            </Box>
          </Box>
        </Box>
      </Hidden>

      <Hidden lgUp smDown>
        <Parallax speed={-6} tagOuter="figure">
          <Box mt={-2}>
            <img
              style={{ objectFit: "cover", height: "700px", width: "100%" }}
              src="/nosotros1.png"
              alt=""
            />
          </Box>
        </Parallax>
        <Box>
          <Box sx={{ position: "absolute", top: "15%", left: "40.6%" }}>
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
              mt: "5%",
              ml: "5%",
              fontFamily: "Merriweather",
              fontSize: "42px",
              fontWeight: "200",
            }}
          >
            Nuestros servicios
          </Typography>
        </Box>

        <Box sx={{ width: "100%", backgroundColor: "#1296E9", pb: "5%" }}>
          <Box sx={{ position: "absolute", mt: "75px" }}>
            <img width={"100%"} src="/nosotros3.png" alt="" />
          </Box>
          <Box display={"flex"} width={"90%"} m={"auto"}>
            <Box width={"40%"}>
              <Typography
                mt={"30%"}
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
              <Box mt={"6%"}>
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
                  onClick={handleOpenModal1}
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

              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal1}
                onClose={handleCloseModal1}
              >
                <CarouselEv
                  handleOpenModal1={handleOpenModal1}
                  handleCloseModal1={handleCloseModal1}
                  openModal1={openModal1}
                />
              </Dialog>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "initial",
                  color: "black",
                }}
              >
                <Box
                  onClick={handleOpenModal2}
                  display={"flex"}
                  mt={"8%"}
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

              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal2}
                onClose={handleCloseModal2}
              >
                <CarouselCultura
                  handleOpenModal2={handleOpenModal2}
                  handleCloseModal2={handleCloseModal2}
                  openModal2={openModal2}
                />
              </Dialog>

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
                  onClick={handleOpenModal3}
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

              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal3}
                onClose={handleCloseModal3}
              >
                <CarouselWaze
                  handleOpenModal3={handleOpenModal3}
                  handleCloseModal3={handleCloseModal3}
                  openModal3={openModal3}
                />
              </Dialog>

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
                  onClick={handleOpenModal4}
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

              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal4}
                onClose={handleCloseModal4}
              >
                <CarouselAcom
                  handleOpenModal4={handleOpenModal4}
                  handleCloseModal4={handleCloseModal4}
                  openModal4={openModal4}
                />
              </Dialog>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{ width: "100%", backgroundColor: "#18CC66", pt: "8%", pb: "8%" }}
        >
          <Box sx={{ position: "absolute" }}>
            <img width={"100%"} src="/nosotros4.png" alt="" />
          </Box>
          <Box display={"flex"} width={"90%"} m={"auto"}>
            <Box width={"40%"}>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  color: "white",
                  fontSize: "64px",
                }}
              >
                HR Tech Trends
              </Typography>
              <Typography
                mt={"-12px"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "400",
                  fontSize: "40px",
                  width: "105%",
                }}
              >
                tecnología para la gestión del capital humano
              </Typography>
              <Box mt={"6%"}>
                <BlackButtom texto={"Consultanos"} linkTo={"/contacto"} />
              </Box>
            </Box>

            <Box ml={"12%"} width={"40%"}>
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
                  onClick={handleOpenModal5}
                  display={"flex"}
                  mt={"5%"}
                  sx={{
                    textDecoration: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
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

              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal5}
                onClose={handleCloseModal5}
              >
                <CarouselMentoring
                  handleOpenModal5={handleOpenModal5}
                  handleCloseModal5={handleCloseModal5}
                  openModal5={openModal5}
                />
              </Dialog>

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
                  onClick={handleOpenModal6}
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

              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal6}
                onClose={handleCloseModal6}
              >
                <CarouselTrai
                  handleOpenModal6={handleOpenModal6}
                  handleCloseModal6={handleCloseModal6}
                  openModal6={openModal6}
                />
              </Dialog>
            </Box>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        {/*  <Parallax speed={-12} tagOuter="figure"> */}
        <Box width={"100%"} zIndex={2}>
          <img width={"100%"} src="/mobileQueHacemos.png" alt="" />
        </Box>
        {/*     </Parallax> */}
        {/* <Box>
          <Box
            sx={{
              position: "absolute",
              top: "12% ",
              left: "10%",
              width: "80%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: "400",
                color: "white",
              }}
            >
              Qué hacemos
            </Typography>
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontSize: "30px",
                fontWeight: "300",
                lineHeight: "40px",
                color: "white",
                width:"80%",
                mt:4
              }}
            >
              Somos tus socios estratégicos para acompañar a tus equipos a dar
              un salto de crecimiento
            </Typography>
          </Box>
        </Box> */}

        <Box
          id={"seccionDestino"}
          sx={{
            width: "100%",
            background: "linear-gradient(to bottom, #1296E9, #39B3FF, #1779B6)",

            pb: 5,
            pt: 5,
            mt: -1,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "20px",
                fontWeight: "500",
                width: "86%",
                textAlign: "center",
                m: "auto",
              }}
            >
              Diseñamos soluciones a medida de las necesidades de tu empresa,
              alineadas con tus objetivos de negocios, a través de dos tipos de
              servicios:
            </Typography>
          </Box>

          <Box width={"90%"} m={"auto"}>
            <Box mt={6} textAlign={"center"}>
              <img src="/hrmobile.png" alt="" />
            </Box>

            <Box
              width={"85%"}
              m={"auto"}
              textAlign={"center"}
              mt={-5}
              pt={5}
              pr={3}
              pl={3}
              pb={3}
              bgcolor={"#14A4FF"}
            >
              <Typography
                mt={"2%"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "100",
                  color: "white",
                  fontSize: "39px",
                }}
              >
                On demand:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Merriweather",
                  fontWeight: "100",
                  fontSize: "18px",
                  lineHeight: "25px",
                }}
              >
                Respuesta a medida
              </Typography>
            </Box>

            <Box mt={5} width={"100%"}>
              <Button
                disableRipple
                style={{
                  width: "96%",
                  textTransform: "none",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Box
                  m={"auto"}
                  onClick={handleOpenModal1}
                  sx={{ textDecoration: "none" }}
                >
                  <img src="/qhBlanco1.png" alt="" />
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      fontSize: "22px",
                      lineHeight: "34px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Evaluación y diagnóstico
                  </Typography>
                </Box>
              </Button>

              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal1}
                onClose={handleCloseModal1}
              >
                <CarouselEv />
              </Dialog>

              <Button
                disableRipple
                style={{
                  width: "96%",
                  textTransform: "none",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Box onClick={handleOpenModal2} sx={{ textDecoration: "none" }}>
                  <img style={{ height: "60px" }} src="/qhblanco2.png" alt="" />
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      fontSize: "22px",
                      lineHeight: "34px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Cultura organizacional y liderazgo
                  </Typography>
                </Box>
              </Button>

              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal2}
                onClose={handleCloseModal2}
              >
                <CarouselCultura />
              </Dialog>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  width: "96%",
                  position: "relative",
                }}
              >
                <Box onClick={handleOpenModal3} sx={{ textDecoration: "none" }}>
                  <img style={{ height: "60px" }} src="/qhblanco3.png" alt="" />
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      fontSize: "22px",
                      lineHeight: "34px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Waze Laboral
                  </Typography>
                </Box>
              </Button>
              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal3}
                onClose={handleCloseModal3}
              >
                <CarouselWaze />
              </Dialog>

              <Button
                disableRipple
                style={{
                  width: "96%",
                  textTransform: "none",
                  textAlign: "center",
                  color: "black",
                }}
              >
                <Box
                  width={"90%"}
                  mt={"8%"}
                  onClick={handleOpenModal4}
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
                  <img style={{ height: "40px" }} src="/qhblanco4.png" alt="" />
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      fontSize: "22px",
                      lineHeight: "34px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Certificaciones
                  </Typography>
                </Box>
              </Button>
              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal4}
                onClose={handleCloseModal4}
              >
                <CarouselAcom />
              </Dialog>
            </Box>
          </Box>
          <Box mt={3} mb={3} textAlign={"center"}>
            <BlackButtom texto={"Conocé más"} linkTo={"contacto"} />
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            background: "linear-gradient(to bottom, #18CC66, #17E36F, #18BA5E)",

            minHeight: "70vh",
            pt: 1,
            pb: 5,
          }}
        >
          <Box width={"100%"}>
            <Box pt={4} textAlign={"center"}>
              <img src="/hrmobil1.png" alt="" />
            </Box>
            <Box
              width={"85%"}
              m={"auto"}
              textAlign={"center"}
              mt={-6}
              pt={5}
              pr={3}
              pl={3}
              pb={3}
              bgcolor={"#18CC66"}
            >
              <Typography
                mt={"2%"}
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: "100",
                  color: "white",
                  fontSize: "39px",
                }}
              >
                Tech trends
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Merriweather",
                  fontWeight: "100",
                  fontSize: "22px",
                  lineHeight: "25px",
                }}
              >
                Tecnología para la gestión del Capital Humano
              </Typography>
            </Box>

            <Box mt={5} width={"96%"}>
              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "center",
                  position: "relative",
                  width: "100vw",
                }}
              >
                <Box onClick={handleOpenModal5} sx={{ textDecoration: "none" }}>
                  <img style={{ height: "60px" }} src="/qhblanco5.png" alt="" />
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      fontSize: "22px",
                      lineHeight: "34px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Mentoring personalizado
                  </Typography>
                </Box>
              </Button>
              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal5}
                onClose={handleCloseModal5}
              >
                <CarouselMentoring />
              </Dialog>

              <Button
                disableRipple
                style={{
                  textTransform: "none",
                  textAlign: "center",
                  position: "relative",
                  width: "100vw",
                }}
              >
                <Box onClick={handleOpenModal6} sx={{ textDecoration: "none" }}>
                  <img style={{ height: "60px" }} src="/qhblanco6.png" alt="" />
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      fontSize: "22px",
                      lineHeight: "34px",
                      color: "black",
                      textAlign: "center",
                      width: "250px",
                    }}
                  >
                    Training en innovación tecnológica
                  </Typography>
                </Box>
              </Button>

              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={openModal6}
                onClose={handleCloseModal6}
              >
                <CarouselTrai />
              </Dialog>
            </Box>
          </Box>
          <Box mt={3} mb={3} textAlign={"center"}>
            <BlackButtom texto={"Conocé más"} linkTo={"contacto"} />
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default QueHacemos;
