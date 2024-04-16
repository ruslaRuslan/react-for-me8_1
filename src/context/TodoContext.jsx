import { createContext, useState } from "react";

export const TodoContext = createContext({});

export const TodoContextApp = ({ children }) => {
  const [todos, setToDos] = useState([]);
  const obj = {
    todos,
    setToDos,
  };
  return <TodoContext.Provider value={obj}>{children}</TodoContext.Provider>;
};
