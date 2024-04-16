import React, { createContext, useContext, useState } from "react";

export const Home = () => {
 const value = useContext(TodoContext)
  const [todoInput, setTodoInput] = useState("");
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
    <TodoContext.Provider value={todos}>
     
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
    </TodoContext.Provider>
  );
};
