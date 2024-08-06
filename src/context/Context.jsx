import {createContext, useState} from "react";
import { json } from "react-router-dom";

const Context = createContext()

const TokenContext = ({children}) =>  {
    const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)
    window.localStorage.setItem("token" , JSON.stringify(token))
    return(
        <Context.Provider value={{token , setToken}}>{children}</Context.Provider>
    )
}

export {Context, TokenContext}