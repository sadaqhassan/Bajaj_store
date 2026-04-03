import React from 'react'
import { app } from '../Utils/firebase'
import { GoogleAuthProvider, signInWithPopup ,getAuth} from 'firebase/auth'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { userLogin } from '../Store/userSlice';
import { useNavigate } from 'react-router-dom'

const GoogleOAuth = () => {
const dispatch = useDispatch()
const navigate = useNavigate()

const loginWithGoogle = async()=>{

    try {
        const auth = getAuth(app)
        const provider =  new GoogleAuthProvider()
        const result = await signInWithPopup(auth,provider)

        const res = await fetch('https://bajaj-store.onrender.com/api/user/google',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            credentials:"include",
            body:JSON.stringify({
                username:result.user.displayName,
                email:result.user.email,
                avatar:result.user.photoURL
            }),
        });
        const data = await res.json();

        if(!data.success){
            return toast.error(data.message)
        }
        dispatch(userLogin(data))
        toast.success(data.message)
        navigate('/')
    } catch (error) {
        console.log(error.message)
    }

}
return (
    <div className='bg-white shadow px-2 py-1 rounded flex justify-center gap-2 items-center'>
        <img className='w-4 h-4' src="./google.png" alt="" />
        <button onClick={loginWithGoogle} type='button'  className=''>Continue to Google</button>
    </div>
)
}

export default GoogleOAuth