import React, { useState, useContext } from "react";
import data from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [itemData, setItemData] = useState(data);
  const [itemNumber, setItemNumber] = useState(1);

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
    setItemData([])
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
