import React from 'react'
import Footer from '../Components/FooterX'
import EnvHero from '../Components/EnvHeroX'
import EnvApproachX from '../Components/EnvApproachX'
import EnvProofX from '../Components/EnvProofX'
import EnvReportsX from '../Components/EnvReportsX'

const EnviromentX = () => {
    return (
        <div>

            <main>
                <EnvHero/>
                <EnvApproachX/>
                <EnvProofX/>
                <EnvReportsX/>
            </main>


            <Footer />
        </div>
    )
}

export default EnviromentX