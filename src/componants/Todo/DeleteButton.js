import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import DeletePopup from "../UI/DeletePopup";
import classes from "./DeleteButton.module.css";
import { TodoContext } from "../../context/TodoContext";

const DeleteButton = (props) => {
  const [deletePopup, setDeletePopup] = useState();
  const [deleteType, setDeleteType] = useState();

  const { state, dispatch } = useContext(TodoContext);

  const deleteHandler = () => {
    dispatch({
      type: "DELETE",
      id: deleteType
        ? state.todos.filter((todo) => todo.done === true)
        : state.todos,
    });
    closedisplayDeltePopup();
  };

  const deleteDone = () => {
    setDeleteType(true);
    displayDeltePopup();
  };
  const deleteAll = () => {
    setDeleteType(false);
    displayDeltePopup();
  };

  const displayDeltePopup = () => setDeletePopup(true);
  const closedisplayDeltePopup = () => setDeletePopup(false);

  return (
    <>
      {deletePopup && (
        <DeletePopup
          onConferm={deleteHandler}
          onClose={closedisplayDeltePopup}
        />
      )}
      <div className={classes.deleteButton}>
        <Button onClick={deleteDone}>Delete done tasks</Button>
        <Button onClick={deleteAll}>Delete all tasks</Button>
      </div>
    </>
  );
};

export default DeleteButton;
