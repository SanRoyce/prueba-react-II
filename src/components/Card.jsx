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
    <div key={id}>
      <img src={img} alt="imagen de pizza" />
      <p>{desc}</p>
      <ul>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={() => navigate(`/pizzas/${id}`)}>Ver Más</button>
    </div>
  );
}

export default Card;
