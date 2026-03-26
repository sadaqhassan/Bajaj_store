import React from 'react'
import { app } from '../Utils/firebase'
import { GoogleAuthProvider, signInWithPopup ,getAuth} from 'firebase/auth'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { userLogin } from '../Store/userSlice'
const GoogleOAuth = () => {

const loginWithGoogle = async()=>{
    const dispatch = useDispatch
    try {
        const auth = getAuth(app)
        const provider =  new GoogleAuthProvider()
        const result = await signInWithPopup(auth,provider)

        const res = await fetch('http://localhost:4000/api/usr/google',{
            method:"POST",
            headers:{"Content-Type":"aplicattion/json"},
            body:JSON.stringify({
                username:result.user.reloadUserInfo.displayName,
                email:result.reloadUserInfo.user.email,
                avatar:result.user.reloadUserInfo.photoUrl
            }),
            credentials:"include"
        });
        const data = await res.json();

        if(!data.success){
            return toast.error(data.message)
        }
        dispatch(userLogin(data))
        toast.success(data.message)

        console.log(result.user.reloadUserInfo)
    } catch (error) {
        console.log(error)
    }

}

  return (
    <button onClick={loginWithGoogle} type='button' className='bg-white shadow px-2 py-1 rounded flex justify-center gap-2 items-center'>
        <img className='w-4 h-4' src="./google.png" alt="" />
        <p className=''>Continue to Google</p>
    </button>
  )
}

export default GoogleOAuth