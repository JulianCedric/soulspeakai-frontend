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
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='left'>
          Sign Up
        </Header>
        <p className='signup-subheader'>It's quick and easy.</p>
        <hr></hr>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
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
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={password}   
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='First name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Button color='blue' fluid size='large'>
              Create Account
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <a href='#'>Log in</a>
        </Message>
      </Grid.Column>
    </Grid>
    </div>
  );
};

export default Signup;