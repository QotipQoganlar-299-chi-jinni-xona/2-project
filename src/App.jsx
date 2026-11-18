import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
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


    </div>
  )
}

export default App