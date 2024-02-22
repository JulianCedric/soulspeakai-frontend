import React from 'react';

const IntroText = () => {
    return (
        <>
            <div>
                <div>
                    <h1 className="soulSpeakHeading">
                        Soul<span className="soulSpeakSpan">Speak</span><span className="soulSpeakAiSpan">ai</span>
                    </h1>
                    <p className="soulSpeakTagline">Your very own <span className="whiteText">ai</span> prayer partner.</p>
                    <br/><br/>
                </div>
                <div className="contentText">
                    <p>
                    <span className='whiteText'>SoulSpeakai</span> is designed to help you turn strong emotions into <strong className='italicText'>right action</strong>.
                    </p>
                    <p>
                    Whenever you feel a strong emotion about a situation in your life, let your ai prayer partner guide you through these 5 steps:
                    </p>
                </div>
            </div>
        </>
    );
};

export default IntroText;