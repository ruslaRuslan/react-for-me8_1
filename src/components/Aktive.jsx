import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const Aktive = () => {
    const value = useContext(TodoContext)
    console.log(value[0]);
   return(
    <div>Aktive</div>
   )
}
