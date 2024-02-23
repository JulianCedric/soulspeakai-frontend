import React from 'react';

const IntroText = () => {
    return (
        <>
            <div>
                <div>
                    <h1 className="soul-speak-heading">
                        Soul<span className="soul-speak-span">Speak</span><span className="soul-speak-ai-span">ai</span>
                    </h1>
                    <p className="soul-speak-ai-tagline">Your very own <span className="white-text">ai</span> prayer partner.</p>
                    <br/><br/>
                </div>
                <div className="content-text">
                    <p>
                    <span className='white-text'>SoulSpeakai</span> is designed to help you turn strong emotions into <strong className='italic-text'>right action</strong>.
                    </p>
                    <p>
                    {/* Whenever you feel a strong emotion about a situation in your life, let your ai prayer partner guide you through these 5 steps: */}
                    Whenever you feel a strong emotion about a situation in your life, let your ai prayer partner guide you through these 5 steps:
                    </p>
                    <br/>
                    <hr style={{ backgroundColor: 'rgb(50, 50, 50)', border: 'none', height: '2px' }}/>
                </div>
            </div>
        </>
    );
};

export default IntroText;