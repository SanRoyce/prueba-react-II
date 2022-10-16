import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../context/MyContext";

const DetallePizza = () => {
  const { id } = useParams();
  const { product } = useContext(MyContext);
  const filtro = product.find((item) => item.id === id);
  return (
    <div className="detalle">
      {filtro && (
        <div className="container">
          <div className="cardetalle bg-white">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={filtro.img}
                  className="img-fluid "
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title text-center">
                    <strong>👨‍🍳 {filtro.name}</strong>
                  </h3>
                  <p className="card-text">{filtro.desc}</p>
                  <div className="derecha">
                    <ul>
                    <h4>Ingredientes:</h4>
                      {filtro.ingredients.map((ingredient, i) => (
                        <li key={i}>🍕 {ingredient}</li>
                      ))}
                    </ul>
                    <div className="d-flex justify-content-between">
                    <h4 className="text-danger"> <strong>Precio: ${filtro.price}</strong></h4>
                    <button className="addtocar btn btn-outline-danger">Add to car</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetallePizza;
