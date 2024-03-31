import Carousel from "react-material-ui-carousel";
import { motion } from "framer-motion";
import Mentoring1 from "./Mentoring1";
import Mentoring2 from "./Mentoring2";
import { Box, Hidden } from "@mui/material";

const CarouselMentoring = ({
  handleOpenModal5,
  handleCloseModal5,
  openModal5,
}) => {
  return (
    <>
      <Hidden smDown>
        <Carousel
          autoPlay={false}
          timeout={100}
          sx={{
            backgroundColor: "#046C31",
            margin: "auto",
            height: "79vh",
            width: "100%",

            /*  "& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.MuiIconButton-edgeStart":
      {
        position: "absolute",
        color: "white", // Color blanco para los botones de navegación
        zIndex: 999, // Asegura que estén en la parte superior
      },
  }}
  nextIconButtonProps={{
    style: {
      right: 0, // Posición a la derecha de la pantalla
    },
  }}
  prevIconButtonProps={{
    style: {
      left: 0, // Posición a la izquierda de la pantalla
    },
  }}
  indicatorIconButtonProps={{
    style: {
      color: "white", // Color blanco para los indicadores del carousel
      position: "absolute",
      left: "7%", // Ajusta la posición de los indicadores
    }, */
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: "500%", rotateY: "-180deg" }}
            animate={{ opacity: 1, x: 0, rotateY: "0deg" }}
            exit={{ opacity: 0, x: "100%", rotateY: "480deg" }}
            transition={{ duration: 0.5 }}
          >
            <Mentoring1
              handleOpenModal5={handleOpenModal5}
              handleCloseModal5={handleCloseModal5}
              openModal5={openModal5}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "500%", rotateY: "-480deg" }}
            animate={{ opacity: 1, x: 0, rotateY: "0deg" }}
            exit={{ opacity: 0, x: "100%", rotateY: "180deg" }}
            transition={{ duration: 0.5 }}
          >
            <Mentoring2
              handleOpenModal5={handleOpenModal5}
              handleCloseModal5={handleCloseModal5}
              openModal5={openModal5}
            />
          </motion.div>
        </Carousel>
      </Hidden>

      <Hidden smUp>
        <Box width={"100%"}>
        <Mentoring1
          handleOpenModal5={handleOpenModal5}
          handleCloseModal5={handleCloseModal5}
          openModal5={openModal5}
        />
        <Mentoring2
          handleOpenModal5={handleOpenModal5}
          handleCloseModal5={handleCloseModal5}
          openModal5={openModal5}
        />
        </Box>
       
      </Hidden>
    </>
  );
};

export default CarouselMentoring;
