import React from "react";
import AddIcon from "@material-ui/icons/Add";

const Form = ({ inputTodo, setInputTodo, todos, setTodos }) => {
  //Handle The change in input field ↓
  const handleChange = (e) => {
    e.preventDefault();
    setInputTodo(e.target.value);
  };
  //Handle on submit click ↓
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputTodo,
        completed: false,
        id: Math.random() * 10,
      },
    ]);
    setInputTodo("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className="todo-input"
          onChange={handleChange}
          value={inputTodo}
        />
        <button className="todo-button" type="submit" onClick={handleSubmit}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
};

export default Form;
