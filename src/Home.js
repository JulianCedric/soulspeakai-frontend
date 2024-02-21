import React, { useState } from 'react';
import { Container, Header, Button, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Step1 from './Step1';

const Home = () => {
    const [activeStep, setActiveStep] = useState(0);

    const testStyling = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',      
    };

    const renderStep1 = () => {
        setActiveStep(1);
    };

    const renderStep2 = () => {
        setActiveStep(2);
    };


  return (
    <div style={testStyling}>
        <Segment inverted textAlign="center" vertical className="full-height" style={{ padding: '1em 0em', backgroundColor: 'black' }}>
        <Container>
            <div>
                <h1 className="soulSpeakHeading" style={{ textAlign: 'center', color: 'cornflowerblue', fontSize: '70px' }}>
                Soul
                <span style={{ color: '#4169e1' }}>Speak</span><span style={{ color: '#f0f0f0' }}>ai</span>
                </h1>
                <p className="soulSpeakTagline" style={{ textAlign: 'center', fontSize: '28px', color: 'rgb(150, 150, 150)' }}>Your very own <span style={{ color: 'rgb(255, 255, 255)' }}>ai</span> prayer partner.</p>
                <br/><br/>
            </div>
            <p className="content-text" style={{ fontSize: '1.33em' }}>
            SoulSpeakai is designed to help you turn strong emotions into <strong>right action</strong>.
            </p>
            <p className="content-text" style={{ fontSize: '1.33em' }}>
            Whenever you feel a strong emotion about a situation in your life, let your ai prayer partner guide you through these 5 steps:
            </p>
            <Button onClick={renderStep1}primary size="huge" className="begin-btn">
            Begin
            </Button>
            {activeStep === 1 && (<Step1 renderStep2={renderStep2}/>)}
            <br/>
            <br/>
            <br/>
        </Container>
        <footer style={{ position: 'absolute', bottom: '0', width: '100%', padding: '1em 0', textAlign: 'center', color: 'white' }}>
            &copy; 2024 SoulSpeakai. All rights reserved.
        </footer>
        </Segment>
    </div>
  );
};

export default Home;