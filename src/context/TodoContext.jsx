import { createContext } from "react";

export const TodoContext = createContext([]);

export const TodoContextApp = ({ children }) => {
    const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={todo}>
    {children}
    </TodoContext.Provider>);
};
