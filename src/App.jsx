import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoValue, setEditTodoValue] = useState("");

  const onMarkComplete = (id) => {
    setEditTodoId(id);
    setEditTodoValue(todos.find((todo) => todo.id === id).task);
  };

  const addTodo = (newTodo) => {
    let newItem = { id: new Date().getTime(), task: newTodo, completed: false };
    setTodos([...todos, newItem]);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (editTodoValue.trim() !== "") {
      setTodos(
        todos.map((todo) =>
          todo.id === editTodoId ? { ...todo, task: editTodoValue } : todo
        )
      );
      setEditTodoId(null);
      setEditTodoValue("");
    }
  };

  const onDeleteItem = (id) => {
    setTodos([...todos].filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Lista de tareas</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onMarkComplete={onMarkComplete}
          onDeleteItem={onDeleteItem}
          editTodoId={editTodoId}
          editTodoValue={editTodoValue}
          handleEdit={handleEdit}
          setEditTodoValue={setEditTodoValue}
        />
      ))}
    </div>
  );
};

export default App;

