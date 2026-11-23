import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import TVHome from './Pages/AppleTV.jsx'
import Header from './Components/Header'
import MusicX from './Pages/MusicX'
import EnviromentX from './Pages/EnviromentX'

const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/music" element={<MusicX />} />
          <Route path='/environment' element={<EnviromentX />} />

          <Route path='/TV-Home' element={<TVHome />} />
          <Route path='/AppleArcade' element={<AppleArcade />} />

        </Routes>
      </main>


    </div>
  )
}

export default App