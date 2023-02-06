import {  createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer/CartReducer";


// creating context for cart
const CartContext=createContext();

const getLocalCartData=()=>{
    let locCartData=localStorage.getItem("locCart");
    if (locCartData ===[]){
    return [];

}
else{
    return JSON.parse(locCartData);
}

};

const initialState={
    //cart:[],
    cart:getLocalCartData(),
    total_item:"",
    total_price:"",
    shipping_fee:10000,

};


const CartProvider=({children})=>{

    
    const [state,dispatch]=useReducer(reducer,initialState);
                   // parameters
 const   addtoCart=(id, color, amount, product)=>{

    dispatch({type:"ADD_TO_CART",
    payload:{id, color, amount, product}});

 };

 const setDec=(id )=>{

    dispatch ({type:"SET_D",payload:id})


 };
 const setInc=(id )=>{

    dispatch ({type:"SET_I",payload:id})


 };

 const RemoveItem=(id)=>{
    dispatch({type:"REMOVE_ITEM",payload:id});

 };

 const clearCart=()=>
{
    dispatch({type:"CLEAR_CART"});

};
// Cart data in local storage 
//get vs set
useEffect(()=>{
    // dispatch({type:"CART_TOTALPRICE"});


    dispatch({type:"CART_TITEMP"});


    localStorage.setItem("locCart", JSON.stringify(state.cart));
}, [state.cart]);


    return (
    <CartContext.Provider 
    value={{...state,
    addtoCart,
    RemoveItem,
    clearCart,
    setDec,
    setInc,
    }}>
        {children}
    </CartContext.Provider>
    );
};
//using created context
const useCartContext=()=>{
    return useContext(CartContext);
}

export {CartProvider,useCartContext,};
