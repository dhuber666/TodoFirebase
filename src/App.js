import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoHeader  from './components/header';
import { Container, Row, Col } from 'react-materialize';
import TodoList from './components/todo-list';

class App extends Component {
  render() {
    return (
      <div className='todo-app'>

    
        <TodoHeader />
        <TodoList />

      </div>
    );
  }
}

export default App;
