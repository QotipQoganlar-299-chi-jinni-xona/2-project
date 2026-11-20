import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Fromb from './Components/FromB.jsx'
import Getthehighlights from './Components/Getthehighlights.jsx'
import Takecloserlook from './Components/Takecloserlook.jsx'
import Zoom from './Components/Zoom.jsx'
import Quick from './Components/Quick.jsx'
import Great from './Components/Great.jsx'
import Genmoji from './Components/Genmoji.jsx'
import New from './Components/New.jsx'
import PhotographicB from './Components/PhotographicB.jsx'
import AlignB from './Components/AlignB.jsx'
import A18 from './Components/A18.jsx'
import Even from './Components/Even.jsx'
import Durable from './Components/Durable.jsx'
import Go from './Pages/Go.jsx'
import Hi from './Pages/Hi.jsx'
import Makeui from './Pages/Makeui.jsx'
import MakeKolp from './Pages/Makeolp.jsx'
import Nbitbil from './Pages/Nbitbil.jsx'
import Photograpinty from './Pages/Photograpinty.jsx'
import Privacyer from './Pages/Privacyer.jsx'
import Sinifas from './Pages/Sinifas.jsx'
import Touchpo from './Pages/Touchpo.jsx'
import Whoui from './Pages/Whui.jsx'
import Youllasd from './Pages/Youllasd.jsx'
const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Fromb />

      <Getthehighlights />
      <Takecloserlook />
      <Zoom />
      <Quick />
      <Great />
      <Genmoji />
      <New />
      <PhotographicB />
      <AlignB />
      <A18 />
      <Even />
      <Durable />

      <main>
        <Routes>

          


          <Route path="/" element={<Home />} />
          
          <Route path="/fromt" element={<fromt />} />

          <Route path="/Go" element={<Go/>} />

          <Route path="/Hi" element={<Hi/>} />

          <Route path="/Make" element={<Makeui/>} />

          <Route path="/Makeolp" element={<MakeKolp />} />

          <Route path="/Nbitbilk " element={<Nbitbil />} />

          <Route path="/Photograpin" element={<Photograpinty />} />

          <Route path="/Privacyer" element={<Privacyer />} />
          
          <Route path="/Sinifas" element={<Sinifas />} />

          <Route path="/Touchpo" element={<Touchpo />} />

          <Route path="/Whoui" element={<Whoui />} />

          <Route path="/Youllasd" element={<Youllasd />} />


        </Routes>
      </main>


    </div>
  )
}

export default App