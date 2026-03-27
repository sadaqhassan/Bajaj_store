import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const {currentUser} = useSelector((state)=>state.user)
    const handleChange = ()=>{
    }
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
        <div className='bg-white shadow-2xl roundeded p-10'>
            <h1 className='text-center text-2xl font-medium mb-4'>Profile</h1>
            <img src={currentUser.avatar? currentUser.avatar : "./user.png"} alt="" className='w-18 h-18 rounded-full mb-5 ml-15'/>
            <div className='flex flex-col  space-y-4'>
            <div className='text-gray-600'> <input onChange={handleChange} type="text" defaultValue={currentUser.username} name='username' className='bg-gray-100 px-2 py-1 rounded text-black'/></div>
            <div className='text-gray-600'> <input onChange={handleChange} type="email"  defaultValue={currentUser.email} name='email' className='bg-gray-100 px-2 py-1 rounded text-black'/></div>
            <div  className='text-gray-600'><input onChange={handleChange} type="password"  defaultValue={"**********"} name='password' className='bg-gray-100 px-2 py-1 rounded text-black'/></div>
            <input className='bg-cyan-600 text-white py-1' type="submit" value="Update" />
            </div>
        </div>
    </div>
  )
}

export default Profile