import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const TaskDashboard = () => {
  const tasks = [
    { id: 1, name: "Task 1", description: "Task 1 description", dueDate: "2024-11-20" },
    { id: 2, name: "Task 2", description: "Task 2 description", dueDate: "2024-11-22" },
  ];

  return (
    <Container>
      <h2>Task Dashboard</h2>
      <div className="row">
        {tasks.map((task) => (
          <div className="col-md-4" key={task.id}>
            <Card>
              <Card.Body>
                <Card.Title>{task.name}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <Card.Text>Due: {task.dueDate}</Card.Text>
                <Button variant="info" href={`/task-details/${task.id}`}>View Details</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TaskDashboard;
