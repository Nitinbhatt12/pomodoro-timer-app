// TaskList.jsx
// Displays the list of tasks and input to add new tasks
import React, { useState } from 'react';

const TaskList = ({ tasks, onAdd, onToggle, onDelete }) => {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input.trim());
      setInput('');
    }
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditValue(text);
  };
  const handleEditChange = (e) => setEditValue(e.target.value);
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editValue.trim()) {
      onToggle(editId, editValue.trim(), true); // true = edit mode
      setEditId(null);
      setEditValue('');
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleAdd(e);
    }
    if (e.key === 'Escape') {
      setInput('');
    }
  };
  const handleEditKeyDown = (e) => {
    if (e.key === 'Enter') handleEditSubmit(e);
    if (e.key === 'Escape') {
      setEditId(null);
      setEditValue('');
    }
  };

  return (
    <div className="task-list">
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a task..."
          autoFocus
        />
        <button type="submit" disabled={!input.trim()}>Add</button>
      </form>
      <ul>
        {tasks.length === 0 ? (
          <li className="no-tasks">No tasks yet. Add one above!</li>
        ) : (
          tasks.map(task => (
            <li key={task.id} className={`task-item${task.completed ? ' completed' : ''}`}> 
              {editId === task.id ? (
                <form onSubmit={handleEditSubmit} className="edit-form">
                  <input
                    type="text"
                    value={editValue}
                    onChange={handleEditChange}
                    onKeyDown={handleEditKeyDown}
                    autoFocus
                  />
                  <button type="submit">Save</button>
                  <button type="button" onClick={() => { setEditId(null); setEditValue(''); }}>Cancel</button>
                </form>
              ) : (
                <>
                  <span onClick={() => onToggle(task.id)} title="Toggle complete">{task.text}</span>
                  <div className="task-actions">
                    <button onClick={() => handleEdit(task.id, task.text)} title="Edit">✎</button>
                    <button onClick={() => onDelete(task.id)} title="Delete">✕</button>
                  </div>
                </>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;
