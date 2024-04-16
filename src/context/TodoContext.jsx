import { createContext, useState } from "react";

export const TodoContext = createContext([]);

export const TodoContextApp = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {children}
    </TodoContext.Provider>
  );
};
