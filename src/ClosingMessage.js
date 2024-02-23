import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { useNavigate } from 'react-router-dom';

const ClosingMessage = ({ beginAgain }) => {
  const navigate = useNavigate();

  return (
    <Container text style={{ marginTop: '5em' }}>
      <Header as='h1' content='Well Done!' textAlign='center' style={{ color: 'white', fontSize: '1.25em' }}/>
      <p className='steps-style'>
        You've successfully navigated through all the steps to turn your emotions into right action. Remember, it's okay to have strong feelings, and what matters most is how you respond to them. SoulSpeakai is here to support you on this journey, anytime you need.
      </p>
      <Header as='h3' content='Reflect' style={{ color: 'white', fontSize: '1em', textAlign: 'left' }}/>
      <p className='steps-style'>
        Take a moment to appreciate the clarity and insights you've gained today. How do you feel now compared to when you started?
      </p>
      <Header as='h3' content='Next Steps' style={{ color: 'white', fontSize: '1em', textAlign: 'left' }}/>
      <p className='steps-style'>
        Life is a continuous journey of growth and self-discovery. Whenever you find yourself facing new challenges or emotions, come back and let SoulSpeakai guide you from feeling to action again.
      </p>
      <Header as='h3' content='Stay Engaged' style={{ color: 'white', fontSize: '1em', textAlign: 'left' }}/>
      <p className='steps-style'>
        Your journey doesn't end here. Keep exploring your emotions, thoughts, and actions. Use SoulSpeakai as your personal space for reflection and growth.
      </p>
      <Header as='h3' content='Share' style={{ color: 'white', fontSize: '1em', textAlign: 'left' }}/>
      <p className='steps-style'>
        If you found this process helpful, consider sharing SoulSpeakai with others who might benefit from it. Your support can make a difference in someone's life.
      </p>
      <p className='steps-style'>
        Thank you for trusting SoulSpeakai with your emotions and actions today. We're here for you, always.
      </p>
      <div style={{ textAlign: 'center', marginTop: '2em' }}>
        <Button 
          primary 
          size='large' 
          content='Start New Prayer Session' 
          onClick={beginAgain}
        />
        <Button 
          primary 
          size='large' 
          content='Go to Dashboard' 
          style={{ marginLeft: '1em' }}
          onClick={() => navigate('/dashboard')}
        />
      </div>
    </Container>
  );
};

export default ClosingMessage;