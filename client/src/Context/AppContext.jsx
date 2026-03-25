import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const AppContext = createContext()

export const ContextProvider = ({children})=>{


    const [currentUser,setCurrentUser] = useState(()=>{
        let userGet = localStorage.getItem("user")
        return userGet ? JSON.parse(currentUser) : null
    })

    //useEfects
    useEffect(()=>{
        if(currentUser){
            localStorage.setItem("user",JSON.stringify(currentUser))
        }else{
            localStorage.removeItem("user")
        }
    },[currentUser])  



    const value = {
        currentUser,
        setCurrentUser
    }

    return <AppContext value={value}>
        {children}
    </AppContext>
}

export const useApp = ()=>useContext(AppContext);