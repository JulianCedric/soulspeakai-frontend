import React, { useState } from 'react';
import { Container, Header, Button, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import IntroText from './IntroText';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import ClosingMessage from './ClosingMessage';

const Home = ({ handleInsight, handleTask, handleTaskCompleted }) => {
    const [activeStep, setActiveStep] = useState(0);

    const beginAgain = () => {
        setActiveStep(0);
    };

    const renderStep1 = () => {
        setActiveStep(1);
    };

    const renderStep2 = () => {
        setActiveStep(2);
    };

    const renderStep3 = () => {
        setActiveStep(3);
    };

    const renderStep4 = () => {
        setActiveStep(4);
    };

    const renderStep5 = () => {
        setActiveStep(5);
    };

    const renderClosingMessage = () => {
        setActiveStep(6);
    };

  return (
    <div className='home-style'>
        <Segment inverted textAlign="center" vertical className="full-height" style={{ padding: '1em 0em', backgroundColor: 'rgb(20, 20, 20' }}>
            <Container className='content-style'>
                <IntroText />
                {activeStep === 0 && (
                    <>
                        <br/><br/><br/><br/><br/><br/><br/>
                        <Button onClick={renderStep1} color='blue' size="Medium" className="begin-btn">
                        Begin
                        </Button>
                    </>
                )}
                {activeStep === 1 && (<Step1 renderStep2={renderStep2}/>)}
                {activeStep === 2 && (<Step2 renderStep3={renderStep3}/>)}
                {activeStep === 3 && (<Step3 renderStep4={renderStep4} handleInsight={handleInsight}/>)}
                {activeStep === 4 && (<Step4 renderStep5={renderStep5} handleTask={handleTask}/>)}
                {activeStep === 5 && (<Step5 renderClosingMessage={renderClosingMessage} handleTaskCompleted={handleTaskCompleted}/>)}
                {activeStep === 6 && (<ClosingMessage beginAgain={beginAgain}/>)}
                <br/>
                <br/>
                <br/>
            </Container>
        </Segment>
        <footer className='site-footer' style={{ position: 'absolute', bottom: '0', width: '100%', padding: '1em 0', textAlign: 'center', color: 'white' }}>
            &copy; 2024 SoulSpeakai. All rights reserved.
        </footer>
    </div>
  );
};

export default Home;