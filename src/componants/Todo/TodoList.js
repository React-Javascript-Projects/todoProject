import React, { useContext } from "react";
import classes from "./TodoList.module.css";
import TodoItem from "./TodoItem";
import FilterButton from "./FilterButton";
import DeleteButoon from "./DeleteButton";
import { TodoContext } from "../../context/TodoContext";

const TodoList = () => {
  const { state } = useContext(TodoContext);
  console.log(state);
  return (
    <div>
      <div className={classes.todo}>
        <h2>Todo List</h2>
        <FilterButton />
        <ul>
          {state.filters.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              done={todo.done}
            />
          ))}
        </ul>
        <DeleteButoon />
      </div>
      )
    </div>
  );
};

export default TodoList;
