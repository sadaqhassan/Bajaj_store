import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MenuIcon } from 'lucide-react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../Store/userSlice'

const Nav = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUser = useSelector((state)=>state.user.currentUser)
  const [menuOpen , setMenuOpen] = useState(false)
  
  const LogoutFucntion = async () => {
    const res = await fetch("http://localhost:4000/api/user/logout",{
      method:"GET",
      credentials:"include"
    });
    const data = await res.json();
    if(!data.success){
      toast.error(data.message)
    }
    
    dispatch(userLogout())
    toast.success(data.message)
  } 

  return (
    <div>
      {/* ...Desktop... */}
      <div className='md:flex text-white hidden justify-between px-10 py-4 bg-gray-700'>
        <p>Bajaj_Store</p>
        <div className='flex items-center gap-4'>
          <Link to={'/'}> Home </Link>
          <Link to={'/'}> Bajajs </Link>
          <Link to={'/'}> My Lists </Link>
        </div>
        {
          currentUser  || currentUser !== null ?
          <div className='relative group'>
          <img src="./user.png" alt="" className='w-10 h-10 rounded-full'/>
          <ul className='hidden z-10 text-gray-900 px-4 rounded py-2 fixed  right-8  top-14 w-30 group-hover:block bg-white shadow-xl '>
            <li onClick={LogoutFucntion} className='cursor-pointer pb-3'>Logout</li>
            <li onClick={()=>navigate('/profile')} className='cursor-pointer '>Profile</li>
          </ul>
        </div> :
        <button onClick={()=>navigate('/auth')} className='bg-cyan-500 px-2 py-1 rounded'>Login</button>        
        }
      </div>

      {/* ...mobile... */}
      <div className='flex justify-between px-4 md:hidden py-4 text-white bg-gray-700'>
        <p>Bajaj_Store</p>
        <div className='flex space-x-4'>
          {
            !currentUser &&
            <button onClick={()=>navigate('/auth')} className='bg-cyan-500 px-2 py-1 rounded md:hidden'>Login</button>
          }
          <button onClick={()=>setMenuOpen(!menuOpen)}> <MenuIcon/></button>
        </div>
      </div>
      <hr />
      {
          menuOpen &&
          <div className='flex flex-col md:hidden items-start bg-gray-700 py-4 text-white pl-5 gap-4'>
          <Link to={'/'}> Home </Link>
          <Link to={'/'}> Bajajs </Link>
          <Link to={'/'}> My Lists </Link>
        </div>
        }
    </div>
  )
}

export default Nav