import React, { useState } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';

const Emotion = ({ emotion, setEmotion }) => {
  return (
    <Form.Input 
      placeholder="anxious" 
      value={emotion}
      onChange={e => setEmotion(e.target.value)}
    />
  );
};

export default Emotion;