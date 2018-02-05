import { Card, Icon, Col, CardTitle, Row } from 'react-materialize';
import React from 'react';



const TodoListItem = (props) => {
    const { checked, handleCheck } = props;
    return (
        <Col m={12} s={12}>
            <div className="card-panel teal lighten-2 yellow-text">
                {props.title}
                <Icon onClick={() => handleCheck(props.id, checked)} className='right todo-checkbox'> {checked ? 'radio_button_checked' : 'radio_button_unchecked'} </Icon>
            </div>
        </Col>
    )
}

export default TodoListItem;