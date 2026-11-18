import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import From from './Components/FromB'

const App = () => {
  return (
    <div>
      <From />

      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </div>
  )
}

export default App