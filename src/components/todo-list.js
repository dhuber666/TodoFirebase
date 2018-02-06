import React from 'react';
import TodoListItem from './todo-list-item';
import _ from 'lodash';
import database from '../firebase';

import TodoFooter from './footer';


export default class TodoList extends React.Component {

    state = {
        todos: []
    }

    componentDidMount() {

        // fetch posts from Firebase
        database.ref('todos').orderByChild('timestamp').on('value', snapshot => {
            this.newTodos = [];
            snapshot.forEach(todo => {
                this.newTodos.push({ id: todo.key, ...todo.val() });
            })
            this.setState({ todos: this.newTodos });
        });
    }


    filterTodos = () => {

        const { todos } = this.state;
        return todos.sort((a, b) => b.timestamp - a.timestamp)
    }

    handleCheck = (id, checked) => {
        database.ref('todos').child(id).update({ checked: !checked });
    }

    handleDelete = (id) => {
        database.ref('todos').child(id).remove();
    }

    handleEdit = (id) => {
        const { todos } = this.state;
        todos.forEach(todo => {
            if (todo.id === id) {
                database.ref('todos').child(id).update({ edit: true });

            }


        })
    }

    handleEditSubmit = (e, title, id) => {


        e.preventDefault();
        if (title.length === 0) {
            alert('new title can not be 0');
            return;
        }


        const { todos } = this.state;
        todos.forEach(todo => {
            if (todo.id === id) {
                database.ref('todos').child(id).update({ title, edit: false });

            }


        })



    }

    renderTodos = () => {
        const sortedTodos = this.filterTodos();
        return _.map(sortedTodos, (todo, id) => {
            return (
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
            )
        })
    }

    handleToggleAll = () => {

        // see if there are todos that are not yet completed. Complete all. 
        // if all completed - make it incomplete
        // if all incompleted - make them complete (toggle all)

        const { todos } = this.state;
        let wasUpdated = false;
        _.forEach(todos, todo => {
            if (!todo.checked) {
                database.ref('todos').child(todo.id).update({ checked: true });
                wasUpdated = true;
            }

        })

        if (!wasUpdated) {
            _.forEach(todos, todo => {

                database.ref('todos').child(todo.id).update({ checked: !todo.checked });


            })
        }



    }

    render() {

        if (!this.state.todos) {
            return <div> Loading </div>
        }
        return (
            <div>
                {this.renderTodos()}
                <TodoFooter handleToggleAll={this.handleToggleAll} />
            </div>
        )
    }
}