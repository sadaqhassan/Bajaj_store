import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon } from 'lucide-react'

const Nav = () => {
  const [menuOpen , setMenuOpen] = useState(false) 
  return (
    <div>
      {/* ...Desktop... */}
      <div className='md:flex text-white hidden justify-between px-10 py-4 rounded bg-gray-700'>
        <p>Bajaj_Store</p>
        <div className='flex items-center gap-4'>
          <Link to={'/'}> Home </Link>
          <Link to={'/'}> Bajajs </Link>
          <Link to={'/'}> My Lists </Link>
        </div>
        <div className='relative group'>
          <img src="./user.png" alt="" className='w-10 h-10 rounded-full'/>
          <div className='gap-4 hidden group-hover:block'>
            <Link to={'/profile'}>Profile</Link>
            <button>Logout</button>
          </div>
        </div>
      </div>

      {/* ...mobile... */}
      <div className='flex justify-between px-4 md:hidden py-4 rounded bg-gray-700'>
        <p>Bajaj_Store</p>
        <div className='flex space-x-4'>
            <button>Logout</button>
            <button onClick={()=>setMenuOpen(!menuOpen)}> <MenuIcon/></button>
        </div>

        {
          menuOpen &&
          <div className='flex flex-col md:hidden items-center gap-4'>
          <Link to={'/'}> Home </Link>
          <Link to={'/'}> Bajajs </Link>
          <Link to={'/'}> My Lists </Link>
        </div>
        }
      </div>
    </div>
  )
}

export default Nav