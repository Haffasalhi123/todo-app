import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import FilterButtons from './FilterButtons';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div>
      <h1>To-Do App</h1>
      <TodoForm addTodo={addTodo} />
      <div className="filter-buttons">
        <FilterButtons setFilter={setFilter} />
      </div>
      <TodoList todos={filteredTodos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default TodoApp;
