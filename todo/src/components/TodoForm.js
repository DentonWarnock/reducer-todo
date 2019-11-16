import React, { useState } from 'react';

export default function TodoForm(props) {
    const [inputValue, setInputValue] = useState();

    return (
        <form onSubmit={"hello"}>
            <input
                onChange={"hello"}
                type="text"
                name="todo"
                placeholder="enter todo..."
                value={inputValue}
            />
            <button>
                Add Todo
            </button>
            <button>
                Clear Completed
            </button>
        </form>
    )
}
