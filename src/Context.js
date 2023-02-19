import React, { useState, useContext, useReducer, useEffect } from "react";
import data from "./data";
import reducer from "./reducer";
import { CLEAR_CART, REMOVE_CART, ADD_ITEM, SUBTRACT_ITEM, TOTAL, CART_ITEMS, LOADING, DISPLAY_CART } from "./actions";
const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext();

const defaultState = {
  loading: false,
  items: data,
  cartNumber: 0,
  total: 0,
};


const AppProvider = ({ children }) => {
 
  const [state, dispatch] = useReducer(reducer, defaultState);

  function add(id) {
    dispatch({ type: ADD_ITEM, payload: { id } });
  }

  function subtract(id) {
    dispatch({ type: SUBTRACT_ITEM, payload: { id } });
  }

  function remove(id) {
    dispatch({ type: REMOVE_CART, payload: { id } });
  }

  function clearCart() {
    dispatch({ type: CLEAR_CART });
  }

  async function fetchData(){
    dispatch({type: LOADING})
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({type: DISPLAY_CART, payload:cart})
  }

  useEffect(()=>{
    fetchData()
  },[])

  useEffect(()=>{
    function cartItemNumber(){
      dispatch({type: CART_ITEMS})
    }
    function totalAmount(){
      dispatch({type: TOTAL})
    }

    cartItemNumber()
    totalAmount()
  },[state.items])

  return (
    <AppContext.Provider
      value={{
        add,
        subtract,
        remove,
        clearCart,
        state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
