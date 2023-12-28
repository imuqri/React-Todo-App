// src/components/AddTodoForm.js
import React, { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddTodo = () => {
    if (title.trim() !== "") {
      onAddTodo({ title, content });
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h2 className="card-title">Add Todo</h2>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" onClick={handleAddTodo}>
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodoForm;
