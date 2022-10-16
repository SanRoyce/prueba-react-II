import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import { useNavigate } from "react-router-dom";

function Card({ desc, id, img, ingredients, name, price }) {
  const { product } = useContext(MyContext);
  const navigate = useNavigate();
  const click = () => {
    console.log("text");

    let index = product.findIndex((item) => item.id === id);
    product[index] = "";
  };

  return (
    <>
    
      <div key={id} className="card">
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h3 className="card-title text-center"><strong>👨‍🍳 {name}</strong></h3>
        </div>
        <ul className="list-group list-group-flush">
          <h4>Ingredientes:</h4>
          <ul>
            {ingredients.map((ingredient, i) => (
              <li key={i}>🍕 {ingredient}</li>
            ))}
          </ul>
          <li className="list-group-item text-danger">
            {" "}
           <h4> <strong>${price}</strong></h4>
          </li>
        </ul>
        <div className="card-body d-flex justify-content-center">
          <button className="btn btn-danger" onClick={() => navigate(`/pizza/${id}`)}>Ver Más</button>
          <button className="addtocar btn btn-outline-danger">Add to car</button>
        </div>
      </div>
      

    </>
  );
}

export default Card;
