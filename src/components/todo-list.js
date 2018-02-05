import React from 'react';
import TodoListItem from './todo-list-item';
import _ from 'lodash';
import database from '../firebase';






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

        console.log(todos);

        return todos.sort((a, b) => b.timestamp - a.timestamp)
    }

    handleCheck = (id, checked) => {


        // TODO: figure out how to change data in firebase 
        database.ref('todos').child(id).once('value', snapshot => {
            snapshot.ref.update({ 'checked': !checked });
        })
    }

    renderTodos = () => {
        const sortedTodos = this.filterTodos();
        return _.map(sortedTodos, (todo, id) => {
            return (
                <TodoListItem title={todo.title} key={id} checked={todo.checked} id={todo.id} handleCheck={this.handleCheck} />
            )
        })
    }



    render() {

        if (!this.state.todos) {
            return <div> Loading </div>
        }
        return (
            <div>
                {this.renderTodos()}
            </div>
        )
    }
}