// src/components/TodoList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import EditTodoForm from "./EditTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://159.223.60.22:8080/todo");
      setTodos(response.data.data.reverse());
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleAddTodo = async (newTodo) => {
    try {
      const response = await axios.post(
        "http://159.223.60.22:8080/todo/create",
        newTodo
      );
      setTodos((prevTodos) => [response.data.data, ...prevTodos]); // Prepend the new todo
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`http://159.223.60.22:8080/todo/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
  };

  const handleCancelEdit = () => {
    setEditingTodo(null);
  };

  const handleUpdateTodo = async (updatedTodo) => {
    try {
      const response = await axios.put(
        `http://159.223.60.22:8080/todo/${updatedTodo._id}`,
        updatedTodo
      );
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === updatedTodo._id ? response.data.data : todo
        )
      );
      setEditingTodo(null);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div>
      <h1>Todo List - CRUD API</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      {todos.map((todo) => (
        <React.Fragment key={todo._id}>
          {editingTodo?._id === todo._id ? (
            <EditTodoForm
              todo={editingTodo}
              onUpdateTodo={handleUpdateTodo}
              onCancelEdit={handleCancelEdit}
            />
          ) : (
            <TodoItem
              todo={todo}
              onDeleteTodo={handleDeleteTodo}
              onEditTodo={handleEditTodo}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TodoList;
