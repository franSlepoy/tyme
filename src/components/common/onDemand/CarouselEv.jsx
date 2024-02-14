// En CarouselEv.jsx, elimina la importación de BrowserRouter
import React from "react";
import Carousel from "react-material-ui-carousel";
import Evaluacion1 from "./Evaluacion1";
import Evaluacion2 from "./Evaluacion2";
import { motion } from "framer-motion";

const CarouselEv = () => {
  return (
    <Carousel
      autoPlay={true}
      timeout={100}
      sx={{backgroundColor:"#104B70", height:"100vh", width:"100%", position:"fixed", top:0, left:1,zIndex:999 }}
    >
      <motion.div
         initial={{ opacity: 0, x: "-100%" }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: "100%" }}
         transition={{ duration: 0.5 }}
      >
        <Evaluacion1 />
      </motion.div>
      <motion.div
         initial={{ opacity: 0, x: "-100%" }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: "100%" }}
         transition={{ duration: 0.5 }}
      >
        <Evaluacion2 />
      </motion.div>
    </Carousel>
  );
};

export default CarouselEv;
