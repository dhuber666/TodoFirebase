
import React from 'react';
import TodoFAQ from './todo-faq';

const TodoFooter = props => (
  <div className="todo-footer" >

    <TodoFAQ />
    <button
      onClick={props.handleToggleAll}
      className="btn waves-effect waves-light teal right delete-all-btn"
    >
      <i className="material-icons">check_circle</i>
    </button>


    <button
      onClick={props.handleDeleteAll}
      className="btn waves-effect waves-light red right check-all-btn"
    >
      <i className="material-icons">delete</i>
    </button>
  </div>

);

export default TodoFooter;
