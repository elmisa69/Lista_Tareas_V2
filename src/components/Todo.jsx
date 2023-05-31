import React from "react";

const Todo = ({
  todo,
  onMarkComplete,
  onDeleteItem,
  editTodoId,
  editTodoValue,
  handleEdit,
  setEditTodoValue,
}) => {
  const todoStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    background: "#f8f8f8",
  };

  const textStyle = {
    flex: "1",
    textDecoration: todo.completed ? "line-through" : "none",
    cursor: "pointer",
  };

  const buttonStyle = {
    marginLeft: "10px",
    cursor: "pointer",
  };

  const inputStyle = {
    flex: "1",
    marginRight: "10px",
  };

  return (
    <div style={todoStyle}>
      {editTodoId === todo.id ? (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            value={editTodoValue}
            onChange={(e) => setEditTodoValue(e.target.value)}
            style={inputStyle}
          />
          <button>Guardar</button>
        </form>
      ) : (
        <>
          <span
            style={textStyle}
            onClick={() => onMarkComplete(todo.id)}
          >
            {todo.task}
          </span>
          <button
            style={buttonStyle}
            onClick={() => onMarkComplete(todo.id)}
          >
            Editar
          </button>
          <button
            style={buttonStyle}
            onClick={() => onDeleteItem(todo.id)}
          >
            Eliminar
          </button>
        </>
      )}
    </div>
  );
};

export default Todo;


