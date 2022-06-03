import React, { createContext, useReducer } from "react";
import todoReducer from "./todoReducer";

export const TodoContext = createContext();

const TodoProvider = (props) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [], filters: [] });
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
