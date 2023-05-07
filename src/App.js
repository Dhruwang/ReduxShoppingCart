import React,{useEffect,useState} from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui-slice";

function App() {
  const cart = useSelector(state=>state.cart)
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
  const noti = useSelector(state=> state.ui)
  const type = useSelector(state=> state.ui.type)
  const message = useSelector(state=> state.ui.message)
  let isFirstRender = true
  const dispatch = useDispatch();
  useEffect(() => {
    if(isFirstRender){
      isFirstRender = false
      return;
    }

      dispatch(uiActions.showNotification({
        open:true,
        message:"Sending request",
        type:"warning"
      }))

      try {
        const sendRequest = async()=>{
          const res = await fetch("https://reduxshoppingcart-5bbe8-default-rtdb.firebaseio.com/cartItems.json",{
          method: "PUT",
          body: JSON.stringify(cart)
        })
        const data = await res.json();
        if(res.status===200){
          dispatch(uiActions.showNotification({
            open:true,
            message:"Request successfull",
            type:"success"
          }))
        }
        }
        sendRequest();
      } catch (error) {
        dispatch(uiActions.showNotification({
          open:true,
          message:"Request failed",
          type:"error"
        }))
      }

    

    
  }, [cart])
  
  return (
    <div className="App">
      {<Notification type={type} message={message} />}
      {!isLoggedIn?<Auth />:<Layout />}
    </div>
  );
}

export default App;
