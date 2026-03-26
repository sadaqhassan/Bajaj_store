import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Components/Nav'
import Login from './Pages/Login'
import { ToastContainer} from 'react-toastify';
import Profile from './Pages/Profile'
import ProtectPage from './Pages/ProtectPage'


const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Login/>}/>
        <Route path='/profile' element={<ProtectPage/>}>
        <Route index element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App