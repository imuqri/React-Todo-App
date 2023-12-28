// src/components/EditTodoForm.js
import React, { useState } from "react";
import { RiCloseLine, RiCheckLine } from "react-icons/ri";

const EditTodoForm = ({ todo, onUpdateTodo, onCancelEdit }) => {
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);

  const handleUpdate = () => {
    onUpdateTodo({
      ...todo,
      title,
      content,
    });
  };

  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">Edit Todo</h5>
        <div className="mb-3">
          <label htmlFor="editTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="editTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="editContent" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="editContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" onClick={handleUpdate}>
            <RiCheckLine /> {/* Check Icon */}
            Update
          </button>
          <button className="btn btn-secondary ms-2" onClick={onCancelEdit}>
            <RiCloseLine /> {/* Close Icon */}
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodoForm;
