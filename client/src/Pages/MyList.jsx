import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { toast } from 'react-toastify';

const MyList = () => {
    const [bajaj,setBajaj] = useState([]);
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
            console.log(data.data)
            toast.success(data.message);
    }

    useEffect(()=>{
        getList()
    },[])

    const bajajs = [
        { id: 1, img: "https://assets.prebuiltui.com/images/components/bajaj/bajaj-houseImage1.png", title: "The Ridgewood Apartment", location: "Aspen, Colorado", price: "$2.5 M", specs1: "4 Bed", specs2: "3 Bath" },
        { id: 2, img: "https://assets.prebuiltui.com/images/components/bajaj/bajaj-houseImage2.png", title: "The Amethyst Arbour", location: "Aspen, Colorado", price: "$3.2 M", specs1: "3 Bed", specs2: "2 Bath" },
        { id: 3, img: "https://assets.prebuiltui.com/images/components/bajaj/bajaj-houseImage2.png", title: "The Amethyst Arbour", location: "Aspen, Colorado", price: "$3.2 M", specs1: "3 Bed", specs2: "2 Bath" },
        { id: 4, img: "https://assets.prebuiltui.com/images/components/bajaj/bajaj-houseImage1.png", title: "The Ridgewood Apartment", location: "Aspen, Colorado", price: "$2.5 M", specs1: "4 Bed", specs2: "3 Bath" }
    ];

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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4.5">
                    {bajaj.map((bajaj,key) => (
                        <div key={bajaj.id} className="flex items-center p-2 border border-black/10 hover:border-black/20 transition-colors rounded-xl w-sm sm:w-[420px]">
                            <img src={bajaj?.images[0]} alt="House" className="w-full max-w-[118px] rounded-lg object-cover" />
                            <div className="ml-4">
                                <p className="text-sm text-zinc-900">Model: <span className='text-md font-bold'>{bajaj.model}</span></p>
                                <p className="text-sm text-zinc-900">Price: <span className='text-md font-bold '>{bajaj.price}</span></p>
                                <p className="text-sm text-zinc-900 mt-3">type: <span className='text-md font-bold'>{bajaj.type}</span></p>
                                <p className="text-sm text-zinc-900 mt-3">Owner: <span className='text-md font-bold'>{bajaj.contact}</span></p>
                                <div className="text-sm mt-4 text-zinc-600 flex items-center gap-1.5">
                                    {bajaj.type}
                                    <div className='size-1 rounded-full bg-[#777777]'></div>
                                    {bajaj.model}
                                </div>
                            <div className="text-sm mt-4  flex items-center gap-1.5">
                                <button className='text-sm text-green-600 px-2'>update</button>    
                                <button className='text-sm text-red-600 px-2'>delete</button>    
                            </div>
                            </div>
                        </div>
                        
                    ))}
                    </div>
                </div>
                
            </div>
        </>
):<div className='flex flex-col justify-center  items-center mt-40'>
    <div className='rounded-full border-green-500 w-10 h-10 border-t-4 animate-spin'>
        
    </div>
</div>
}

export default MyList