import React from "react";
import classes from "./DeletePopup.module.css";
import Button from "../UI/Button";

const DeletePopup = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClose} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h3>Are you sure to delete</h3>
        </header>
        <footer>
          <Button type="submit" onClick={props.onConferm}>
            Yes
          </Button>
          <Button type="submit" onClick={props.onClose}>
            No
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default DeletePopup;
