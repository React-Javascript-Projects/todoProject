import React, { useState, useContext } from "react";
import classes from "./TodoButton.module.css";
import { TodoContext } from "../../context/TodoContext";
import EditPopup from "./EditPopup";
import DeletePopup from "../UI/DeletePopup";

const TodoButton = (props) => {
  const { dispatch } = useContext(TodoContext);
  const [editPopup, setEitPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState();

  const checkTodo = () =>
    dispatch({
      type: "EDIT_TODO",
      todo: { id: props.id, text: props.text, done: !props.done },
    });
  const displayeditPopup = () => setEitPopup(true);
  const closeEditPopup = () => setEitPopup(false);

  const displayDeletePopup = () => setDeletePopup(true);
  const closedisplayDeltePopup = () => setDeletePopup(false);

  const deleteTodo = () => {
    dispatch({ type: "DELETE", id: [{ id: props.id }] });
    closedisplayDeltePopup();
  };

  return (
    <div>
      {deletePopup && (
        <DeletePopup onConferm={deleteTodo} onClose={closedisplayDeltePopup} />
      )}
      {editPopup && (
        <EditPopup id={props.id} value={props.text} onClose={closeEditPopup} />
      )}
      <div>
        <i
          onClick={checkTodo}
          className={`${props.done ? "fa fa-check-square" : "fa fa-square-o"} ${
            classes.check
          }`}
        ></i>
        <i
          onClick={displayeditPopup}
          className={`fa fa-pencil ${classes.edit}`}
        ></i>

        <i
          onClick={displayDeletePopup}
          className={`fa fa-trash ${classes.delete}`}
        ></i>
      </div>
    </div>
  );
};

export default TodoButton;
