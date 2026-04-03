import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const BajajCard = (baj) => {

    const {currentUser} = useSelector((state)=>state.user)
    console.log(currentUser)
    console.log(baj)
    const handleDelete = async (id) => {
            const res = await fetch(`https://bajaj-store.onrender.com/api/bajajs/my-list/delete/${id}`,{
                method:"DELETE",
                credentials:"include"
            });
            const data = await res.json();
            if(!data.success){
                return toast.error(data.message)
            }
    
            toast.success(data.message);
        }

  return (
    <div>
        <div key={baj.baj._id} className="flex items-center p-2 border border-black/10 hover:border-black/20 transition-colors rounded-xl w-sm sm:w-[420px]">
                            <img src={baj?.baj?.images[0]} alt="House" className="w-full max-w-[118px] rounded-lg object-cover" />
                            <div className="ml-4">
                                <p className="text-sm text-zinc-900">Model: <span className='text-md font-bold'>{baj?.baj?.model}</span></p>
                                <p className="text-sm text-zinc-900">Price: <span className='text-md font-bold '>{baj?.baj?.price}</span></p>
                                <p className="text-sm text-zinc-900 mt-3">type: <span className='text-md font-bold'>{baj?.baj.type}</span></p>
                                <p className="text-sm text-zinc-900 mt-3">Owner: <span className='text-md font-bold'>{baj?.baj?.contact}</span></p>
                                <div className="text-sm mt-4 text-zinc-600 flex items-center gap-1.5">
                                    {baj.type?.type}
                                    <div className='size-1 rounded-full bg-[#777777]'></div>
                                    {baj.model?.model}
                                </div>
                            <div className="text-sm mt-4  flex items-center gap-1.5">
                            { 
                            currentUser.email === baj?.baj?.contact && <>
                                <button className='text-sm text-green-600 px-2' >update</button>    
                                <button className='text-sm text-red-600 px-2' onClick={()=>handleDelete(baj.baj._id)}>delete</button> 
                            </>   
                            }
                            </div>
                            </div>
                        </div>
    </div>
  )
}

export default BajajCard