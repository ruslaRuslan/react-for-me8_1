import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const Aktive = () => {
  const { todos, setToDos } = useContext(TodoContext);
  console.log(todos);
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.todoTitle}</li>
        ))}
      </ul>
    </div>
  );
};
