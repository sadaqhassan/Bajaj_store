import React from 'react'

const Banner = () => {
return (
    <div className='flex flex-col justify-center items-center mt-30 mb-10 mx-40'>
        <div className='flex justify-between gap-20'>
        <img src="./tuktuk.png" className='w-56 h-56' alt="" />
        <div className='flex flex-col'>
        <h1 className='text-3xl md:text-6xl mb-5 font-bold'>Ku soo dhawoow <br/>Bajaj Store-keena</h1>
        <p className='text-md'>Mootooyin tayo sare leh, qiimo jaban oo la awoodi karo!
        Adeeg degdeg ah <br/> iyo kalsooni aad ku raaxaysan karto 💯
        Hadda booqo oo hel mooto <br/> taasi oo kuu fududaynaysa noloshaada!</p>
        </div>
    </div>
    </div>
)
}

export default Banner