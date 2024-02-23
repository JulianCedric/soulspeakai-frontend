import React, { useState } from 'react';
import { 
  Container, 
  Header, 
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Icon,
  Image, 
  Modal,
  Popup,
  Table 
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import PrayerSession from './PrayerSession';

const Dashboard = ({ users, prayerSessions, handleLastVisited, handleTaskStatusChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='dashboard'>
      <Container>
        <Header as='h1' dividing style={{ color: 'white' }}>
          My Dashboard
        </Header>
        <br/>
        <Table basic='very' celled inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Prayer Session</Table.HeaderCell>
              <Table.HeaderCell>Created</Table.HeaderCell>
              <Table.HeaderCell>Last Visited</Table.HeaderCell>
              <Table.HeaderCell>Completion Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {prayerSessions.map((session, index) => (
              <Table.Row key={index}>
                <Table.Cell>    
                  <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    trigger={<h4 className='prayer-session-modal-click'>I'm feeling {session.emotion} about {session.context}</h4>}
                  >
                    <ModalHeader>Prayer Session</ModalHeader>
                    <ul>
                      <li className='prayer-session-dates'>Created on {session.created}</li>
                      <li className='prayer-session-dates'>Last visit: {session.lastVisited}</li>                    
                    </ul>
                    <ModalContent image scrolling>
                      <ModalDescription>
                        <p>
                          I'm feeling {session.emotion} about {session.context}.
                        </p>
                        <p>
                          {session.prayer}.
                        </p>
                        <p>
                          After spending some time on Your Word, a few new insights came to mind: {session.insight}.
                        </p>
                        <p>
                            And to do my part in all this, I committed to completing this one task ({session.task})—my next small step in the right direction.
                        </p>
                      </ModalDescription>
                    </ModalContent>
                    <ul>

                      {session.taskStatus === 'Incomplete' ? (
                      <li className='prayer-session-task-status-incomplete'>Task: {session.taskStatus}   <span><Popup content='Mark as Complete' trigger={<Button size='mini' icon='circle outline' onClick={() => handleTaskStatusChange()}/>}/></span></li>
                      ) : (
                        <li className='prayer-session-task-status-complete'>Task Completed</li>
                      )}
                    </ul>
                    <ModalActions>
                      <Button onClick={() => setOpen(false)} primary>
                        Close
                      </Button>
                    </ModalActions>
                    </Modal>
                </Table.Cell>
                <Table.Cell>{session.created}</Table.Cell>
                <Table.Cell>{session.lastVisited}</Table.Cell>
                <Table.Cell>{session.taskStatus}</Table.Cell>
                <Table.Cell><Popup content='Mark as Complete' trigger={<Button size='mini' icon='ellipsis horizontal' inverted onClick={() => handleTaskStatusChange()}/>}/></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
};

export default Dashboard;