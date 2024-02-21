import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Navbar = () => {
  return (
    <Menu inverted fixed='top' size='large'>
      <Container>
        <Menu.Item as='a' header>
          <Image
            size='mini'
            src='/logo.png' // Replace with your logo path
            style={{ marginRight: '1.5em' }}
          />
          Dashboard
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as='a'>Sign up</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;