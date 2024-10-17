import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskBoard from './components/TaskBoard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TaskBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
