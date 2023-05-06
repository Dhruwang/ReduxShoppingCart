import React from "react";
import { cartActions } from "../store/cartSlice";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";


const Product = ({ name, id, imgURL, price }) => {

  const cartItems = useSelector((state)=>state.cart.itemsList)
  console.log(cartItems)

  const dispatch = useDispatch()
  const addToCart=()=>{
    dispatch(cartActions.addToCart({
      name,
      id,
      price
    }))
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
