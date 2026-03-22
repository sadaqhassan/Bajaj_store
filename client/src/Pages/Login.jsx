import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Login = () => {
    const [state,setState] = useState("login");
    const [inputData,setInputData] = useState({});

    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        //sendRequest
        if(state === "register"){
            const res = await fetch('http://localhost:4000/api/user/register',{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(inputData)
        })
        const data = await res.json();
        if(!data.success){
            return toast.error(data.message)
        }

        toast.success(data.message)
    }else{
        const res = await fetch('http://localhost:4000/api/user/login',{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            credentials:"include",
            body:JSON.stringify(inputData)
        })
        const data = await res.json();
        if(!data.success){
            return toast.error(data.message)
        }

        toast.success(data.message)
    }
    }
        

    const handleChange = (e)=>{
        setInputData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }



return (
    <div className='flex flex-col justify-center items-center fixed inset-0 left-0 right-0 bottom-0 top-0 '>
        <form onSubmit={handleSubmit} className='p-10 rounded bg-white shadow-2xl flex flex-col space-y-4' action="">
            <h1 className='text-center text-2xl font-medium mb-4'>{
                state === "login" ? "Login" : "Register"
            }</h1>
            {
                state === "register" &&
                <input onChange={handleChange} type="text" placeholder='username' name='username' className='bg-gray-100 px-2 py-1 rounded text-black'/>
            }
            <input onChange={handleChange} type="email" placeholder='email' name='email' className='bg-gray-100 px-2 py-1 rounded text-black'/>
            <input onChange={handleChange} type="password" placeholder='password' name='password' className='bg-gray-100 px-2 py-1 rounded text-black'/>
            <input className='bg-cyan-600 text-white py-1' type="submit" value={state === "login" ? "Login" : "Register"} />
            <div className='flex gap-4'>
                {
                    state === "login" ? "Don't have an account : " :
                    "have an account :"
                }
                <button type='button' onClick={()=>{
                    state === "login" ? setState("register"):
                    setState("login")
                }} className='text-blue-900 underline font-mono'>
                {
                    state === "login" ? "Register " :
                    "Login"
                }
                </button>
            </div>
        </form>

    </div> 
  )
}

export default Login