import React from 'react';
import { Container, Table, Header, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Dashboard = ({ users, prayerSessions }) => {
  return (
    <div className='dashboard-style'>
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
                <Table.Cell>I'm feeling {session.emotion} about {session.context}.</Table.Cell>
                <Table.Cell>{session.created}</Table.Cell>
                <Table.Cell>{session.lastVisited}</Table.Cell>
                <Table.Cell>{session.taskStatus}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
};

export default Dashboard;