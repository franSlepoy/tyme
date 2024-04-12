import Carousel from "react-material-ui-carousel";
import { motion } from "framer-motion";

import Training1 from "./Training1";
import Training2 from "./Training2";
import { Box, Hidden } from "@mui/material";

const CarouselTrai = ({ handleOpenModal6, handleCloseModal6, openModal6 }) => {
  return (
    <>
      <Hidden smDown>
        <Carousel
          autoPlay={false}
          timeout={100}
          sx={{
            backgroundColor: "#046C31",
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
              color: "white", // Color blanco para los botones indicadores
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
            <Training1
              handleOpenModal6={handleOpenModal6}
              handleCloseModal6={handleCloseModal6}
              openModal6={openModal6}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "500%", rotateY: "-480deg" }}
            animate={{ opacity: 1, x: 0, rotateY: "0deg" }}
            exit={{ opacity: 0, x: "100%", rotateY: "180deg" }}
            transition={{ duration: 0.5 }}
          >
            <Training2
              handleOpenModal6={handleOpenModal6}
              handleCloseModal6={handleCloseModal6}
              openModal6={openModal6}
            />
          </motion.div>
        </Carousel>
      </Hidden>

      <Hidden smUp>
        <Box>
        <Training1
          handleOpenModal6={handleOpenModal6}
          handleCloseModal6={handleCloseModal6}
          openModal6={openModal6}
        />
       
        </Box>
       
      </Hidden>
    </>
  );
};

export default CarouselTrai;
