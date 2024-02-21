import React, { useState } from 'react';
import { Container, Header, Button, TextArea, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Step3 = ({ renderStep4 }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSave = () => {
    console.log('Saved input:', input);
    handleInsight(input);
    setInput('');
  };

  return (
    <Container text style={{ marginTop: '5em' }}>
      <Header as='h2' content='Step 3. Think' textAlign='center' />
      <p style={{ textAlign: 'center', marginTop: '1em' }}>
        (or simply be still) until you have clarity.
      </p>
      <div style={{ marginTop: '2em' }}>
        <p>Reflect on your emotions, thoughts, and the guidance you've sought.</p>
        <p>What insights or clarity have you gained?</p>
        <p>Write out anything that stands out to you below:</p>
        <Form>
          <TextArea 
            placeholder='e.g. a new perspective, a new possibility, etc.' 
            style={{ minHeight: 100 }} 
            value={input} 
            onChange={handleInputChange}
          />
          <Button 
            content='Save' 
            primary 
            style={{ marginTop: '1em' }} 
            onClick={handleSave}
          />
        </Form>
      </div>
      <Button 
        content='Next' 
        primary 
        style={{ marginTop: '1em' }} 
        onClick={renderStep4}
      />
    </Container>
  );
}

export default Step3;