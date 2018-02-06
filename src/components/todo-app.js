import React from 'react';


import TodoHeader from './todo-header';
import TodoList from './todo-list';


function TodoApp() {
  return (
    <div className="todo-app">


      <TodoHeader />
      <TodoList />


    </div>
  );
}


export default TodoApp;
