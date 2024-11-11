import React from 'react';
import { Navbar, Card, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const HomePage = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
      </Navbar>
      <container className="text-center">
        <h1>Welcome to Task Manager</h1>
        <p>Your personal task management tool</p>
      </container>
      <Container>
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <Card.Title>Task Dashboard</Card.Title>
                <Card.Text>View and manage all your tasks.</Card.Text>
                <Button variant="primary" href="/tasks">Go to Dashboard</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <Card.Title>Task Creation</Card.Title>
                <Card.Text>Create a new task.</Card.Text>
                <Button variant="primary" href="/create-task">Create Task</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <Card.Title>Task Details</Card.Title>
                <Card.Text>View detailed task information.</Card.Text>
                <Button variant="primary" href="/task-details">View Task</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
