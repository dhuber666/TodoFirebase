import React from 'react';
import { Input } from 'react-materialize';

export default class TodoEdit extends React.Component {

    state = {
        value: this.props.title
    }

    componentDidMount() {
        const input = this.refs.input;
        const length = input.value.length;
        input.focus();
        input.setSelectionRange(length, length);
    }


    render() {
        return (
            <div onBlur={(e) => this.props.handleEditSubmit(e, this.state.value, this.props.id)}>
                <form
                    onSubmit={(e) => this.props.handleEditSubmit(e, this.state.value, this.props.id)}
                >
                    <input ref={'input'} value={this.state.value} autoFocus='true' onChange={e => this.setState({ value: e.target.value })} />
                </form>
            </div>
        )
    }

}