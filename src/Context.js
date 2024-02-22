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