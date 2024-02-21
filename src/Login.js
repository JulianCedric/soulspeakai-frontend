import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Login = () => {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Log In
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Email'
              type='email'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='teal' fluid size='large'>
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
  );
};

export default Login;