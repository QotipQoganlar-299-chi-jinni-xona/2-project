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
import MainApple from './Components/MainApple'
import MainEssentialsM from './Components/MainEssentialsM'
import MainSignificantM from './Components/MainSignificantM'
import MainExploreiPhoneM from './Components/MainExploreiPhoneM'
import MainPricingM from './Components/MainPricingM'
import MFooterM from './Components/FooterMM'
import MainFooterM from './Pages/MainFooterM'
import MainAppl from './Pages/MainAppl'
import MainEssentM from './Pages/MainEssentM'
import Mainimgg from './Pages/Mainimgg'
import MainSign from './Pages/MainSign'
import MainExplorei from './Pages/MainExplorei'
import MainPrinching from './Pages/MainPrinching'
import FooterMM from './Components/FooterMM'

const App = () => {
  return (
    <div>
      <Header />
      <MainIphone16M />
      <MainGet />
      <MainLineup />
      <MainImg/>
      <MainApple/>
      <MainEssentialsM/>
      <MainSignificantM/>
      <MainExploreiPhoneM/>
      <MainPricingM/>
      <FooterMM/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Ger' element={<MainGet />} />
        <Route path='/Iph' element={<MainIphone />} />
        <Route path='/Line' element={<MainLine />} />
        <Route path='/FooterM' element={<MainFooterM />} />
        <Route path='/Appl' element={<MainAppl/>} />
        <Route path='/EssentM' element={<MainEssentM />} />
        <Route path='/imgg' element={<Mainimgg />} />
        <Route path='/Sign' element={<MainSign />} />
        <Route path='/Explorei' element={<MainExplorei/>} />
        <Route path='/Prinching' element={<MainPrinching/>} />

      </Routes>
    </div>
  )
}

export default App