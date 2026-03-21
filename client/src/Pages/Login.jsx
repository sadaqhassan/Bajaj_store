import React, { useState } from 'react'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center fixed inset-0 left-0 right-0 bottom-0 top-0 '>

        <form className='p-10 rounded bg-white shadow-2xl flex flex-col space-y-4' action="">
            <h1 className='text-center text-2xl font-medium mb-4'>Login</h1>
            <input type="text" placeholder='username' name='username' className='bg-gray-100 px-2 py-1 rounded text-black'/>
            <input type="email" placeholder='email' name='email' className='bg-gray-100 px-2 py-1 rounded text-black'/>
            <input type="password" placeholder='password' name='password' className='bg-gray-100 px-2 py-1 rounded text-black'/>
            <input className='bg-cyan-600 text-white py-1' type="submit" value="Login" />
        </form>
    </div> 
  )
}

export default Login