import { useEffect, useState } from "react";
import { GoogleLogout } from "react-google-login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";
import "../CSS/App.css";
import Form from "./Form";
import Login from "./Login";
import TodoList from "./TodoList";
function App() {
  const history = useHistory();
  //   Client ID
  const client_ID =
    "829351653215-rmie6su3hb6bp2etb2m2vvnl3ckqqvbf.apps.googleusercontent.com";

  // Use state to store the values from input field in the form ↓
  const [inputTodo, setInputTodo] = useState("");

  // Use state to store todos
  const [todos, setTodos] = useState([]);

  // const [showLoginBtn, setShowLoginBtn] = useState(true);
  // const [showLogoutBtn, setShowLogoutBtn] = useState(false);
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      console.log(token);
    } else {
      window.localStorage.removeItem("token");
      // history.push("/login");
    }
  }, []);

  const handleLogoutSuccess = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
    // <Redirect to="/login" />;
  };
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login
              clientId={client_ID}
              // showLoginBtn={showLoginBtn}
              // setShowLoginBtn={setShowLoginBtn}
            />
          </Route>
          <Route path="/">
            <header>
              <h1>TO-DO LIST</h1>
            </header>
            <Form
              inputTodo={inputTodo}
              setInputTodo={setInputTodo}
              todos={todos}
              setTodos={setTodos}
            />
            <TodoList todos={todos} setTodos={setTodos} />

            <GoogleLogout
              clientId={client_ID}
              buttonText="Logout"
              onLogoutSuccess={handleLogoutSuccess}
              className="logout"
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
