import React, { useState, forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  const [newTodo] = useState();

  return (
    <div className={classes.container}>
      <i className={props.icon}></i>
      <input
        id={props.id}
        type={props.type}
        value={newTodo}
        placeholder={props.placeholder}
        ref={ref}
      />
    </div>
  );
});

export default Input;
