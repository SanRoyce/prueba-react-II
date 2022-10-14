import React from 'react'
import MyContext from '../context/MyContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';



function DetallePizza({img}) {
  const {id} = useParams();
  const {product} = useContext(MyContext)
  const eleccion = (id) => {
    console.log("click")
    let index = product.findIndex((item) => item.id === id);
    
  }
  
  return (
    <div className="galeria grid-columns-5 p-3">

      {product.map((item) => item === id &&(
        <div key={item.id}>
          <img src={img} alt="imagen de pizza" />
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default DetallePizza;