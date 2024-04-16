import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import "./style.css"

export const Home = () => {
  const { todos, setToDos } = useContext(TodoContext);
  const [todoInput, setToDoInput] = useState("");
  const [id, setID] = useState(0);
  const [isActive, setIsActive] = useState(false)
  const addToDo = (e) => {
    e.preventDefault();

    setID(id + 1);
    setToDos([
      ...todos,
      {
        id: id,
        todoTitle: todoInput,
      },
    ]);

    console.log(todos);
    setToDoInput("");
  };
  const changeStatus = () => {
    console.log();
  };
  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={addToDo}>
        <input
          type="text"
          placeholder="enter todo"
          value={todoInput}
          onChange={(e) => setToDoInput(e.target.value)}
        />
        <input type="submit" value="add ToDo" />
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}
          className={}
          onClick={changeStatus}>
            {todo.todoTitle}
          </li>
        ))}
      </ul>
    </div>
  );
};
