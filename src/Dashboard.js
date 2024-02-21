import React from 'react';
import { Container, Table, Header, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Dashboard = () => {
  // Dummy data for the table
  const prayerSessions = [
    { session: "I'm feeling anxious about my presentation tomorrow.", created: "February 18, 2024", lastVisited: "February 19, 2024", status: "Incomplete" },
    { session: "I'm feeling hopeful about my presentation later today.", created: "February 20, 2024", lastVisited: "February 20, 2024", status: "Complete" }
  ];

  return (
    <Container style={{ marginTop: '3em' }}>
      <Header as='h1' dividing>
        My Dashboard
      </Header>
      
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
              <Table.Cell>{session.session}</Table.Cell>
              <Table.Cell>{session.created}</Table.Cell>
              <Table.Cell>{session.lastVisited}</Table.Cell>
              <Table.Cell>{session.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default Dashboard;