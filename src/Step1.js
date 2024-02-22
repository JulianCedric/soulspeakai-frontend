import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import EmotionAndContext from './EmotionAndContext';
import GeneratedPrayer from './GeneratedPrayer';

const Step1 = ({ renderStep2, handleEmotion, handleContext }) => {
  const [newEmotion, setNewEmotion] = useState('');
  const [newContext, setNewContext] = useState('');
  const [newGeneratedPrayer, setNewGeneratedPrayer] = useState('');

  return (
    <Segment padded="very" textAlign="center">
      <Header as="h1">Step 1. Generate Prayer</Header>
      <EmotionAndContext handleEmotion={handleEmotion} handleContext={handleContext}/>
      <hr/>
      <GeneratedPrayer />
      <Button onClick={renderStep2}primary>Next</Button>
      </Segment>
  );
};

export default Step1;