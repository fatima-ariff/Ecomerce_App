
const CartReducer = (state, action) => {



    if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    let existingPRO = state.cart.find(
      (curele) => curele.id === id+color);
    console.log("dekho repeat", existingPRO);

    if (existingPRO) {
      let updatepro = state.cart.map((curele) => {
        if (curele.id === id + color) 
        {
          let newamount = curele.amount + amount;

          if(newamount >= curele.max)
          {
            newamount=curele.max;
            alert("You Can't Add More Item Than Stock!!");

          }

          return {
            ...curele,
            amount: newamount,
          }
        } 
        else {
          return curele;
        }
      });

      return {
        ...state,
        cart: updatepro,
      };
    } 


      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    
  }

  if (action.type==="SET_D")
  {
     let updatepro=state.cart.map((curele)=>{
      if(curele.id===action.payload)
      {
        let decAmount=curele.amount-1;

        if(decAmount<=0)
        {
          decAmount=1;
        }
        return{
          ...curele,
          amount:decAmount,
        };
      }
        else{
          return curele;
        }


   
     });

     return{...state,
      cart:updatepro};
  }
  if (action.type==="SET_I")

  {
    let updatepro=state.cart.map((curele)=>{
      if(curele.id===action.payload)
      {
        let inccAmount=curele.amount+1;

        if(inccAmount >= curele.max)
        {
          inccAmount=curele.max;
          alert("You Can't Add More Item Than Stock!!");

        }        return{
          ...curele,
          amount:inccAmount,
        };
      } 
      else{
        return curele;
      }


  
  });
  return{...state,
    cart:updatepro};
}

  if (action.type === "REMOVE_ITEM") {
    let updatedcart = state.cart.filter(
      (curele) => curele.id !== action.payload
    );
    return {
      ...state,
      cart: updatedcart,
    };
  }

  //clear the cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

//   if(action.type==="CART_TITEM")
//   {
//     let updateprot=state.cart.reduce((ini_v,curele)=>{

//       let {amount}=curele;
//       ini_v=ini_v+amount;
//       return ini_v;
       
//     },0);
//     return{
//       ...state,
//       total_item:updateprot,
//     }
// // 0 is passed as a initial value
//   }


// if (action.type==="CART_TOTALPRICE")
// {
//   let total_price=state.cart.reduce((ini_v,curele)=>{
//     let{price,amount}= curele;
//     ini_v=ini_v+(price*amount);
//     return ini_v;


//   },0)
//   return {
//     ...state,
//     total_price,

//   }
// }
    if(action.type==="CART_TITEMP")
    {
      let {total_item,total_price}=state.cart.reduce((ini_v,curele)=>{
        let{price,amount}= curele;
        ini_v.total_item+=amount;
        ini_v.total_price+=(price*amount);

        return ini_v;



      },
      {
        total_item:0,
        total_price:0,
      }
      );

      return {
        ...state,
        total_item,total_price

      };
    }


  return state;
// to set inc dec




};

export default CartReducer;
