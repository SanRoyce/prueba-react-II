import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./vistas/Home";
import DetallePizza from "./vistas/DetallePizza";
import CarritoCompra from "./vistas/CarritoCompra";
import Footer from "./layout/Footer";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<DetallePizza/>} />
          <Route path="/carro" element={<CarritoCompra />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
