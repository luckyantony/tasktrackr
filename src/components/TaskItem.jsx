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
      ) : (
        <>
          <span>{task.text}</span>
          <div className="buttons">
            <button onClick={() => toggleEdit(task.id)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;
