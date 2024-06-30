import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./index.css";

const App = () => {
  return (
    <div class="container">
      <h1>To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
