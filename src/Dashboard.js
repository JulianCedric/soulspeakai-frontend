import React from 'react';
import { Container, Table, Header, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Dashboard = ({ users, prayerSessions }) => {
  console.log('users:', users);
  console.log('prayerSessions:', prayerSessions);
  console.log('prayerSessions.emotion:', prayerSessions.emotion);
  console.log('prayerSessions.context:', prayerSessions.context);
  console.log('prayerSessions.generatedPrayer:', prayerSessions.generatedPrayer);
  console.log('prayerSessions.insight:', prayerSessions.insight);
  console.log('prayerSessions.task:', prayerSessions.task);
  console.log('prayerSessions.taskStatus:', prayerSessions.taskStatus);

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
              <Table.HeaderCell>Right Move Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {prayerSessions.map((session, index) => (
              <Table.Row key={index}>
                <Table.Cell>I'm feeling {session.emotion} about {session.context}.</Table.Cell>
                <Table.Cell>...</Table.Cell>
                <Table.Cell>...</Table.Cell>
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