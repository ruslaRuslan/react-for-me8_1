import { createContext, useState } from "react";
const obj ={
    
}
export const TodoContext = createContext([]);

export const TodoContextApp = ({ children }) => {
  const [todos, setToDos] = useState([]);

  return (
    <TodoContext.Provider value={[todos, setToDos]}>
      {children}
    </TodoContext.Provider>
  );
};
