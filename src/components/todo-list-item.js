import { Card, Icon, Col, CardTitle, Row, Input } from 'react-materialize';
import React from 'react';
import TodoEdit from './todo-edit';



const TodoListItem = (props) => {
    const { checked, handleCheck, handleDelete, edit, handleDoubleClick, id } = props;
    const checkedString = checked ? 'radio_button_checked' : 'radio_button_unchecked';
    const checkedClass = checked ? 'todo-line-through' : '';

    if (!edit) {
        return (
            <Col m={12} s={12}>
                <div onDoubleClick={() => handleDoubleClick(id)} className={'card-panel' + ' teal' + ' lighten-2' + ' yellow-text ' + checkedClass}>
                    {props.title}
                    <span onClick={() => handleCheck(id, checked)}>

                        <Icon className='right todo-checkbox' children={checkedString} />
                    </span>
                    <span onClick={() => handleDelete(id)}>
                        <Icon className='right todo-checkbox' children='delete' />
                    </span>

                </div>
            </Col>
        )
    }

    if (edit) {
        return (
            <Col m={12} s={12}>
                <div className={'card-panel' + ' teal' + ' lighten-2' + ' yellow-text ' + checkedClass}>



                    <TodoEdit title={props.title} handleEditSubmit={props.handleEditSubmit} id={id} />


                </div>
            </Col>
        )
    }
}

export default TodoListItem;