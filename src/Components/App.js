import { useState } from "react";
import "../CSS/App.css";
import Form from "./Form";
import TodoList from "./TodoList";
function App() {
  // Use state to store the values from input field in the form ↓
  const [inputTodo, setInputTodo] = useState("");

  // Use state to store todos
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList />
    </div>
  );
}

export default App;
