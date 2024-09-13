import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./components/forms/Register";

function App() {
  const [Todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  const createTodo = () => {
    if (newTodo.title && newTodo.description) {
      setTodos([...Todos, newTodo]);
      setNewTodo({ title: "", description: "" });
    }
  };

  const handleChange = (e) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <button onClick={createTodo}>Create todo</button> <br />
      <input
        type="text"
        name="title"
        placeholder="title"
        value={newTodo.title}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="description"
        onChange={handleChange}
        value={newTodo.description}
        placeholder="description"
      />

      {
        Todos.map((todo)=>{
          return <Todo key={todo.title} title = {todo.title}  description = {todo.description} />
        })
      }
    </>
  );
}

function Todo(props) {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.description}</div>
    </div>
  );
}

export default App;
