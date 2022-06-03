const todoReducer = (state, action) => {
  let newTodo = [];
  switch (action.type) {
    case "ADD_TODO":
      newTodo = [
        ...state.todos,
        {
          text: action.text,
          done: false,
          id: "#" + action.text,
        },
      ];
      return {
        ...state,
        todos: newTodo,
      };

    case "EDIT_TODO":
      newTodo = [
        ...state.todos.map((todo) => {
          if (todo.id === action.todo.id) {
            todo = action.todo;
          }
          return todo;
        }),
      ];
      return {
        ...state,
        todos: newTodo,
      };
    case "DELETE":
      newTodo = [
        ...state.todos.filter(
          (todo) => action.id.find((x) => x.id === todo.id) === undefined
        ),
      ];
      return {
        ...state,
        todos: newTodo,
      };

    case "ALL_FILTER":
      return {
        ...state,
        filters: [...state.todos],
      };
    case "DONE_FILTER":
      return {
        ...state,
        filters: [...state.todos.filter((todo) => todo.done === true)],
      };
    case "TODO_FILTER":
      return {
        ...state,
        filters: [...state.todos.filter((todo) => todo.done === false)],
      };
    default:
      return state;
  }
};

export default todoReducer;
