import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function CenterBanner() {
    const [costomers,setCostommers] = useState(0)
    
    useEffect(()=>{
        let start = 0
        let end = 2878
        
        const interval = setInterval(() => {
            start += 50

            if(start >= end){
                start = end
                clearInterval(interval)
            }
            setCostommers(start);
        },100);
    },[])

  
return (
    <div className='cone flex justify-center text-xl  py-6 items-center my-16 bg-gray-100 shadow-2xl rounded px-10 '>
        <p className='text-xl font-bold mr-10'>
            Customers have placed their trust in us
        </p>
        <ArrowBigRight/>
        <div>
            <p className='font-bold  ml-10'>+{costomers}</p>
        </div>
    </div>
  )
}

export default CenterBanner