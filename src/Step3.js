import React, { useState } from 'react';
import { Container, Header, Button, TextArea, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Step3 = ({ renderStep4, handleInsight }) => {
  const [insight, setInsight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Insight:', insight);
    handleInsight(insight);
    setInsight('');
  };

  return (
    <Container text style={{ marginTop: '5em' }}>
      <Header as='h2' content='Step 3. Think' textAlign='left' style={{ color: 'white' }} />
      <p style={{ textAlign: 'center', marginTop: '1em' }}>
        (or simply be still) until you have clarity.
      </p>
      <div style={{ marginTop: '2em' }}>
        <p>Reflect on your emotions, thoughts, and the guidance you've sought.</p>
        <p>What insights or clarity have you gained?</p>
        <p>Write out anything that stands out to you below:</p>
        <Form onSubmit={handleSubmit}>
          <TextArea
            autoFocus 
            placeholder='e.g. a new perspective, a new possibility, etc.' 
            style={{ minHeight: 100 }} 
            value={insight} 
            onChange={(e) => setInsight(e.target.value)}
          />
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
        onClick={renderStep4}
      />
    </Container>
  );
};

export default Step3;