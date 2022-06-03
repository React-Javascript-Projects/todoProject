import React from "react";
import classes from "./TodoItem.module.css";
import TodoButton from "./TodoButton";

const TodoItem = (props) => {
  return (
    <li>
      <p className={`${props.done ? classes.done : ""}`}>{props.text}</p>
      <TodoButton id={props.id} text={props.text} done={props.done} />
    </li>
  );
};

export default TodoItem;
