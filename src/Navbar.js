import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import logo from './assets/images/ssai-logo.png';
import './App.css';

const Navbar = () => {
  return (
      <Menu inverted fixed='top' size='medium' >
        <Container>
          <Menu.Menu position='left'>
            <Menu.Item as='a' header style={{ marginLeft: '-11em' }}>
              <Image
                size='mini'
                src={logo}
              />
            </Menu.Item>
            <Menu.Item as='a' header>
              Dashboard
            </Menu.Item>   
          </Menu.Menu>       
          <Menu.Menu position='right'>
            <Menu.Item as='a'>Sign up</Menu.Item>
            <Menu.Item as='a' style={{ marginRight: '-11em' }}>Log in</Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
  );
};

export default Navbar;