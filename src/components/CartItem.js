import React from "react";
import FormatPrice from "./FormatPrice";
import CartAmounttog from "./Carttog";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "./conext/CartContext";


const CartItem = ({ id, name, image, color, price, amount }) => {
    const {RemoveItem,setDec,setInc}=useCartContext();

  return (
    <div className="cart-heading grid grid-five-column">
      {/* 1st column */}
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p> color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>

      {/* 2nd column */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* 3rd col  qauantity in cart page  */}
      <CartAmounttog
        amount={amount}
        setDec={()=>setDec(id)}
        setInc={()=>setInc(id)}
      ></CartAmounttog>

      {/* 4th col */}
      {/*  Subtotal of updated cart amount  */}

      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      {/*  5th coll  */}

      <div>
        <FaTrash className="remove_icon" onClick={()=> RemoveItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
