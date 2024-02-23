<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17.5px', color: 'white' }}>
  <span>I'm feeling </span>
  <AutocompleteInput 
    ref={emotionInputRef} 
    suggestions={emotions} 
    setSelectedEmotion={setSelectedEmotion}
    onEnter={focusContextInput}
  />
  <span> about </span>
  <ContextInput 
    ref={contextInputRef} 
    value={context} 
    onContextChange={setContext}
    onEnter={generatePrayer} 
  />
  <span style={{ marginLeft: '0px', marginRight: '10px' }}>.</span>
  <Button style={buttonStyle} onClick={generatePrayer} icon>
    <Icon name='chevron right' />
  </Button>
</div>

/*

Now that you're familiar with my App component, below is my Home, Step1,  Emotion, and Context components. 

My goal is to make it such that after a user goes through all the steps (outlined in Home.js), a new prayerSession object is created and added to the prayerSessions array.

Right now, I have it such that completing each step updates the values of certain attributes of a newPrayerSession object, which is created when the user clicks on the 'Begin' button.

How do I make it such that after a user completes step 1, both the emotion and context values are updated into the new prayerSession object?

*/

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

const Home = ({ handleBegin, handleEmotion, handleContext, handlePrayer, handleInsight, handleTask, handleTaskStatus, handleCompletePrayerSession }) => {
    const [activeStep, setActiveStep] = useState(0);

    const onBegin = () => {
        renderStep1();
        handleBegin();
    };

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
                        <Button onClick={onBegin} color='blue' size="Medium" className="begin-btn">
                        Begin
                        </Button>
                    </>
                )}
                {activeStep === 1 && (<Step1 renderStep2={renderStep2} handleEmotion={handleEmotion} handleContext={handleContext} handlePrayer={handlePrayer}/>)}
                {activeStep === 2 && (<Step2 renderStep3={renderStep3}/>)}
                {activeStep === 3 && (<Step3 renderStep4={renderStep4} handleInsight={handleInsight}/>)}
                {activeStep === 4 && (<Step4 renderStep5={renderStep5} handleTask={handleTask}/>)}
                {activeStep === 5 && (<Step5 renderClosingMessage={renderClosingMessage} handleTaskStatus={handleTaskStatus} handleCompletePrayerSession={handleCompletePrayerSession}/>)}
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

import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import Emotion from './Emotion';
import Context from './Context';
import Prayer from './Prayer';

const Step1 = ({ renderStep2, handleEmotion, handleContext, handlePrayer }) => {
  return (
    <Segment padded="very" textAlign="center">
      <Header as="h1">Step 1. Generate Prayer</Header>
      <Emotion handleEmotion={handleEmotion}/>
      <Context handleContext={handleContext}/>
      <hr/>
      <Prayer handlePrayer={handlePrayer}/>
      <Button onClick={renderStep2}primary>Next</Button>
      </Segment>
  );
};

export default Step1;

import React, { useState } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';

const Emotion = ({ handleEmotion }) => {
  const [emotion, setEmotion] = useState('');

  const handleEmotionChange = (value) => {
    setEmotion(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!emotion.trim()) {
      alert("Please fill in this field.");
      return;
    };
    handleEmotion(emotion);
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column>
        <Form onSubmit={handleSubmit}>
            <Form.Input 
              placeholder="anxious" 
              width={6} 
              value={emotion}
              onChange={e => handleEmotionChange(e.target.value)}
            />
            <Button type="submit" primary>Next</Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Emotion;

import React, { useState } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';

const Context = ({ handleContext }) => {
  const [context, setContext] = useState('');

  const handleContextChange = (value) => {
    setContext(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!context.trim()) {
      alert("Please fill in this field.");
      return;
    };
    handleContext(context);
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input 
              placeholder="my presentation tomorrow" 
              width={6} 
              value={context}
              onChange={e => handleContextChange(e.target.value)}
            />
            <Button type="submit" primary>Next</Button>
          </Form.Group>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Context;