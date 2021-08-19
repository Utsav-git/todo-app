import React from "react";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
const Todo = ({ text, todos, setTodos, todo }) => {
  //Function for deleting a todo
  const deleteTodo = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };
  //Function for completing a todo
  const completeTodo = () => {
    setTodos(
      todos.map((element) => {
        if (element.id === todo.id) {
          return { ...element, completed: !element.completed };
        }
        return element;
      })
    );
  };

  
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-button" onClick={completeTodo}>
        <DoneIcon />
      </button>
      <button className="trash-button" onClick={deleteTodo}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Todo;
