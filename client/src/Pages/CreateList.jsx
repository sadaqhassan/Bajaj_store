import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const CreateList = () => {
    const {currentUser} = useSelector((state)=>state.user)
    const [inputData,setInputData] = useState({})
    const [files,setFiles] = useState([])
    const [preview,setPreview] = useState([])
    const [error,setError] = useState("")

    const handleFile = async (e) => {
        const images = Array.from(e.target.files)
        if (images.length < 3) {
        alert("Please select at least 3 images");
            return;
        }
        const imgUri = images.map((img)=>URL.createObjectURL(img));
        setPreview(imgUri)
        setFiles(images)
    }

    //preset
    const submitFiles = async (e) => {
        try {
            for(let i = 0 ; i < files.length; i++ ){
                const data = new FormData();
                data.append("file",files[i])
                data.append("upload_preset","theBajaj_store")
                const res = await fetch(
                    "https://api.cloudinary.com/v1_1/ds0ianhj2/image/upload",
                    {
                    method: "POST",
                    body: data,
                    }
                );
                const result = await res.json();
            
                setInputData((prev)=>({...prev,images:result.secure_url}));
                const image_secure_uri = result.secure_url
                console.log(image_secure_uri)
                }
        } catch (error) {
            toast.error(error)
            console.log(error)
        }
    }
    const handleChange = async (e) => {
        const {name,value} = e.target
        setInputData((prev)=>({
            ...prev,
            [name]:value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputData)

        if(!inputData.model || !inputData.price || !inputData.type ){
            return toast.error("please fill all")
        }

        const res = await fetch("http://localhost:4000/api/bajajs/create-bajaj",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            credentials:"include",
            body:JSON.stringify(inputData)
        });

        const data = await res.json();

        if(!data.success){
            return toast.error(data.message);
        }

        toast.success(data.message);

    }


    useEffect(()=>{
        if(!inputData?.email){
            setInputData((prev)=>({...prev,contact:currentUser?.email}))
        }
    },[])
  return (
    <div className='flex flex-col justify-center items-center mt-16'>
            <style>
                {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                    * {
                        font-family: "Poppins", sans-serif;
                    }
                `}
            </style>

            <section className="flex items-center justify-center py-4 px-4">
                <div className="grid md:grid-cols-2 md:gap-10 lg:gap-20 max-w-7xl w-full items-center">

                    <div className="p-5">
                        <h1 className="text-3xl font-semibold text-gray-900 text-center md:text-start mb-3 tracking-tight">
                            publish your bajaj
                        </h1>
                        <p className="text-sm/6 text-gray-600 text-center md:text-start mx-auto md:mx-0 mb-8 leading-relaxed max-w-[400px]">
                            Have a question or idea? Our approachable team would love to connect and support you.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4 mb-5">
                                <div>
                                    <label className="block text-sm text-gray-500 mb-2">Model</label>
                                    <select name='model' onChange={handleChange} className="px-3 py-3 text-sm outline-none cursor-pointer text-gray-600 bg-white border rounded-xl border-gray-300">
                                        <option>RE</option>
                                        <option>BAGGIO</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-2">Price</label>
                                    <input name='price' onChange={handleChange} type="number" placeholder="3,000" className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />  
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="block text-sm text-gray-500 mb-2">Email contect</label>
                                <input  onChange={(e)=>setInputData((prev)=>({...prev,contact:e.target.value ? e.target.value : currentUser?.email}))}  type="email" placeholder={currentUser?.email} className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors"/>
                            </div>

                            <div className="mb-5 grid grid-cols-2 gap-4">
                            <div>
                            <label className="block text-sm text-gray-500 mb-2">Type <span className='text-xs text-gray-400'>new/second</span></label>
                            <select name='type' onChange={handleChange} className="px-3 py-3 text-sm outline-none cursor-pointer text-gray-600 bg-white border rounded-xl border-gray-300">
                                <option>new</option>
                                <option>second</option>
                            </select>

                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 mb-2">discount <span className='text-xs text-gray-400'>$</span></label>
                                <input name='discount' onChange={handleChange} type="number" placeholder="200" className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />  

                            </div>
                            </div>

                            <div className="mb-5">
                                <label className="block text-sm text-gray-500 mb-2">Discription</label>
                                <textarea name='discription' onChange={handleChange} rows="4" placeholder='discription about your bajaj......' className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none resize-y focus:border-indigo-500 transition-colors"/>
                            </div>

                            

                            <button type="submit" className="w-full py-3.5 bg-linear-to-br from-indigo-500 to-purple-600 text-white rounded-lg text-sm cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(99,102,241,0.3)]" >
                                publish
                            </button>
                        </form>
                    </div>

                <div className="rounded-3xl p-10 relative min-h-[662px] w-full max-w-[520px] md:flex flex-col  overflow-hidden">
                        <p className='py-5 '>Bajaj images <span className='text-xs ml-3 text-gray-500'>( choose atleast 3 images)</span></p>
                    <label htmlFor="fileInput" className="border bg-white rounded-md text-sm w-80 border-indigo-600/60 p-8 flex flex-col items-center gap-4  cursor-pointer hover:border-indigo-500 transition">
                <path d="M25.665 3.667H11a3.667 3.667 0 0 0-3.667 3.666v29.334A3.667 3.667 0 0 0 11 40.333h22a3.667 3.667 0 0 0 3.666-3.666v-22m-11-11 11 11m-11-11v11h11m-7.333 9.166H14.665m14.667 7.334H14.665M18.332 16.5h-3.667" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <p className="text-gray-500">Drag & drop your images here</p>
                        <p className="text-gray-400">Or <span className="text-indigo-500 underline">click</span> to upload</p>
                        <input accept='image/*' multiple id="fileInput" onChange={handleFile} type="file" hidden />
                    </label>
                    <div className='w-full max-w-[520px] mt-5'>
                    {files.length > 0 && <h1 className='text-gray-600 text-sm'>({files.length}) images</h1>}
                    <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
                    {
                        preview.length > 0 && preview.map((img)=>(
                            <img className='w-20 h-20 rounded ' src={img} alt="" />
                        ))
                    }
                    {
                        preview.length > 0 &&  !inputData?.images?.length <= 0 ?  <button onClick={()=>alert("submited")} className='border border-green-600 rounded-2xl '>✔️</button> : <button onClick={submitFiles} className='bg-cyan-600 px-2 py-1 rounded text-white'>submit</button>
                    }
                    </div>
                </div>
                </div>
                </div>
            </section>
    </div>
  )
}

export default CreateList