import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleLogin, toggleLogout }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email || !password) {
        alert('Please fill out all fields to log in.');
        return;
      };
      const loginSuccess = handleLogin(email, password);
      if (loginSuccess) {
        setEmail('');
        setPassword('');   
        toggleLogout();
        navigate('/dashboard');
      } else {
        alert('Invalid email or password');
        setEmail('');
        setPassword('');
      }; 
    };

    const handleForgotPassword = (e) => {
      e.preventDefault();
      alert("Our password reset is currently in beta and not available yet. Please email us at julian.pormentilla@gmail.com for assistance with your account. We're here to help and appreciate your understanding as we enhance our services.");
    };

  return (
    <div className='login-style'>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 350 }}>
          <h2 className='login-header'>Log In</h2>
          <p className='login-subheader'>Welcome back!</p>
          <Form size='small' onSubmit={handleSubmit}>
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
              <Button color='blue' fluid size='mini'>
                Log In
              </Button>
            </Segment>
          </Form>
          <Message size='mini'>
            <a onClick={handleForgotPassword} href='#'>Forgot password?</a>
          </Message>
          <Message size='mini'>
            Don’t have an account? <a href='/signup'>Sign up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Login;