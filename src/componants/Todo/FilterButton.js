import React, { useState, useContext, useEffect } from "react";
import Button from "../UI/Button";
import classes from "./FilterButton.module.css";
import { TodoContext } from "../../context/TodoContext";

const FilterButton = (props) => {
  const { state, dispatch } = useContext(TodoContext);
  const [filterType, setFilterType] = useState("ALL_FILTER");

  useEffect(() => {
    dispatch({ type: filterType });
  }, [state.todos, filterType, dispatch]);

  return (
    <div className={classes.FilterButton}>
      <Button
        onClick={() => setFilterType("ALL_FILTER")}
        style={{ backgroundColor: filterType === 1 && "#127f8d" }}
      >
        All
      </Button>
      <Button
        onClick={() => setFilterType("DONE_FILTER")}
        style={{ backgroundColor: filterType === 2 && "#127f8d" }}
      >
        Done
      </Button>
      <Button
        onClick={() => setFilterType("TODO_FILTER")}
        style={{ backgroundColor: filterType === 3 && "#127f8d" }}
      >
        Todo
      </Button>
    </div>
  );
};

export default FilterButton;
