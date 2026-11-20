import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AppleArcade from './Pages/AppleArcade'
const App = () => (
  <div>


    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/AppleArcade' element={<AppleArcade />} />
    </Routes>
  </div>
)

export default App