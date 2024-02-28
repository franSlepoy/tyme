import Carousel from "react-material-ui-carousel";
import { motion } from "framer-motion";
import Mentoring1 from "./Mentoring1";
import Mentoring2 from "./Mentoring2";

const CarouselMentoring = () => {
  return (
    <Carousel
      autoPlay={true}
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
        <Mentoring1 />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "500%", rotateY: "-480deg" }}
        animate={{ opacity: 1, x: 0, rotateY: "0deg" }}
        exit={{ opacity: 0, x: "100%", rotateY: "180deg" }}
        transition={{ duration: 0.5 }}
      >
        <Mentoring2 />
      </motion.div>
    </Carousel>
  );
};

export default CarouselMentoring;
