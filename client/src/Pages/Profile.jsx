import React from 'react'

const Profile = () => {
    const handleChange = ()=>{

    }
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
        <div className='bg-white shadow-2xl roundeded p-10'>
            <h1 className='text-center text-2xl font-medium mb-4'>Profile</h1>
            <div className='flex flex-col space-y-4'>
            <input onChange={handleChange} type="text" placeholder='username' name='username' className='bg-gray-100 px-2 py-1 rounded text-black'/>
            <input onChange={handleChange} type="email" placeholder='email' name='email' className='bg-gray-100 px-2 py-1 rounded text-black'/>
            <input onChange={handleChange} type="password" placeholder='password' name='password' className='bg-gray-100 px-2 py-1 rounded text-black'/>
            <input className='bg-cyan-600 text-white py-1' type="submit" value="Update" />
            </div>
        </div>
    </div>
  )
}

export default Profile