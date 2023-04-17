import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(-1);
  const [editedTask, setEditedTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEditTask = (index) => {
    setEditingTask(index);
    setEditedTask(tasks[index]);
  };

  const handleSaveTask = (index) => {
    if (editedTask.trim() !== "") {
      const newTasks = [...tasks];
      newTasks[index] = editedTask;
      setTasks(newTasks);
      setEditingTask(-1);
      setEditedTask("");
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <textarea
        data-testid="task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button data-testid="btn" onClick={handleAddTask}>
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="list">
            {editingTask === index ? (
              <div>
                <textarea
                  className="editTask"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button className="saveTask" onClick={() => handleSaveTask(index)}>
                  Save
                </button>
                <button className="cancelTask" onClick={() => setEditingTask(-1)}>
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <span>{task}</span>
                <button className="edit" onClick={() => handleEditTask(index)}>
                  Edit
                </button>
                <button className="delete" onClick={() => handleDeleteTask(index)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
