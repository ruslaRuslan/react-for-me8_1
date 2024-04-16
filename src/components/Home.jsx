import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { ActiveTodoContext } from "../context/ActiveToDoContext";
import "./style.css";

export const Home = () => {
  const { todos, setToDos } = useContext(TodoContext);
  const { activeTodos, setactiveTodos } = useContext(ActiveTodoContext);

  const [todoInput, setToDoInput] = useState("");
  const [id, setID] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const addToDo = (e) => {
    e.preventDefault();

    setID(id + 1);
    setToDos([
      ...todos,
      {
        id: id,
        todoTitle: todoInput,
      }]);
    setactiveTodos([...activeTodos,{
        id: id,
        todoTitle: todoInput,
  }]);
    console.log(todos);
    setToDoInput("");
  };
//   const changeStatus = (todoId) => {
//     const findTodo = todos.find((item) => item.id === todoId);
//     setactiveTodos([...activeTodos, findTodo]);
//   };
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
          <li
            key={todo.id}
            // className={isActive ? "active" : "deactive"}
            // onClick={() => changeStatus(todo.id)}
          >
            {todo.todoTitle}
          </li>
        ))}
      </ul>
    </div>
  );
};
