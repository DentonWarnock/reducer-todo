import React from 'react';

export default function Todo(props) {
    console.log("todo.js: props: ", props)

    let verboseClassName = "item";
    if (props.item.completed) {
        verboseClassName += " completed";
    }

    const handleClick = () => {
        props.dispatch({ type: "MARK_COMPLETED", payload: props.item.id})
    }
    

    return (
        <div 
            key={props.item.id} 
            className={verboseClassName}
            onClick={handleClick}
        >            
           Todo: {props.item.item}
        </div>
    )
}