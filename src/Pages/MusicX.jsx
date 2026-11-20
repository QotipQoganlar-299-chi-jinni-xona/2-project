import React from "react";
import SectionMusicX from "../Components/SectionMusicX";
import MusicOffers from "../Components/MusicOffersX";
import AudioQuality from "../Components/AudioQualityX";
import MusicDevices from "../Components/MusicDevicesX";
import MusicPlans from "../Components/MusicPlansX";
import Question from "../Components/QuestionX";
import MusicNotes from "../Components/MusicNotesX";

const MusicX = () => {
    return (
        <div>

            <main>

                <SectionMusicX />
                <MusicOffers />
                <AudioQuality />
                <MusicDevices />
                <MusicPlans />
                <Question/>
                <MusicNotes/>


            </main>
        </div>
    );
};

export default MusicX;
