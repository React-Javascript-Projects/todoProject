import React, { useState, useContext } from "react";
import classes from "./EditPopup.module.css";
import Button from "../UI/Button";
import { TodoContext } from "../../context/TodoContext";

const EditPopup = (props) => {
  const { dispatch } = useContext(TodoContext);
  const [editTodo, setEditTodo] = useState(props.value);

  const editTodoChngeHandlar = (event) => {
    setEditTodo(event.target.value);
  };
  const onEdit = (e) => {
    e.preventDefault();
    if (props.value !== editTodo) {
      dispatch({
        type: "EDIT_TODO",
        todo: { id: props.id, text: editTodo, done: props.done },
      });
    }
    props.onClose();
  };
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClose} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>Edit Todo</h2>
        </header>
        <form onSubmit={onEdit}>
          <input
            className={classes.input}
            type="text"
            value={editTodo}
            onChange={editTodoChngeHandlar}
          />
          <footer className={classes.footer}>
            <Button type="submit">Okay</Button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default EditPopup;
