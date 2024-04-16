import React, {createContext, useState} from "react";
export const TodoContext = createContext([])
export const Home = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setID] = useState(0);
  const addToDo = (e) => {
    e.preventDefault();
    setID(id + 1);
    setTodos([
      ...todos,
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
