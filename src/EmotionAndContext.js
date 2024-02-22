import React, { useState } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';

const EmotionAndContext = ({ handleEmotion, handleContext }) => {
  const [emotion, setEmotion] = useState('');
  const [context, setContext] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emotion.trim() || !context.trim()) {
      alert("Please fill in both fields.");
      return;
    }
    setIsSubmitting(true);
    handleEmotion(emotion);
    handleContext(context);
    setIsSubmitting(false);
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: '100vh' }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>I'm feeling</label>
            <Form.Input 
              placeholder="anxious" 
              value={emotion}
              onChange={(e) => setEmotion(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>about</label>
            <Form.Input 
              placeholder="my presentation tomorrow" 
              value={context}
              onChange={(e) => setContext(e.target.value)}
            />
          </Form.Field>
          <Button type='submit' primary loading={isSubmitting}>Next</Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default EmotionAndContext;
