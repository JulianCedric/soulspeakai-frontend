import React, { useState } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';

const EmotionAndContext = ({ handleEmotion, handleContext }) => {
  const [emotion, setEmotion] = useState('');
  const [context, setContext] = useState('');

  const handleEmotionChange = (value) => {
    setEmotion(value);
  };

  const handleContextChange = (value) => {
    setContext(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleEmotion(emotion);
    handleContext(context);
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input 
              placeholder="anxious" 
              width={6} 
              value={emotion}
              onChange={e => handleEmotionChange(e.target.value)}
            />
            <Form.Input 
              placeholder="my presentation tomorrow" 
              width={6} 
              value={context}
              onChange={e => handleContextChange(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" primary>Next</Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default EmotionAndContext;