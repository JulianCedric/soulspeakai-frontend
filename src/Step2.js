import React from 'react';
import { Container, Button, Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Step2 = ({ renderStep3 }) => {
  return (
    <Container text style={{ marginTop: '5em' }}>
      <Header as='h2' content='Step 2. Pray' textAlign='left' style={{ color: 'white' }}/>
      <p style={{ fontSize: '1.33em', textAlign: 'center', marginTop: '2em' }}>
        Pray until you're calm.
      </p>
      <p style={{ fontSize: '1.33em', textAlign: 'center', margin: '2em 0' }}>
        Use the tools below to hear your prayer read aloud—or in an audioloop.
      </p>
      <p style={{ fontSize: '1.33em', textAlign: 'center', marginBottom: '2em' }}>
        And when you're ready, proceed to the next step.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2em' }}>
        <Button icon>
          <Icon name='play' />
        </Button>
        <Button icon>
          <Icon name='pause' />
        </Button>
        <Button icon>
          <Icon name='stop' />
        </Button>
        <Button icon>
          <Icon name='sync' />
        </Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={renderStep3} primary content='Next' />
      </div>
    </Container>
  );
};

export default Step2;