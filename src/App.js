import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./layout/Navbar";
import Home from "./vistas/Home";
import DetallePizza from "./vistas/DetallePizza";
import CarritoCompra from "./vistas/CarritoCompra";
/* import MyContext from "./context/MyContext";
 */
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pizza/:id" element={<DetallePizza />} />
          <Route path="/Carro" element={<CarritoCompra />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
