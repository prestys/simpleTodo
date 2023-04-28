import React, { useState, useRef } from "react";
import uuidv4 from 'uuid/v4'
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return; // this will return nothing when the user tries to submit an empty string.
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
      // setting the todos state to the previous state that the todos was in --
      // and adding a new todo that is entered through the input field.
    });
    todoNameRef.current.value = null; // This clears the input field once the submit button is clicked.
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </>
  );
  // ref={todoNameRef} - allows the input field's content to be tracked and dynamically updated.
}

export default App;
