// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "eat breakfast",
    "take a bath",
    "walk the dog",
  ]);
  const [newTask, setnewTask] = useState("");

  function handleInputchange(event) {
    setnewTask(event.target.value);
  }

  function addTask() {
    {
      /* eliminate add task without writing a task after clicking the add button */
    }
    if (newTask.trim !== "") {
      setTasks((t) => [...t, newTask]);
      setnewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="enter a task..."
          value={newTask}
          onChange={handleInputchange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            {/* Button to move the task up */}
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            {/* Button to move the task down */}
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
