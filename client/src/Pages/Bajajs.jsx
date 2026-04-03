import React, { useEffect, useState } from 'react'
import BajajCard from './BajajCard'
import { toast } from 'react-toastify'

const Bajajs = () => {
    const [bajajs,setBajajs] = useState([])
    const handleFetch = async () => {
        try {
        const res = await fetch("http://localhost:4000/api/bajajs/my-list/get",{
            method:"GET",
            credentials:"include",
        });
        const data = await res.json() 

        if(!data.success){
            return toast.error(data.message);
        }
        toast.success(data.message);
        setBajajs(data)

        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(()=>{
        handleFetch()
    })
  return (
    <div>
        
        <BajajCard/>
    </div>
  )
}

export default Bajajs