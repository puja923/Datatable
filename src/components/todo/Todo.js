import React, { useState } from "react";
import "./todo.scss";

const Todo = () => {
  // array
  const [tasks, setTasks] = useState([]);
  // single task
  const [task, setTask] = useState("");

  // user defined
  const handleChange = (e) => {
    // console.log(e.target.value);
    setTask(e.target.value);
  };

  const submitTask = () => {
    // tasks.push(task);
    const a = [...tasks, task];
    setTasks(a);
  };

  const deleteTask = (arg) => {
    const res = tasks.filter((item, index) => {
      if (arg == index) {
        return false;
      }
      return true;
    });

    setTasks(res);
  };

  return (
    <div className="todo">
      <h3>Todo list!</h3>
      <hr />
      <span>Enter task:</span>
      <p>
        <br />
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter Task!"
        />{" "}
      </p>
      <p className="btnpara">
        <button onClick={submitTask} className="btn">
          Add Task
        </button>
      </p>
      <div className="tasklist">
        {tasks.length > 0 ? (
          <ol className="Data">
            {tasks.map((item, index) => {
              return (
                <li key={index}>
                  {item} <button onClick={(e) => deleteTask(index)}>x</button>
                </li>
              );
            })}
          </ol>
        ) : (
          <p>Task list is empty!</p>
        )}
      </div>
    </div>
  );
};

export default Todo;
