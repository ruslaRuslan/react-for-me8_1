import { createContext, useState } from "react";

export const ActiveTodoContextApp = createContext({});

export const TodoContextApp = ({ children }) => {
  const [activeTodos, setActiveToDos] = useState([]);
  const obj = {
    todos,
    setToDos,
  };
  return <ActiveTodoContext.Provider value={obj}>{children}</ActiveTodoContext.Provider>;
};
