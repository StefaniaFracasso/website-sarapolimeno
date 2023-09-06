import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Contacts from "./components/Contacts";
import ChiSono from "./components/ChiSono";
import Header2 from "./components/Header2";
import Visita from "./components/Visita";

function App() {
  return (
    <BrowserRouter>
      <Header2/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chisono" element={<ChiSono />} />
        <Route path="/contatti" element={<Contacts />} />
        <Route path="/laprimavisita" element={<Visita />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
