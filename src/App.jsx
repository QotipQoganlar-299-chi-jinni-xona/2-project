import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Assistance from './Pages/Assistance.jsx'

const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      

      <main>
        <Routes>




          <Route path="/" element={<Home />} />
          <Route path='/Assistance' element={<Assistance />} />




        </Routes>
      </main>


    </div>
  )
}

export default App