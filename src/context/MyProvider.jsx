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
            SetProduct(response.data);
        })
        .catch((err) => console.log(err));
    },[]);
 

 return(
    <MyContext.Provider value={{product, SetProduct}}>
        {children}
    </MyContext.Provider>
 );
};
export default MyContextProvider;