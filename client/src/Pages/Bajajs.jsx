import React, { useEffect, useState } from 'react'
import BajajCard from './BajajCard'
import { toast } from 'react-toastify'

const Bajajs = () => {
    const [bajajs,setBajajs] = useState([])
    const handleFetch = async () => {
        try {
        const res = await fetch("https://bajaj-store.onrender.com/api/bajajs/my-list/get",{
            method:"GET",
            credentials:"include",
        });
        const data = await res.json() 

        if(!data.success){
            return toast.error(data.message);
        }
        toast.success(data.message);
        setBajajs(data.data);

        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(()=>{
        handleFetch()
    },[])
  return (
    <div className='grid grid-cols-1 overflow-x-hidden gap-6  md:grid-cols-3 md:mx-4 mt-16 md:ml-3 ml-10'>
        {
            bajajs.map((baj)=>(
                <BajajCard key={baj._id} baj={baj}/>
            ))
        }
    </div>
  )
}

export default Bajajs