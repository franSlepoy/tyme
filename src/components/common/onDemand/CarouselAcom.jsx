// En CarouselEv.jsx, elimina la importación de BrowserRouter

import Carousel from "react-material-ui-carousel";
import { motion } from "framer-motion";
import Acompañamiento1 from "./Acompañamiento1";
import Acompañamiento2 from "./Acompañamiento2";
import { Box, Hidden } from "@mui/material";
const CarouselAcom = ({ handleOpenModal4, handleCloseModal4, openModal4 }) => {
  return (
    <>
      <Hidden smDown>
        <Carousel
          autoPlay={false}
          timeout={200}
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
            initial={{ opacity: 0, x: "500%", rotateY: "-180deg" }}
            animate={{ opacity: 1, x: 0, rotateY: "0deg" }}
            exit={{ opacity: 0, x: "100%", rotateY: "480deg" }}
            transition={{ duration: 0.5 }}
          >
            <Acompañamiento1
              handleOpenModal4={handleOpenModal4}
              handleCloseModal4={handleCloseModal4}
              openModal4={openModal4}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "500%", rotateY: "-480deg" }}
            animate={{ opacity: 1, x: 0, rotateY: "0deg" }}
            exit={{ opacity: 0, x: "100%", rotateY: "180deg" }}
            transition={{ duration: 0.5 }}
          >
            <Acompañamiento2
              handleOpenModal4={handleOpenModal4}
              handleCloseModal4={handleCloseModal4}
              openModal4={openModal4}
            />
          </motion.div>
        </Carousel>
      </Hidden>

      <Hidden smUp>
        <Box>
          <Acompañamiento1
            handleOpenModal4={handleOpenModal4}
            handleCloseModal4={handleCloseModal4}
            openModal4={openModal4}
          />
          
        </Box>
      </Hidden>
    </>
  );
};

export default CarouselAcom;
