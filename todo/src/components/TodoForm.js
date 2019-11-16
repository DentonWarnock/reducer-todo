import React, { useState } from 'react';

export default function TodoForm(props) {
    const [inputValue, setInputValue] = useState();
    // const {dispatch} = props;

    const handleChange = e => {
        setInputValue(e.target.value);
    }

    const handleAdd = e => {
        e.preventDefault();
        props.dispatch({ type: "ADD_TODO", payload: inputValue });
        setInputValue('');
    }

    const handleClear = e => {
        e.preventDefault();
        props.dispatch({ type: "CLEAR_COMPLETED" })
    }

    return (
        <form>
            <input
                onChange={handleChange}
                type="text"
                name="todo"
                placeholder="enter todo..."
                value={inputValue}
            />
            <button onClick={handleAdd}>
                Add Todo
            </button>
            <button onClick={handleClear}>
                Clear Completed
            </button>
        </form>
    )
}
