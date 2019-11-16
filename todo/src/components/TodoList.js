import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
    console.log(props.todos);
    return (
        
        <div className="todo-list">
            {props.state.map(item => (
                <Todo
                    item={item}
                    dispatch={props.dispatch}
                    handleClick={props.handleClick} />
            ))}
        </div>
    )
}

