import React from "react";
import TodoProvider from "./context/TodoContext";
import AddTodo from "./componants/Todo/AddTodo";
import TodoList from "./componants/Todo/TodoList";
import { TodoContext } from "./context/TodoContext";
function App() {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
