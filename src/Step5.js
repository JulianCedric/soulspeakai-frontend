import React from 'react';
import { Container, Header, Button, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Step5 = ({ renderClosingMessage, handleTaskStatus, handleCompletePrayerSession }) => {
  const handleDoItNow = () => {
    const taskStatus = 'Complete';
    handleTaskStatus(taskStatus);
    alert("Task marked 'Complete' in Dashboard.");
  };

  const handleScheduleLater = () => {
    const taskStatus = 'Incomplete';
    handleTaskStatus(taskStatus);
    alert("Task marked 'Incomplete' in Dashboard.");
  };

  const handleComplete = () => {
    handleCompletePrayerSession();
    renderClosingMessage();
  };

  return (
    <Container text style={{ marginTop: '5em' }}>
      <Header as='h2' content='Step 5. Take right action.' textAlign='left' style={{ color: 'white', fontSize: '1.25em' }} />
      <p className='steps-style'>Do it now, or schedule it for later.</p>
      <Grid columns={2} divided style={{ marginTop: '2em' }}>
        <Grid.Column textAlign='center' style={{ fontSize: '.75em' }}>
          <p>Can you complete your task in less than 2 minutes?</p>
          <br/>
          <Button content='Do It Now' primary onClick={handleDoItNow} />
        </Grid.Column>
        <Grid.Column textAlign='center' style={{ fontSize: '.75em' }}>
          <p>Need to save your task for later?</p>
          <br/>
          <Button content='Save for Later' primary onClick={handleScheduleLater} />
        </Grid.Column>
      </Grid>
      <div style={{ textAlign: 'center', marginTop: '2em' }}>
        <br/>
        <Button 
          content='Complete Prayer Session' 
          primary 
          size='large'
          onClick={handleComplete} 
        />
      </div>
    </Container>
  );
}

export default Step5;