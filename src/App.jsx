import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Fromb from './Components/FromB.jsx'
import Getthehighlights from './Components/GetthehighlightsB.jsx'
import Takecloserlook from './Components/TakecloserlookB.jsx'
import Zoom from './Components/ZoomB.jsx'
import Quick from './Components/QuickB.jsx'
import Great from './Components/GreatB.jsx'
import Genmoji from './Components/GenmojiB.jsx'
import New from './Components/NewB.jsx'
import PhotographicB from './Components/PhotographicB.jsx'
import AlignB from './Components/AlignB.jsx'
import A18 from './Components/A18B.jsx'
import Even from './Components/EvenB.jsx'
import Durable from './Components/DurableB.jsx'
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
import Action from './Components/ActionB.jsx'
import Fsdcyui from './Pages/fsdcyui.jsx'
import Mesmerize from './Components/MesmerizeB.jsx'
import Designed from './Pages/Designed.jsx'
import A18B from './Components/A18B.jsx'
import GetthehighlightsB from './Components/GetthehighlightsB.jsx'
import TakecloserlookB from './Components/TakecloserlookB.jsx'
import ZoomB from './Components/ZoomB.jsx'
import QuickB from './Components/QuickB.jsx'
import GreatB from './Components/GreatB.jsx'
import GenmojiB from './Components/GenmojiB.jsx'
import NewB from './Components/NewB.jsx'
import EvenB from './Components/EvenB.jsx'
import DurableB from './Components/DurableB.jsx'
import ActionB from './Components/ActionB.jsx'
import MesmerizeB from './Components/MesmerizeB.jsx'
import TheresB from './Components/TheresB.jsx'
import Assistance from './Pages/Assistance.jsx'
import RoadsideB from './Components/RoadsideB.jsx'
import MakeB from './Pages/MakeB.jsx'
import DesignedB from './Components/DesignedB.jsx'
import Others from './Pages/Others.jsx'
import SignificantB from './Components/SignificantB.jsx'
import Place from './Pages/Place.jsx'
import AppleB from './Components/AppleB.jsx'
import KeepB from './Components/KeepB.jsx'
import Exploring from './Pages/Exploring.jsx'
import Monthly from './Pages/Monthly.jsx'
import TradeB from './Components/TradeB.jsx'
const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Fromb />

      <GetthehighlightsB />
      <TakecloserlookB />
      <ZoomB />
      <QuickB />
      <GreatB />
      <GenmojiB />
      <NewB />
      <PhotographicB />
      <AlignB />
      <A18B />
      <EvenB />
      <DurableB />
      <ActionB />
      <MesmerizeB />
      <TheresB />
      <RoadsideB />
      <DesignedB />
      <SignificantB />
      <AppleB />
      <KeepB />
      <TradeB />



      <main>
        <Routes>




          <Route path="/" element={<Home />} />

          <Route path="/fromt" element={<fromt />} />

          <Route path="/Go" element={<Go />} />

          <Route path="/Hi" element={<Hi />} />

          <Route path="/Make" element={<Makeui />} />

          <Route path="/Makeolp" element={<MakeKolp />} />

          <Route path="/Nbitbilk " element={<Nbitbil />} />

          <Route path="/Photograpin" element={<Photograpinty />} />

          <Route path="/Privacyer" element={<Privacyer />} />

          <Route path="/Sinifas" element={<Sinifas />} />

          <Route path="/Touchpo" element={<Touchpo />} />

          <Route path="/Whoui" element={<Whoui />} />

          <Route path="/Youllasd" element={<Youllasd />} />

          <Route path="/fsdcyui" element={<Fsdcyui />} />

          <Route path="/Designed" element={<Designed />} />

          <Route path="/TheresB" element={<TheresB />} />

          <Route path="/Assistance" element={<Assistance />} />

          <Route path="/MakeB" element={<MakeB />} />

          <Route path="/Others" element={<Others />} />

          <Route path="/Place" element={<Place />} />

          <Route path="/Exploring" element={<Exploring />} />

          <Route path="/Monthly" element={<Monthly />} />


        </Routes>
      </main>


    </div>
  )
}

export default App