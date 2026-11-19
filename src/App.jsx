import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Ossoni from './Components/Ossoni'

const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/MuhammadjonR' element={<Ossoni/>} />
      </Routes>
    </div>
  )
}

export default App