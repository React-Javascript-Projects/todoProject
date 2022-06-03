import React, { useContext } from "react";
import classes from "./AddTodo.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { TodoContext } from "../../context/TodoContext";

const AddTodo = () => {
  const textInput = React.createRef();

  const { dispatch } = useContext(TodoContext);

  const addTodoHandlar = (event) => {
    event.preventDefault();
    const newTodo = textInput.current.value;
    if (newTodo.trim().length === 0) {
      return;
    }
    dispatch({ type: "ADD_TODO", text: newTodo });
    textInput.current.value = "";
  };
  return (
    <div>
      <h2>Todo Input</h2>
      <form className={classes.input} onSubmit={addTodoHandlar}>
        <Input
          ref={textInput}
          id="newTodo"
          type="text"
          placeholder="New Todo"
          icon="fa fa-file-text"
        />
        <Button id="add_button" type="submit">
          Add new task
        </Button>
      </form>
    </div>
  );
};
export default AddTodo;
