import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Components/Nav'
import Login from './Pages/Login'
import { ToastContainer} from 'react-toastify';
import Profile from './Pages/Profile'


const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App