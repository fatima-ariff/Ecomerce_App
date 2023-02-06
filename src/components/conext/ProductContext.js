// create a context
// provider
// consumer=>useContex hook

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer/ProductReducer";

const Appcontext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  issingleLoading:false,
  singleproduct:{},
};

//App component
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "MY_API_DATA", payload: products });
      console.log("hehhhh ", products);
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  //My 2nd API call for single product page

  const getsingleproduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try {
      const res = await axios.get(url);
      const singleproduct = await res.data;
     dispatch({ type: "MY_SINGLE_DATA", payload: singleproduct });
    } catch (error) {
     dispatch({ type: "SIN_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <Appcontext.Provider value={{ ...state ,getsingleproduct}}>{children}</Appcontext.Provider>
  );
};
//Creating Custom Hooks
const useProdContext = () => {
  return useContext(Appcontext);
};

export { AppProvider, Appcontext, useProdContext };
