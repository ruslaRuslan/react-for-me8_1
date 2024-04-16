import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const Home = () => {
  const value = useContext(TodoContext);
  const [todoInput, setTodoInput] = useState("");
  const [id, setID] = useState(0);
  const addToDo = (e) => {
    e.preventDefault();
    console.log(value);
    setID(id + 1);
    value[1]([
      ...value[0],
      {
        id: id,
        todoTitle: todoInput,
      },
    ]);

    console.log(todos);
    setTodoInput("");
  };
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
