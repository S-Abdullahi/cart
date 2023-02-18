import React, { useState, useContext, useReducer } from "react";
import data from "./data";

const AppContext = React.createContext();

const defaultState = {
  items: data,
  itemNumber: data.map((item) => 1),
  cartNumber: 0,
  total: 0,
};

const CLEAR_CART = "CLEAR_CART";
const REMOVE_CART = "REMOVE_CART";
const ADD_ITEM = "ADD_ITEM";
const SUBTRACT_ITEM = "SUBTRACT_ITEM";

const AppProvider = ({ children }) => {
  const [itemData, setItemData] = useState(data);

  function removeItem(id, state){
    const newData = state.items.filter((item)=>item.id !== id)
    return newData
  }

 

  const reducer = (state, action) => {
    if (action.type === CLEAR_CART) {
      return { ...state, items: [] };
    }
    // function removeReducer(){
    //   const newData = state.items.filter(
    //     (item) => item.id !== action.payload.id
    //   );
    //   return { ...state, items: newData };
      
    // }

    if (action.type === REMOVE_CART) {
        const newData = removeItem(action.payload.id, state)
              return { ...state, items: newData };

    }
    
    if (action.type === ADD_ITEM) {
      const uniqueData = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const newArray = [...state.itemNumber]
      newArray[uniqueData] = newArray[uniqueData] + 1
      console.log(`updated array ${newArray}`)
      console.log(`cart number ${state.cartNumber}`)

      return {
        ...state,
        itemNumber: newArray,
      };
    }

    if (action.type === SUBTRACT_ITEM) {
      const uniqueData = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const newArray = [...state.itemNumber]
      if(newArray[uniqueData] > 1 ){
        newArray[uniqueData] = newArray[uniqueData] - 1
        return {
          ...state,
          itemNumber: newArray,
        };
      } else{
        const newData = removeItem(action.payload.id, state)
        console.log(newData)
        return { ...state, items: newData };
      }
      // let currentItemNumber = state.itemNumber[uniqueData];

      // if(currentItemNumber === 0){
      //   const newData = removeItem(action.payload.id, state)
      //         return { ...state, items: newData };
      // }
      console.log(`updated array ${newArray}`)


      
    }

    throw new Error("error occured");
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  function add(id) {
    console.log(state)
    dispatch({ type: ADD_ITEM, payload: { id } });
  }

  function subtract(id) {
    console.log(state)
    dispatch({ type: SUBTRACT_ITEM, payload: { id } });
  }

  function remove(id) {
    dispatch({ type: REMOVE_CART, payload: { id } });
  }

  function clearCart() {
    dispatch({ type: CLEAR_CART });
    // setItemData([])
  }

  function cartItemNumber(){
    state.cartNumber = state.itemNumber.reduce((acc, item) =>{return acc + item},0) 
  }
  cartItemNumber()

  function totalAmount(){
    const priceArray = state.items.map(item => item.price )
    const numArray = state.itemNumber
    let resultContainer = []
    for(let i = 0 ; i < numArray.length; i++){
     resultContainer.push(priceArray[i] * numArray[i]) 
    }
    state.total = resultContainer.reduce((acc, item)=>acc + item, 0)
    // console.log(priceArray)
  }

  totalAmount()
  return (
    <AppContext.Provider
      value={{
        itemData,
        setItemData,
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
