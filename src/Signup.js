import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Signup = ({ handleSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);   
        handleSignup(email, password, firstName, lastName);
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    };

  return (
    <div className='signup-style'>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 350 }}>
        <h2 className='signup-header'>Sign Up</h2>
        <p className='signup-subheader'>It's quick and easy.</p>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              size='mini'
              autoFocus
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              size='mini'
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={password}   
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Input
              size='mini'
              fluid
              icon='user'
              iconPosition='left'
              placeholder='First name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Input
              fluid
              size='mini'
              icon='user'
              iconPosition='left'
              placeholder='Last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Button color='blue' fluid size='mini'>
              Create Account
            </Button>
          </Segment>
        </Form>
        <Message size='mini'>
          Already have an account? <a href='/login'>Log in</a>
        </Message>
      </Grid.Column>
    </Grid>
    </div>
  );
};

export default Signup;