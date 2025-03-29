import { useState, useRef } from "react";
import { useTask } from "./taskcontest.jsx";
import "./index.css";

function Personal({ showSidebar }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [priority, setPriority] = useState("Medium");
  const { task, setTask } = useTask();
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // Default to today
  const dateInputRef = useRef(null); // Ref for date input

  function addTask() {
    if (title.trim() !== "" && description.trim() !== "") {
      setTask([...task, { title, description, priority, date, completed: false }]);
      setTitle("");
      setDescription("");
      setPriority("Medium");
      setShowInput(false);
    }
  }

  function openDatePicker() {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // Open the date picker
    }
  }

  function toggleComplete(indexToToggle) {
    setTask(
      task.map((task, index) =>
        index === indexToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(indexToDelete) {
    setTask(task.filter((_, index) => index !== indexToDelete));
  }

  return (
    <>
      <div className={`main-content ${showSidebar ? "sidebar-open" : "sidebar-closed"}`}>
        <div className="main-title">
          <h1>Today</h1>
        </div>
        <ol>
          {task.map((task, index) => (
            <li className="task-list" key={index}>
              <button
                className={`complete-btn ${task.completed ? "completed" : "not-completed"}`}
                onClick={() => toggleComplete(index)}
              >
                {task.completed ? "Completed" : "Not Complete"}
              </button>
              <span>
                📅 {new Date(task.date).toLocaleDateString("en-US", { weekday: "long" })}{" "}
                {new Date(task.date).getDate()}{" "}
                {new Date(task.date).toLocaleDateString("en-US", { month: "long" })}
              </span>

              <div className="title-description">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
              <span>Priority: {task.priority}</span>
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ol>
        <button className="add-button" onClick={() => setShowInput(true)}>
          Add Task
        </button>
        {showInput && (
          <div className="box-input">
            <input
              className="title-box"
              type="text"
              placeholder="Your Task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="description-box"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="action-bar">
              <div className="options">
                {/* Date Picker */}
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  ref={dateInputRef} // Attach ref
                  style={{
                    opacity: 0,
                    width: 0,
                    height: 0,
                    position: "absolute",
                  }}
                />
                <button onClick={openDatePicker}>
                  📅{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  }).format(new Date(date))}
                </button>

                {/* Priority Dropdown */}
                <div className="dropdown-container">
                  <button className="dropdown-btn" onClick={() => setShowDropdown(!showDropdown)}>
                    ⚡ {priority} ▼
                  </button>

                  {showDropdown && (
                    <ul className="dropdown-menu">
                      <li
                        onClick={() => {
                          setPriority("Low");
                          setShowDropdown(false);
                        }}
                      >
                        Low
                      </li>
                      <li
                        onClick={() => {
                          setPriority("Medium");
                          setShowDropdown(false);
                        }}
                      >
                        Medium
                      </li>
                      <li
                        onClick={() => {
                          setPriority("High");
                          setShowDropdown(false);
                        }}
                      >
                        High
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              <div className="buttons">
                <button className="cancel-btn" onClick={() => setShowInput(false)}>
                  Cancel
                </button>
                <button className="add-btn" onClick={addTask}>
                  Add Task
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Personal;
