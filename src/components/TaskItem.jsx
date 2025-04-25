import { useState } from 'react';

function TaskItem({ task, deleteTask, toggleEdit, updateTask }) {
  const [editText, setEditText] = useState(task.text);

  return (
    <li className="task-item">
      {task.isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={() => updateTask(task.id, editText)}>Save</button>
        </>
      ) :