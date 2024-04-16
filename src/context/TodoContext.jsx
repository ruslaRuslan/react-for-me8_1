import { Children, createContext } from "react";
const todo ={
    name:"Qasim",
    surname:"Ali",
}
export const TodoContext = createContext(todo)

export const TodoContextApp = ({children})=>{
    return(
        <TodoContext.Provider value={todo}>
            {children}
        </TodoContext.Provider>
    )
}