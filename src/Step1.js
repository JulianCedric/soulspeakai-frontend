import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import Emotion from './Emotion';
import Context from './Context';
import Prayer from './Prayer';

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
    <Segment padded="very" textAlign="center">
      <Header as="h1">Step 1. Generate Prayer</Header>
      <Emotion emotion={emotion} setEmotion={setEmotion}/>
      <Context context={context} setContext={setContext}/>
      <hr/>
      {/* <Prayer handlePrayer={handlePrayer}/> */}
      <Button onClick={handleSubmit} primary>Next</Button>
      </Segment>
  );
};

export default Step1;