import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);



  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setTask("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t // Keep other tasks unchanged
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="filter-section">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
      </div>

      <ul className="task-list">
        {filteredTasks.length === 0 ? (
          <p>No tasks to display</p>
        ) : (
          filteredTasks.map((t) => (
            <li key={t.id} className={t.completed ? "completed" : ""}>
              <span onClick={() => toggleComplete(t.id)}>{t.text}</span>
              <button onClick={() => removeTask(t.id)}>X</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
