import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const itemsList = useSelector(state=>state.cart.itemsList)
  const showCart = useSelector(state=>state.cart.showCart)
  return (
    <>
    {showCart && <div className="cart-container">
      <h2>Your Cart</h2> 
      <ul>
        <li>
          {itemsList.map((item)=>{
            return <CartItem id={item.id} quantity={item.quantity} price={item.price} name={item.name} total={item.totalPrice} /> 
          })}
                  </li>
      </ul>
    </div>}
    </>
  );
};

export default CartItems;
