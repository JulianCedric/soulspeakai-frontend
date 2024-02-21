import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import logo from './assets/images/ssai-logo.png';
import './App.css';

const Navbar = () => {
  return (
    <div>
      <Menu inverted fixed='top' size='large'>
        <Container>
          <Menu.Menu position='left'>
            <Menu.Item as='a' header style={{ marginLeft: '-10em' }}>
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
            <Menu.Item as='a' style={{ marginRight: '-9.5em' }}>Log in</Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default Navbar;