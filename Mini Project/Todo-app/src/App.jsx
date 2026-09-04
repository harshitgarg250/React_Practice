import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [text, setText] = useState("");

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: false
    },
    {
      id: 2,
      text: "Practice JavaScript",
      completed: false
    }
  ]);

  function addTodo() {
    if (text.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTodos(prevTodos => [
      ...prevTodos,
      newTodo
    ]);

    setText("");
  }

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={addTodo}>
        Add
      </button>

      <h2>Todos</h2>

      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
}

export default App;