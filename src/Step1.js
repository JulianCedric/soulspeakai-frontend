import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import Emotion from './Emotion';
import Context from './Context';
import Prayer from './Prayer';
import './App.css';

const Step1 = ({ renderStep2, handleEmotion, handleContext, handlePrayer }) => {
  const [emotion, setEmotion] = useState('');
  const [context, setContext] = useState('');
  console.log('Step1.js: emotion:', emotion);
  console.log('Step1.js: context:', context);

  const handleSubmit = () => {
    if (!emotion.trim() || !context.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    handleEmotion(emotion);
    handleContext(context);
    renderStep2();
  };
  
  return (
    <Segment padded="very" textAlign="center" style={{ background: 'transparent', boxShadow: 'none', color: 'white' }}>
      <Header as="h1" style={{ color: 'white', fontSize: '1.25em', textAlign: 'left' }}>Step 1. Generate Prayer</Header>
      <br/><br/>
      <div className='inline-style'>
        <span>I'm feeling </span>
        <Emotion emotion={emotion} setEmotion={setEmotion}/>
        <span> about </span>
        <Context context={context} setContext={setContext}/>
        <span> .</span>
        {/* <Prayer handlePrayer={handlePrayer}/> */}
        <Button onClick={handleSubmit} primary>Enter</Button>
      </div>
    </Segment>
  );
};

export default Step1;