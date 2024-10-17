const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const socketio = require('socket.io');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error));

// Socket.IO setup for real-time collaboration
const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});

const io = socketio(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('New WebSocket connection...');

  socket.on('taskUpdated', (updatedTask) => {
    io.emit('taskUpdated', updatedTask); // Broadcast task update to all clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
