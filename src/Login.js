import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        handleLogin(email, password);
        setEmail('');
        setPassword('');   
    };

  return (
    <div className='login-style'>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <h2 className='login-header'>Log In</h2>
          <hr/>
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
              <Button classcolor='cornflowerblue' fluid size='large'>
                Log In
              </Button>
            </Segment>
          </Form>
          <Message>
            Forgot <a href='#'>password?</a>
          </Message>
          <Message>
            Don’t have an account? <a href='#'>Sign up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Login;