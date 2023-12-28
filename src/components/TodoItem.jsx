// src/components/TodoItem.js
import React from "react";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";

const TodoItem = ({ todo, onDeleteTodo, onEditTodo }) => {
  const handleDelete = () => {
    onDeleteTodo(todo._id);
  };

  const handleEdit = () => {
    onEditTodo(todo);
  };

  return (
    <div className="card mb-2">
      <div className="card-header">
        <h5 className="card-title">{todo.title}</h5>
        {todo.content && <p className="card-text">{todo.content}</p>}
      </div>
      <div className="card-footer d-flex justify-content-end">
        <button className="btn btn-danger me-2" onClick={handleDelete}>
          <RiDeleteBinLine /> {/* Delete Icon */}
        </button>
        <button className="btn btn-warning" onClick={handleEdit}>
          <RiEditLine /> {/* Edit Icon */}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
