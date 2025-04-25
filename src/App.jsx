import { useState } from 'react';
import TaskItem from './components/TaskItem';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const task = {
      id: Date.now(),
      text: newTask,
      isEditing: false,
    };
    setTasks([task, ...tasks]);
    setNewTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleEdit = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isEditing: !task.isEditing } : task
    ));
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText, isEditing: false } : task
    ));
  };

  return (
    <div className="container">
      <h1 className="title">📝 TaskTrackr</h1>
      <form className="input-group" onSubmit={(e) => {
        e.preventDefault();
        addTask();
      }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
      <ul className="task-list">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleEdit={toggleEdit}
            updateTask={updateTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
