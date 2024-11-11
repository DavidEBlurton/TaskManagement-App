import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Import Pages
import HomePage from './components/HomePage';
import TaskDashboard from './components/TaskDashboard';
import TaskCreation from './components/TaskCreation';
import Login from './components/Login';


const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/TaskDashboard" element={<TaskDashboard />} />
          <Route path="/TaskCreation" element={<TaskCreation />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container> 
    </Router>
  );
};

export default App;
