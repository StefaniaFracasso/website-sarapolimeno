import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Contacts from "./components/Contacts";
import ChiSono from "./components/ChiSono";
import Header2 from "./components/Header2";
import Visita from "./components/Visita";
import CookieBot from "react-cookiebot";
import ReactGA from 'react-ga4';

function App() {
  const domainGroupId = '4077cddb-55f0-4fb9-805f-dcafd25d444e';
  ReactGA.initialize('G-FGC0DJFY0T');

  return (
    <BrowserRouter>
      <CookieBot domainGroupId={domainGroupId} />
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
