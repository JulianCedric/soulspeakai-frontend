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