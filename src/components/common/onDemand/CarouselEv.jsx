import Carousel from "react-material-ui-carousel";
import Evaluacion1 from "./Evaluacion1";
import Evaluacion2 from "./Evaluacion2";
import { motion } from "framer-motion";
import { Box, Hidden } from "@mui/material";

const CarouselEv = ({ handleOpenModal1, handleCloseModal1, openModal1 }) => {
  return (
    <>
      <Hidden smDown>
        <Carousel
          autoPlay={true}
          timeout={100}
          sx={{
            backgroundColor: "#104B70",
            margin: "auto",
            pb: "2%",
            width: "100%",
            "& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.MuiIconButton-edgeStart":
              {
                marginLeft: "222px", // Posición a la izquierda para el botón de navegación previa
              },
          }}
          indicatorIconButtonProps={{
            style: {
              color: "white", // Color blanco para los botones de navegación
            },
          }}
          prevIconButtonProps={{
            style: {
              color: "white", // Color blanco para los botones de navegación
              marginLeft: -30, // Posición a la izquierda
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: "500%", rotateY: "780deg" }}
            animate={{ opacity: 1, x: 0, rotateY: "0deg" }}
            exit={{ opacity: 0, x: "100%", rotateY: "480deg" }}
            transition={{ duration: 0.5 }}
          >
            <Evaluacion1
              handleOpenModal1={handleOpenModal1}
              handleCloseModal1={handleCloseModal1}
              openModal1={openModal1}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "500%", rotateY: "-480deg" }}
            animate={{ opacity: 1, x: 0, rotateY: "0deg" }}
            exit={{ opacity: 0, x: "100%", rotateY: "180deg" }}
            transition={{ duration: 0.5 }}
          >
            <Evaluacion2
              handleOpenModal1={handleOpenModal1}
              handleCloseModal1={handleCloseModal1}
              openModal1={openModal1}
            />
          </motion.div>
        </Carousel>
      </Hidden>
      <Hidden smUp>
        {/* <Carousel
          autoPlay={false}
          timeout={100}
          sx={{
            backgroundColor: "#104B70",
            margin: "auto",
            pb: "2%",
            width: "100%",
            "& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.MuiIconButton-edgeStart":
              {
                marginLeft: "222px", // Posición a la izquierda para el botón de navegación previa
              },
          }}
          indicatorIconButtonProps={{
            style: {
              color: "white", // Color blanco para los botones de navegación
            },
          }}
          prevIconButtonProps={{
            style: {
              color: "white", // Color blanco para los botones de navegación
              marginLeft: -30, // Posición a la izquierda
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: "500%", rotateY: "780deg" }}
            animate={{ opacity: 1, x: 0, rotateY: "0deg" }}
            exit={{ opacity: 0, x: "100%", rotateY: "480deg" }}
            transition={{ duration: 0.5 }}
          >
            <Evaluacion1 />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "500%", rotateY: "-480deg" }}
            animate={{ opacity: 1, x: 0, rotateY: "0deg" }}
            exit={{ opacity: 0, x: "100%", rotateY: "180deg" }}
            transition={{ duration: 0.5 }}
          >
            <Evaluacion2 />
          </motion.div>
        </Carousel>
     */}
        <Box>
          <Evaluacion1 />
          <Evaluacion2 />
        </Box>
      </Hidden>
    </>
  );
};

export default CarouselEv;
