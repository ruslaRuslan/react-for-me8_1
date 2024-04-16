import { createContext, useState } from "react";

export const ActiveTodoContext = createContext({});

export const TodoContextApp = ({ children }) => {
  const [activeTodos, setactiveToDos] = useState([]);
  const obj = {
    activeTodos,
    setactiveToDos,
  };
  return <ActiveTodoContext.Provider value={obj}>{children}</ActiveTodoContext.Provider>;
};
