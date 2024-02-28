import React, { useEffect } from 'react';
import { Container, Button, Header, Icon, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const Step2 = ({ renderStep3, handlePrayer, prayer }) => {
  useEffect(() => {
    if (prayer) {
      handlePrayer(prayer);
    }
  }, [prayer]);

  return (
    <Container text style={{ marginTop: '5em' }}>
      <Header as='h2' content='Step 2. Pray' textAlign='left' style={{ color: 'white', fontSize: '1.25em' }}/>
      <p className='steps-style'>Pray until you're calm.</p>
      <br/>
      {/* <p className='steps-style'>Use the tools below to hear your prayer read aloud—or in an audioloop.</p> */}
      <br/>
      {prayer}
      <br/><br/>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2em' }}>
        {/* <Button icon>
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
        </Button> */}

        <p className='steps-style'>And when you're ready, proceed to the next step.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={renderStep3} primary content='Next' />
      </div>
    </Container>
  );
};

export default Step2;