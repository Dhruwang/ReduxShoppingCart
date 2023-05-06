import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
const Cart = () => {

  const dispatch = useDispatch()
  const showCart = useSelector(state=>state.cart.showCart)
  const quantity = useSelector(state=>state.cart.totalQuantity);
  const showHideCart = ()=>{
    dispatch(cartActions.setShowCart(!showCart))
  }
  return (
    <>
    <div className="cartIcon" onClick={showHideCart}>
      <h3>Cart: {quantity} Items</h3>
    </div>
    </>
  );
};

export default Cart;
