import { useState, useEffect } from "react";
import MyContext from "./MyContext";
import axios from "axios";

const MyContextProvider = ({ children }) => {
    const baseURL = "/pizzas.json";

    const [product, SetProduct] = useState([]);
    useEffect(() => {
        axios
        .get(baseURL)
        .then((response) => {
            console.log(response.data);
            SetProduct(response.data);
        })
        .catch((err) => console.log(err));
    },[]);
 console.log(product);
 

 return(
    <MyContext.Provider value={{product, SetProduct}}>
        {children}
    </MyContext.Provider>
 );
};
export default MyContextProvider;