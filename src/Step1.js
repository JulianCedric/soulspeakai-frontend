import React from 'react';
import { Container, Button, Input, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Step1 = ({ renderStep2 }) => {
  return (
    <Container text style={{ marginTop: '5em' }}>
      <Header as='h2' content='Step 1. Generate Prayer' textAlign='left' style={{ color: 'white' }}/>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2em 0' }}>
        <Input label="I'm feeling" placeholder='anxious' style={{ marginRight: '0.5em' }} />
        <Input label='about' placeholder='my presentation tomorrow' style={{ marginRight: '0.5em' }} />
        <Button icon='right arrow' content='Next' labelPosition='right' primary />
      </div>
      <p>
        Lord, thank You for Your constant presence and guidance in my life. As I prepare for my project tomorrow,
        I seek Your wisdom and strength to face any challenges that may arise. Help me to trust in Your plans for me,
        knowing that You work all things together for my good. "For I know the plans I have for you, plans to prosper
        you and not to harm you, plans to give you hope and a future." (Jeremiah 29:11) Grant me the courage to step
        out in faith and not be discouraged, for "I can do all things through Christ who strengthens me." (Philippians
        4:13) May Your peace that surpasses all understanding guard my heart and mind, enabling me to focus on the
        task at hand. "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will
        be with you wherever you go." (Joshua 1:9) In Jesus' name, amen.
      </p>
      <Button 
        onClick={renderStep2} 
        primary 
        content='Next'
      />
    </Container>
  );
}

export default Step1;
