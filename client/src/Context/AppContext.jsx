import { useEffect } from "react"
import { createContext } from "react"
import { useContext } from "react"
import { useState } from "react"

export const AppContext = createContext()

export const ContextProvider = ({children})=>{


    const [currentUser,setCurrentUser] = useState(()=>{
        let userGet = localStorage.getItem("user")
        return userGet ? JSON.parse(userGet) : null
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

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useApp = ()=> useContext(AppContext);