import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectPage = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state)=>state.user)

    useEffect(()=>{
        if(!currentUser || currentUser == null){
            navigate("/auth")
        }
    },[])

return  !currentUser || currentUser == null ? navigate("/auth")  : <Outlet/>  
}

export default ProtectPage