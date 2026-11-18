import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import MainIphone16M from './Components/MainIphone16M'
import MainGet from './Components/MainGet'

const App = () => {
  return (
    <div>
      <MainIphone16M/>
      <MainGet/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App