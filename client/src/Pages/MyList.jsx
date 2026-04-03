import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BajajCard from './BajajCard';

const MyList = () => {
    const [bajaj,setBajaj] = useState([]);
    const navigate = useNavigate()
    const [loading ,setloading] = useState(false)

const getList = async () => {
    setloading(true)
    const res = await fetch("http://localhost:4000/api/bajajs/my-list",{
                method:"GET",
                credentials:"include",
            });
            const data = await res.json();
            setloading(false)
            if(!data.success){
                return toast.error(data.message);
            }
            setBajaj(data.data)
            toast.success(data.message);
    }

    useEffect(()=>{
        getList()
    },[])

return !loading ?(
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{ font-family: "Geist", sans-serif; }
                `}
            </style>
            <div>
            <div className="flex flex-col items-center justify-center py-20 px-4">
                {
                    bajaj.length > 0 ?
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4.5">
                    {bajaj.map((baj) => (
                        <BajajCard baj={baj} getList={getList}/>
                    ))}
                    </div>
                    :
                    <div className='flex flex-col justify-center  items-center mt-40'>
                        <p>There is no list</p>
                        <button onClick={()=>navigate('/profile/create-list')} className='bg-green-600 mt-5 px-2 py-1 rounded text-white text-white'>Create new List</button>
                    </div> 
                }
                </div>
                
            </div>
        </>
):<div className='flex flex-col justify-center  items-center mt-40'>
    <div className='rounded-full border-green-500 w-10 h-10 border-t-4 animate-spin'>
        
    </div>
</div>
}

export default MyList