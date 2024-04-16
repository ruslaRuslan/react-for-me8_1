import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { TodoContextApp } from "./context/TodoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TodoContextApp>
      <App />
    </TodoContextApp>
  </BrowserRouter>
);
