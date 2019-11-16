import React from 'react';

export default function Todo(props) {
    console.log("todo.js: props: ", props)

    return (
        <div key={props.key}>            
            {props.item.item}
        </div>
    )
}