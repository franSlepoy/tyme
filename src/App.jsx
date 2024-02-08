import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/footer/Footer";
import NavBar from "./components/common/navbar/NavBar";
import Home from "./components/pages/home/Home";
import Nosotros from "./components/pages/nosotros/Nosotros";
import QueHacemos from "./components/pages/queHacemos/QueHacemos";
import Manifiesto from "./components/pages/manifiesto/Manifiesto";
import TicTac from "./components/pages/ticTac/TicTac";
import Contacto from "./components/pages/contacto/Contacto";
import CharlasYconferencias from "./components/pages/charlasYconferencias/CharlasYconferencias";
import Tendencias from "./components/pages/tendencias/Tendencias";
import Menu from "./components/common/navbar/Menu";

const App = () => {
  return (
    <>
      <NavBar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/queHacemos" element={<QueHacemos />} />
          <Route path="/manifiesto" element={<Manifiesto />} />
          <Route path="/ticTacElTiempo" element={<TicTac />} />
          <Route path="/charlasYconferencias"element={<CharlasYconferencias />}/>
          <Route path="/tendencias" element={<Tendencias />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
     
      <Footer />
    </>
  );
};

export default App;
