import React, { useContext } from "react";
import { ActiveTodoContext } from "../context/ActiveToDoContext";


export const Aktive = () => {
  const { activeTodos, setactiveTodos } = useContext(ActiveTodoContext);
  console.log(activeTodos);
  return (
    <div>
      <ul>
        {activeTodos.map(todo => (
          <li key={todo.id}>{todo.todoTitle}</li>
        ))}
      </ul>
    </div>
  );
};
