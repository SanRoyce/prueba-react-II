import React from 'react';
import Banner from '../components/Banner';
import MyContext from '../context/MyContext';
import { useContext } from 'react';
import Card from '../components/Card';

export default function Home() {

  const {product} = useContext(MyContext);

  return (
    <>
    <Banner/>
    {product.map((item) =>(
    <Card
    key={item.id}
    id={item.id}
    img={item.img}
    desc={item.desc}
    ingredients={item.ingredients}
    name={item.name}
    price={item.price}
    />
  ))}
    </>
  );
}
