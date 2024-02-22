import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';

const EmotionAndContext = () => {
  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column>
        <Form>
          <Form.Group inline>
            <Form.Field width={1}></Form.Field>
            <p> I'm feeling </p>
            <Form.Input 
              placeholder="anxious" 
              width={6} 
            />
            <p> about </p>
            <Form.Input 
              placeholder="my presentation tomorrow" 
              width={6} 
            />
            <p> . </p>
            <Form.Field width={1}></Form.Field>
          </Form.Group>
          <Button primary>Next</Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default EmotionAndContext;