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
          
        </Box>
      </Hidden>
    </>
  );
};

export default CarouselMentoring;
