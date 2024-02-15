import Carousel from "react-material-ui-carousel";
import Evaluacion1 from "./Evaluacion1";
import Evaluacion2 from "./Evaluacion2";
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
