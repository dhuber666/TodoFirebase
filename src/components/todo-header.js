import React from 'react';
import database from '../firebase';


export default class TodoHeader extends React.Component {
    state = {
      title: '',
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { title } = this.state;


      if (title.length === 0) {
        alert('enter a title');
        return;
      }


      const todo = {
        title,
        timestamp: Date.now(),
        checked: false,
        edit: false,

      };
      database.ref('/todos/').push(todo);
      this.setState({ title: '' });
    }

    render() {
      console.log(this.props);
      return (
        <div>
          <div className="row">
            <form className="col s12" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s6">
                  <input id="name" type="text" value={this.state.title} className="validate" onChange={e => this.setState({ title: e.target.value })} />
                  <label htmlFor="name">Add a Todo</label>
                </div>
                <div className="input-field col s6">
                  <button className="btn waves-effect waves-light yellow-text" type="submit">Go!
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="row">
            <div>
              <button onClick={() => this.props.filterTodos('/')} className="col s4 btn-flat  blue-text"> All </button>
            </div>
            <div>
              <button onClick={() => this.props.filterTodos('open')} className="col s4 btn-flat  blue-text"> open </button>
            </div>
            <div>
              <button onClick={() => this.props.filterTodos('done')} className="col s4 btn-flat  blue-text"> closed </button>
            </div>
          </div>
        </div>
      );
    }
}
