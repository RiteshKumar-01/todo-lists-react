import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>Todo Lists</h1>
      </header>
      <Form 
        inputText={inputText}
        todos={todos} 
        setTodos={setTodos}
        setInputText={setInputText}
         />
      <TodoList setTodos={setTodos} todos={todos} />
  
    </div>
  );
};

export default App;
