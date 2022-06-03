import React from "react";
import classes from "./ErrorModel.module.css";
import Button from "./Button";

const ErrorModel = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}>
        <div className={classes.modal}>
          <header>
            <h2>{props.title}</h2>
          </header>
          <p>{props.massege}</p>
          <footer>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ErrorModel;
