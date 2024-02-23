import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import logo from './assets/images/ssai-logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ renderLogout }) => {
  console.log('renderLogout:', renderLogout);

  return (
    <Menu className='navbar' inverted fixed='top' size='medium' style={{ background: 'transparent' }}>
      <Container>
        <Menu.Menu position='left'>
          <Menu.Item as={Link} to='/' header style={{ marginLeft: '-11em' }}>
            <Image
              size='mini'
              src={logo}
            />
          </Menu.Item>
          <Menu.Item as={Link} to='/dashboard' header>
            Dashboard
          </Menu.Item>   
        </Menu.Menu>       
        
        {!renderLogout ? (
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/signup'>Sign up</Menu.Item>
            <Menu.Item as={Link} to='/login' style={{ marginRight: '-11em' }}>Log in</Menu.Item>
        </Menu.Menu>
        ) : (
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/login' style={{ marginLeft: '11em', marginRight: '-11em' }} onClick={renderLogout}>Log out</Menu.Item>
          </Menu.Menu>
        )}
      </Container>
    </Menu>
  );
};

export default Navbar;