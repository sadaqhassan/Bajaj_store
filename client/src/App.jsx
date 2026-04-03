import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Components/Nav'
import Login from './Pages/Login'
import { ToastContainer} from 'react-toastify';
import Profile from './Pages/Profile'
import ProtectPage from './Pages/ProtectPage'
import CreateList from './Pages/createList'
import MyList from './Pages/MyList'
import Bajajs from './Pages/Bajajs'


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
        <Route path='create-list' element={<CreateList/>}/>
        <Route path='my-list' element={<MyList/>}/>
        <Route path='all-lists' element={<Bajajs/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App