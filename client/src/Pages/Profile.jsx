import React from 'react'

const Profile = () => {
    const handleChange = ()=>{

    }
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
        <div className='bg-white shadow-2xl roundeded p-10'>
            <h1 className='text-center text-2xl font-medium mb-4'>Profile</h1>
            <img src="./user.png" alt="" className='w-18 h-18 rounded-full mb-5 ml-20'/>
            <div className='flex flex-col  space-y-4'>
            <div><label className='text-gray-600'>Name: </label><input onChange={handleChange} type="text" defaultValue={"sadak"} name='username' className='bg-gray-100 px-2 py-1 rounded text-black'/></div>
            <div><label className='text-gray-600'>Email: </label><input onChange={handleChange} type="email"  defaultValue={"sadak"} name='email' className='bg-gray-100 px-2 py-1 rounded text-black'/></div>
            <div><label  className='text-gray-600'>Password: </label><input onChange={handleChange} type="password"  defaultValue={"**********"} name='password' className='bg-gray-100 px-2 py-1 rounded text-black'/></div>
            <input className='bg-cyan-600 text-white py-1' type="submit" value="Update" />
            </div>
        </div>
    </div>
  )
}

export default Profile