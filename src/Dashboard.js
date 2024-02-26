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

const Dashboard = ({ users, prayerSessions, handleLastVisited, handleTaskStatusChange, handleDeleteSession }) => {
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
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Prayer Session</Table.HeaderCell>
              <Table.HeaderCell>Created</Table.HeaderCell>
              <Table.HeaderCell>Last Visited</Table.HeaderCell>
              <Table.HeaderCell>Completion Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {prayerSessions.map((session, index) => (
              <Table.Row key={index}>
                <Table.Cell>{session.id}</Table.Cell>
                <Table.Cell>    
                  <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    onClick={() => handleLastVisited(session.id)}
                    trigger={<h4 className='prayer-session-modal-click'>I'm feeling {session.emotion} about {session.context}</h4>}
                  >
                    <ModalHeader>Prayer Session</ModalHeader>
                    <ul>
                      <li className='prayer-session-dates'>Created on {session.created}</li>
                      <li className='prayer-session-dates'>Last visit: {session.lastVisited}</li>                    
                    </ul>
                    <ModalContent image scrolling>
                      <ModalDescription style={{ marginTop: '-0.5em', marginLeft: '1.5em' }}>
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
                      {session.task_status === 'Incomplete' ? (
                      <li className='prayer-session-task-status-incomplete'>Task: {session.task_status}</li>
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
                <Table.Cell>{session.last_visited}</Table.Cell>
                <Table.Cell>{session.task_status}</Table.Cell>
                <Table.Cell>
                  {session.task_status === 'Incomplete' ? (
                    <Popup content='Mark as Complete' trigger={<Button className='no-border-icon' inverted size='mini' icon='circle outline' onClick={() => handleTaskStatusChange(session.id)}/>}/>
                  ) : (
                    <Popup content='Mark as Incomplete' trigger={<Button className='no-border-icon' inverted size='mini' icon='check' onClick={() => handleTaskStatusChange(session.id)}/>}/>
                  
                  )}
                </Table.Cell>
                <Table.Cell><Button icon='trash' inverted size='mini' onClick={() => handleDeleteSession(session.id)}/></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
};

export default Dashboard;