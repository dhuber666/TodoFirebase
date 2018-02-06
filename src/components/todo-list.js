import React from 'react';
import TodoListItem from './todo-list-item';
import database from '../firebase';

import TodoHeader from './todo-header';
import TodoFooter from './todo-footer';


export default class TodoList extends React.Component {
    state = {
      todos: [],
      filter: 'all',
    }

    componentDidMount() {
      // fetch posts from Firebase
      console.log('my props', this.props);
      database.ref('todos').orderByChild('timestamp').on('value', (snapshot) => {
        this.newTodos = [];
        snapshot.forEach((todo) => {
          this.newTodos.push({ id: todo.key, ...todo.val() });
        });
        this.setState({ todos: this.newTodos });
      });
    }


    handleCheck = (id, checked) => {
      database.ref('todos').child(id).update({ checked: !checked });
    }

    handleDelete = (id) => {
      database.ref('todos').child(id).remove();
    }

    handleEdit = (id) => {
      const { todos } = this.state;
      todos.forEach((todo) => {
        if (todo.id === id) {
          database.ref('todos').child(id).update({ edit: true });
        }
      });
    }

    handleEditSubmit = (e, title, id) => {
      e.preventDefault();
      if (title.length === 0) {
        alert('new title can not be 0');
        return;
      }


      const { todos } = this.state;
      todos.forEach((todo) => {
        if (todo.id === id) {
          database.ref('todos').child(id).update({ title, edit: false });
        }
      });
    }


    handleToggleAll = () => {
      // see if there are todos that are not yet completed. Complete all.
      // if all completed - make it incomplete
      // if all incompleted - make them complete (toggle all)

      const { todos } = this.state;
      let wasUpdated = false;
      todos.forEach((todo) => {
        if (!todo.checked) {
          database.ref('todos').child(todo.id).update({ checked: true });
          wasUpdated = true;
        }
      });

      if (!wasUpdated) {
        todos.forEach((todo) => {
          database.ref('todos').child(todo.id).update({ checked: !todo.checked });
        });
      }
    }

    handleDeleteAll = () => {
      const { todos } = this.state;
      todos.forEach((todo) => {
        if (todo.checked) {
          database.ref('todos').child(todo.id).remove();
        }
      });
    }

    setFilter = (filter) => {
      this.setState({ filter });
    }

    getFilteredTodos = (todos) => {
      const { filter } = this.state;

      if (filter === 'open') {
        return todos.filter(todo => !todo.checked);
      } else if (filter === 'done') {
        return todos.filter(todo => todo.checked);
      }
      return todos;
    }

    sortTodos = () => {
      const { todos } = this.state;
      return todos.sort((a, b) => b.timestamp - a.timestamp);
    }

    renderTodos = () => {
      const sortedTodos = this.sortTodos();
      const filteredAndSortedTodos = this.getFilteredTodos(sortedTodos);
      return filteredAndSortedTodos.map((todo, id) => (
        <TodoListItem
          title={todo.title}
          key={id}
          checked={todo.checked}
          id={todo.id}
          handleCheck={this.handleCheck}
          handleDelete={this.handleDelete}
          edit={todo.edit}
          handleDoubleClick={this.handleEdit}
          handleEditSubmit={this.handleEditSubmit}
        />
      ));
    }

    render() {
      if (!this.state.todos) {
        return <div> Loading </div>;
      }
      return (
        <div>
          <TodoHeader filterTodos={this.setFilter} />
          {this.renderTodos()}
          <TodoFooter
            handleToggleAll={this.handleToggleAll}
            handleDeleteAll={this.handleDeleteAll}

          />


        </div>
      );
    }
}
