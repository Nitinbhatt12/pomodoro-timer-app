// TaskItem.jsx
// Represents a single task in the list
import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => (
  <li className={`task-item${task.completed ? ' completed' : ''}`}>
    <span onClick={() => onToggle(task.id)}>{task.text}</span>
    <button onClick={() => onDelete(task.id)} aria-label="Delete Task">✕</button>
  </li>
);

export default TaskItem;
