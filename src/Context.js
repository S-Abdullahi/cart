import React, { useState, useContext, useReducer } from "react";
import data from "./data";

const AppContext = React.createContext();

const defaultState = {
  items: data,
}

const CLEAR_CART = 'CLEAR_CART'

const AppProvider = ({ children }) => {
  const [itemData, setItemData] = useState(data);
  const [itemNumber, setItemNumber] = useState(1);

  const reducer = (state, action)=>{
    if(action.type === CLEAR_CART){
      return {...state, item: []}
    }

    throw new Error('error occured')
  }

  const [state, dispatch] = useReducer(reducer, defaultState)

  function add(id) {
    const item = itemData.find(item => item.id === id)
    console.log(item)
    setItemNumber(prev => prev + 1)
  }

  function subtract() {
    setItemNumber(prev => prev - 1)
  }

  function remove(id){
    const item = itemData.filter(item => item.id !== id)
    setItemData(item)
  }

  function clearCart(){
    dispatch({type: CLEAR_CART})
    // setItemData([])
  }

  return (
    <AppContext.Provider
      value={{
        itemData,
        setItemData,
        itemNumber,
        setItemNumber,
        add,
        subtract,
        remove,
        clearCart
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
