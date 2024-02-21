import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Signup = () => {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Sign Up
          <Header.Subheader>It's quick and easy.</Header.Subheader>
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
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='First name'
            />
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Last name'
            />
            <Button color='teal' fluid size='large'>
              Create Account
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <a href='#'>Log in</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Signup;