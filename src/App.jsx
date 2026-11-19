import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Ossoni from './Components/Ossoni'

const App = () => {
  return (
    <div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/MuhammadjonR' element={<Ossoni/>} />
      </Routes>
    </div>
  )
}

export default App