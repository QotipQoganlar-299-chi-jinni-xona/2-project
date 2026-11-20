import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import MainIphone16M from './Components/MainIphone16M'
import MainGet from './Components/MainGet'
import Header from './Components/Header'
import MainLineup from './Components/MainLineup'
import MainIphone from './Pages/MainIphone'
import MainLine from './Pages/MainLine'
import MainImg from './Components/MainImg'

const App = () => {
  return (
    <div>
      <Header />
      <MainIphone16M />
      <MainGet />
      <MainLineup />
      <MainImg/>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Ger' element={<MainGet />} />
        <Route path='/Iph' element={<MainIphone />} />
        <Route path='/Line' element={<MainLine />} />
      </Routes>
    </div>
  )
}

export default App