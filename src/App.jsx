import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/common/footer/Footer";
import NavBar from "./components/common/navbar/NavBar";
import Home from "./components/pages/home/Home";
import Nosotros from "./components/pages/nosotros/Nosotros";
import QueHacemos from "./components/pages/queHacemos/QueHacemos";
import Manifiesto from "./components/pages/manifiesto/Manifiesto";
import Contacto from "./components/pages/contacto/Contacto";
import CharlasYconferencias from "./components/pages/charlasYconferencias/CharlasYconferencias";
import Tendencias from "./components/pages/tendencias/Tendencias";
import Menu from "./components/common/navbar/Menu";
import { ParallaxProvider } from "react-scroll-parallax"; // Importa ParallaxProvider aquí
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al inicio de la página en cada cambio de ruta
  }, [location]);

  return (
    <ParallaxProvider>
      {" "}
      {/* Envuelve tu aplicación con ParallaxProvider */}
      <>
        <NavBar />
        <Routes scrollToTop>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/queHacemos" element={<QueHacemos />} />
          <Route path="/manifiesto" element={<Manifiesto />} />
          <Route
            path="/charlasYconferencias"
            element={<CharlasYconferencias />}
          />
          <Route path="/tendencias" element={<Tendencias />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </>
    </ParallaxProvider>
  );
};

export default App;
