import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Components/Nav'
import Login from './Pages/Login'

const App = () => {
  return (
    <div>

      <Nav/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App