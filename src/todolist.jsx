import { useState } from "react";

function todolist() {
  const [task, setTask] = useState([
    { text: "memasak", completed: false },
    { text: "mandi", completed: false },
    { text: "Mencuci", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function handleAddTask() {
    if (newTask.trim() !== "") setTask((t) => [...t, newTask]);
    setNewTask("");
  }
  function handleRemoveTask() {}
  function handleCompleteTask() {}
  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="add a task"
      />
      <button className="button" onClick={handleAddTask}>
        add
      </button>

      <ol>
        {task.map((t, index) => (
          <li key={index}>
            <span>{task.text}</span>
            <button onClick={() => handleCompleteTask(index)}>Complete</button>
            <button onClick={() => handleRemoveTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default todolist;
