import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import { fetchTasks, createTask } from '../api';

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token')); // Assume token is saved on login

  useEffect(() => {
    const loadTasks = async () => {
      if (token) {
        const tasksData = await fetchTasks(token);
        setTasks(tasksData);
      }
    };
    loadTasks();
  }, [token]);

  const handleAddTask = async () => {
    if (newTask) {
      const createdTask = await createTask({ title: newTask }, token);
      setTasks([...tasks, createdTask]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>Task Board</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
      <div className="task-container">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
