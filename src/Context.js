import React, {useState, useContext} from "react";
import data from './data'


const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const [itemData, setItemData] = useState(data)

    return <AppContext.Provider value={{itemData}}>{children}</AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider}