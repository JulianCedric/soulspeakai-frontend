import React, { useState } from 'react';
import { Container, Header, Button, Input, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const Step4 = ({ renderStep5, handleTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTask(task);
    setTask('');
  };

  return (
    <Container text style={{ marginTop: '5em' }}>
      <Header as='h2' content='Step 4. Decide on your next right move.' textAlign='left' style={{ color: 'white', fontSize: '1.25em' }} />
      <p className='steps-style'>Pinpoint a <strong>specific action</strong>.</p>
      <div style={{ marginTop: '2em' }}>
        <p className='steps-style'>After reflecting on your emotions and insights, it's time to think about action.</p>
        <p className='steps-style'>What is one small, concrete action you can take right now or plan to take soon?</p>
        <p className='steps-style'>Identify your next right move as a task below:</p>
        <br/>
        <Form onSubmit={handleSubmit}>
          <div className='custom-input'>
            <Input
              autoFocus
              placeholder='e.g. a task to complete, a person to contact, etc.'
              value={task}
              onChange={(e) => setTask(e.target.value)}
              fluid
            />
          </div>
          <Button
            content='Save'
            primary
            style={{ marginTop: '1em' }}
          />
        </Form>
      </div>
      <Button
        content='Next'
        primary
        style={{ marginTop: '1em' }}
        onClick={renderStep5}
      />
    </Container>
  );
};

export default Step4;