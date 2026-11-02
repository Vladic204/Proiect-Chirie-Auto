import "./styles/main.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home";
import Auto from "./pages/auto";



import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auto" element={<Auto />} />
          <Route path="/auto/:carId" element={<Auto />} />
          
        </Routes>
        <footer className="footer">
          <div className="container">
            <div className="footer__wrapper">
              <div className="copyright">
                <p>© {new Date().getFullYear()} Chirie Auto UTM</p>
              </div>
              <a href="/#despre" className="footer__link">Închiriere simplă. Drumuri frumoase.</a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;