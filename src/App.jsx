import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Muhammadjon123 from './Pages/Muhammadjon123'


const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Ossoni' element={<Muhammadjon123 />} />
        </Routes>
      </main>

    </div>
  )
}

export default App