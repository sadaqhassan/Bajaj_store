import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { imageUploading } from '../Store/userSlice'

const Profile = () => {
  const dispatch = useDispatch()
  const [uploadImge,setUploadImage] = useState("")
  const fileRef = useRef()

  const handleFileChange = async(e)=>{
    let file = e.target.files[0]
    let imageUri = URL.createObjectURL(file);

    setUploadImage(imageUri);

    const data = new FormData();
    data.append("file",file)
    data.append("upload_preset","theBajaj_store")

    const res = await fetch(
        "https://api.cloudinary.com/v1_1/ds0ianhj2/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();
      setUploadImage(result.secure_url);
      const image_secure_uri = result.secure_url

      const resImage = await fetch("http://localhost:4000/api/user/upload-image",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        credentials : "include",
        body:JSON.stringify({imageUri:image_secure_uri})
      });
      const imageData = await resImage.json()

      if(!imageData.success){
        console.log(imageData)
        toast.error(imageData.message)
      }
      
      toast.success(imageData.message);
      dispatch(imageUploading(imageData.image))
      console.log(currentUser)

  }

  

  const {currentUser} = useSelector((state)=>state.user)
    const handleChange = ()=>{
    }
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
        <div className='bg-white shadow-2xl roundeded p-10'>
            <h1 className='text-center text-2xl font-medium mb-4'>Profile</h1>
            <img onClick={()=>fileRef.current.click()} src={uploadImge? uploadImge : currentUser.avatar? currentUser.avatar : "./user.png"} alt="" className='w-18 h-18 rounded-full mb-5 ml-15'/>
            <input onChange={handleFileChange} hidden type="file" name="file" ref={fileRef} id="" />
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