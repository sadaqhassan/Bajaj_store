import React from 'react'
import { ArrowBigRight } from 'lucide-react'
import {  useNavigate } from 'react-router-dom'
const Banner = () => {
    const navigate = useNavigate()
return (
    <div className='Cone flex flex-col justify-center items-center mt-30 mb-10 mx-40'>
        <div className='flex flex-col md:flex-row justify-between md:gap-20 gap-6'>
        <img src="./tuktuk.png" className='md:w-56 md:h-56 w-86 h-46' alt="" />
        <div className='flex-wrap flex-col  '>
        <h1 className='text-3xl md:text-6xl mb-5 font-bold'>Ku soo dhawoow <br/>Bajaj Store-keena</h1>
        <p className='text-md'>Mootooyin tayo sare leh, qiimo jaban oo la awoodi karo!
        Adeeg degdeg ah <br/> iyo kalsooni aad ku raaxaysan karto 💯
        Hadda booqo oo hel mooto <br/> taasi oo kuu fududaynaysa noloshaada!</p>
        </div>
    </div>
    <button onClick={()=>navigate('/')} className='flex gap-4 bg-cyan-600 px-2 py-1 rounded text-white'>
        <ArrowBigRight/>
        Get started
    </button>
    </div>
)
}

export default Banner