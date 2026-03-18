import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Components/Nav'

const App = () => {
  return (
    <div>

      <Nav/>

      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App