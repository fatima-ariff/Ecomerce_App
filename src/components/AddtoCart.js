import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmounttog from "./Carttog";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "./conext/CartContext";

const AddtoCart = ({ product }) => {
  const {addtoCart}=useCartContext();
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setamount] = useState(1);

  const setDec = () => {
    amount > 1 ? setamount(amount - 1) : setamount(1);
  };
  const setInc = () => {
    amount < stock ? setamount(amount + 1) : setamount(stock);
    if (stock < 1) {
      alert("Stock is Empty");
    }
  };
  return (
    <Wrapper>
      <div>
        <p>
          colors:
          {colors.map((curcol, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curcol }}
                className={color === curcol ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curcol)}
              >
                {color === curcol ? <FaCheck /> : null}
              </button>
            );
          })}
        </p>
      </div>
      {/* AddtoCart */}
      <CartAmounttog
        amount={amount}
        setDec={setDec}
        setInc={setInc}
      ></CartAmounttog>

      <NavLink to="/cart" 
      onClick={() => addtoCart(id, color, amount, product) }>
        <Button className="btn">Add to Cart</Button>
      </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddtoCart;
