import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { toast } from 'react-toastify';

const MyList = () => {
    const [bajaj,setBajaj] = useState({});

const getList = async () => {
    const res = await fetch("http://localhost:4000/api/bajajs/my-list",{
                method:"GET",
                credentials:"include",
            });
            const data = await res.json();
            if(!data.success){
                return toast.error(data.message);
            }
            setBajaj(data.data)
            console.log(data.data)
            toast.success(data.message);
    }

    useEffect(()=>{
        getList()
    },[])

return (
    <div>
        {
            bajaj ? <h1>{bajaj.model}</h1> : <h1>there is no bajaj</h1>
        }
    </div>
)
}

export default MyList