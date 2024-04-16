import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const Home = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const addToDo = (e) => {
    e.preventDefault();
    // console.log(e.target.todoInput.value);
    console.log(todoInput)
    setTodoInput("")
    setTodos([...todos,{
        id:2,
        todoTitle:todoInput
    }])
  }
  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={addToDo}>
        <input
          type="text"
          placeholder="enter todo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <input type="submit" value="add ToDo" />
      </form>
    </div>
  );
};
