const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: 'To Do' }, // Can be 'To Do', 'In Progress', 'Done'
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
