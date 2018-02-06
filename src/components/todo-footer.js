
import React from 'react';

const TodoFooter = props => (
  <div >

    <button
      onClick={props.handleToggleAll}
      className="btn-floating waves-effect waves-light blue right"
    >
      <i className="material-icons">check_circle</i>
    </button>

  </div >
);

export default TodoFooter;
