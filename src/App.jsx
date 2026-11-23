import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import AkromH from './Components/AkromH'
import AkromM from './Components/AkromM'
import AkromM3 from './Components/AkromM3'
import AkromM2 from './Components/AkromM2'
import AkromM4 from './Components/AkromM4'
import AkromF from './Components/AkromF'
import AkromF1 from './Components/AkromF1'
import AkromF3 from './Components/AkromF3'
import AkromFooter from './Components/AkromFooter'


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



            <div>
                <AkromH />
            </div>


            <div>
                <AkromM />
            </div>

            <div>
                <AkromM2 />
            </div>



            <div>
                <AkromM4 />
            </div>



            <div>
                <AkromF />
            </div>
            <div>
                <AkromF1 />
            </div>


            <div>
                <AkromF3 />
            </div>

            <div>
                <AkromFooter />
            </div>

        </div>
    )
}

export default App