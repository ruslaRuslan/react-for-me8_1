import React, { useContext } from "react";
import { TodoContext } from "./Home";

export const Aktive = () => {
    const todos = useContext(TodoContext)
   return(
    <div>Aktive</div>
   )
}
