import React from 'react';
import { Modal, Button, Icon, Row, Input } from 'react-materialize';
import database from '../firebase';


export default class TodoHeader extends React.Component {


    state = {
        title: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { title } = this.state;
        const todo = {
            title,
            timestamp: Date.now(),
            checked: false

        }
        database.ref('/todos/').push(todo)
        this.setState({ title: '' })

    }

    render() {
        return (

            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="name" type="text" value={this.state.title} className="validate" onChange={(e) => this.setState({ title: e.target.value })} />
                            <label htmlFor="name">Add a Todo</label>
                        </div>
                        <div className="input-field col s6">
                            <button className="btn waves-effect waves-light yellow-text" type="submit">Go!
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}