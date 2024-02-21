import React from 'react';
import { Container, Header, Button, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Home = () => {
    const testStyling = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',      
    };

  return (
    <div style={testStyling}>
        <Segment inverted textAlign="center" vertical className="full-height" style={{ padding: '1em 0em', backgroundColor: 'black' }}>
        <Container>
            <Container className="header-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1em' }}>
            {/* <Header as="h2" inverted>
                <i className="fas fa-s"></i>
                Dashboard
            </Header> */}
            {/* <div>
                <Button basic inverted>
                Sign up
                </Button>
                <Button basic inverted>
                Log in
                </Button>
            </div> */}
            </Container>
            <Header as="h1" inverted className="main-title" style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '0.25em', marginTop: '0.25em' }}>
            SoulSpeakai
            </Header>
            <Header as="h2" inverted className="sub-title" style={{ fontSize: '1.7em', fontWeight: 'normal', marginTop: '1.5em', marginBottom: '1.5em' }}>
            Your very own ai prayer partner.
            </Header>
            <p className="content-text" style={{ fontSize: '1.33em' }}>
            SoulSpeakai is designed to help you turn strong emotions into <strong>right action</strong>.
            </p>
            <p className="content-text" style={{ fontSize: '1.33em' }}>
            Whenever you feel a strong emotion about a situation in your life, let your ai prayer partner guide you through these 5 steps:
            </p>
            <Button primary size="huge" className="begin-btn">
            Begin
            </Button>
        </Container>
        <footer style={{ position: 'absolute', bottom: '0', width: '100%', padding: '1em 0', textAlign: 'center', color: 'white' }}>
            &copy; 2024 SoulSpeakai. All rights reserved.
        </footer>
        </Segment>
    </div>
  );
};

export default Home;