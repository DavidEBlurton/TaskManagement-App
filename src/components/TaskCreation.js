import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const TaskCreation = () => {
  const [task, setTask] = useState({ name: '', description: '', dueDate: '' });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(task);
  };

  return (
    <Container>
      <h2>Create a New Task</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="taskName">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task name"
            name="name"
            value={task.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="taskDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Task description"
            name="description"
            value={task.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="taskDueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">Add Task</Button>
      </Form>
    </Container>
  );
};

export default TaskCreation;
