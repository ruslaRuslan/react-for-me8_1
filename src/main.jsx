import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { TodoContextApp } from "./context/TodoContext.jsx";
import { ActiveTodoContextApp } from "./context/ActiveToDoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TodoContextApp>
      <ActiveTodoContextApp>
      <App />
      </ActiveTodoContextApp>
    </TodoContextApp>
  </BrowserRouter>
);
