import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch} from 'react-redux';
import { userLogin } from '../Store/userSlice'; 
import GoogleOAuth from '../Components/GoogleOAuth';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [state,setState] = useState("login");
    const [loading,setLoading] = useState(false);
    const [inputData,setInputData] = useState({});

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true)
        
        //sendRequest
        if(state === "login"){
            const res = await fetch('https://bajaj-store.onrender.com/api/user/login',{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            credentials:"include",
            body:JSON.stringify(inputData)
        })
        const data = await res.json();
        setLoading(false)
        if(!data.success){
            return toast.error(data.message)
        }
        dispatch(userLogin(data))
        toast.success(data.message)
        navigate("/profile")
    }else{
        const res = await fetch('https://bajaj-store.onrender.com/api/user/register',{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(inputData)
        })
        setLoading(false)
        const data = await res.json();
        if(!data.success){
            return toast.error(data.message)
        }
        setState("login")
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
    <div className='flex flex-col justify-center items-center mt-16 inset-0 left-0 right-0 bottom-0 top-0 '>
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
            {
                !loading ? <input className='bg-cyan-600 text-white py-1' type="submit" value={state === "login" ? "Login" : "Register"} /> 
                : <input className='bg-cyan-600 text-white py-1' type="submit" disabled value="Loading....." />
            }
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
            <GoogleOAuth/>
        </form>

    </div> 
  )
}

export default Login