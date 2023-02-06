
import React from "react";
import { createContext, useContext, useReducer, useEffect } from "react";

import { useProdContext } from "./ProductContext";
import reducer from "./reducer/Filter_red";

const Filtercontext = createContext();
//use reducer
const initialState = {
  //Will fetch all products for products main page
  Filter_products: [],
  all_products: [],
  //  if true show grid else list

  grid_view: true,
  sorting_value:"lowest",
  filters:{
    text :"",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,



  },
};

export const Filtercontextprov = ({ children }) => {
  const { products } = useProdContext();

  const [state, dispatch] = useReducer(reducer, initialState);
  //sett griiiddd view!!!!!!!!!!!!!!!!!!!!!!!!
  const setGridV = () => {
    return dispatch({ type: "SET_GRID" });
  };

  //// Set List View!!!!!!!!!!!
  const setListV = () => {
    return dispatch({ type: "SET_LIST" });
  };
  // Sorting Function
  const sorting = (event) => {
    let userValue = event.target.value;

    dispatch({ type: "GET_SORTV",payload:userValue });
  };


 const updateFilterV =(event)=>{
  let name = event.target.name;
  let value = event.target.value;

  if (name === "company") {
    value = event.target.value;
  }

  return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
};
 // to sort products 
  useEffect(() => {
    dispatch ( { type:"FILTER_PRODUCTS"});
  dispatch ( { type:"SORTING_PRODUCT"});
}, [state.sorting_value,state.filters]);

///main products loading 

  useEffect(() => {
    dispatch({ type: "L_FPROD", payload: products });
  }, [products]);
  return (
    <Filtercontext.Provider value={{ ...state,
     setGridV, 
     setListV, 
     sorting,
     updateFilterV, }}>
      {children}
    </Filtercontext.Provider>
  );
};

export const useFiltercon = () => {
  return useContext(Filtercontext);
};
