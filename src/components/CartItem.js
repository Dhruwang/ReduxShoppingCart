import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cartSlice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const incrementItem = () => {

      dispatch(
        cartActions.addToCart({
          id,
          name,
          price,
        })
      );
    
  };
  const decrementItem=()=>{
    console.log("id is",id)
    dispatch(cartActions.removeFromCart(id))
  }
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decrementItem}>
        -
      </button>
      <button className="cart-actions" onClick={incrementItem}>
        +
      </button>
    </div>
  );
};

export default CartItem;
