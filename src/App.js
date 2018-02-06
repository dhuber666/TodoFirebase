import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoHeader from './components/header';
import TodoList from './components/todo-list';



class TodoApp extends Component {
  render() {
    return (
      <div className='todo-app'>


        <TodoHeader />
        <TodoList />


      </div>
    );
  }
}

export default TodoApp;
