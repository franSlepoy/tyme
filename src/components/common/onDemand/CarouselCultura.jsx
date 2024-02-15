// En CarouselEv.jsx, elimina la importación de BrowserRouter

import Carousel from "react-material-ui-carousel";

import { motion } from "framer-motion";
import Cultura1 from "./Cultura1";
import Cultura2 from "./Cultura2";

const CarouselCultura = () => {
  return (
    <Carousel
      autoPlay={true}
      timeout={100}
      sx={{
        backgroundColor: "#104B70",
        height: "100vh",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 1,
        zIndex: 999,
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: "500%", rotateY: "-180deg" }}
        animate={{ opacity: 1, x: 0, rotateY: "0deg" }}
        exit={{ opacity: 0, x: "100%", rotateY: "480deg" }}
        transition={{ duration: 0.5 }}
      >
        <Cultura1 />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "500%", rotateY: "-480deg" }}
        animate={{ opacity: 1, x: 0, rotateY: "0deg" }}
        exit={{ opacity: 0, x: "100%", rotateY: "180deg" }}
        transition={{ duration: 0.5 }}
      >
        <Cultura2 />
      </motion.div>
    </Carousel>
  );
};

export default CarouselCultura;
