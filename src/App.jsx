import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const text = inputValue.trim();

    if (text === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: text,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTodo();
    }
  }

  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addTodo}>Додати запис</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <p>Кількість: {todos.length}</p>
    </>
  );
}

export default App;
