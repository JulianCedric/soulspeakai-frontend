import React, { useState } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';

const EmotionAndContext = ({ handleEmotion, handleContext }) => {
  const [emotion, setEmotion] = useState('');
  const [context, setContext] = useState('');

  const handleEmotionChange = (emotion) => {
    setEmotion(emotion);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEmotion(emotion);
  };

  const handleContextChange = (context) => {
    setContext(context);
  };

  const handleContextSubmit = (e) => {
    e.preventDefault();
    handleContext(context);
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column>
        <Form onSubmit={handleSubmit}>
          <Form.Group inline>
            <Form.Field width={1}></Form.Field>
            <p> I'm feeling </p>
            <Form.Input 
              placeholder="anxious" 
              width={6} 
              value={emotion}
              onChange={e => handleEmotionChange(e.target.value)}
            />
            <p> about </p>
            <Form.Input 
              placeholder="my presentation tomorrow" 
              width={6} 
              value={context}
              onChange={e => handleContextChange(e.target.value)}
            />
            <p> . </p>
            <Form.Field width={1}></Form.Field>
          </Form.Group>
          <Button onClick={handleEmotion} primary>Next</Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default EmotionAndContext;