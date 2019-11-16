import React, { useState } from 'react';
import { StyledForm, StyledButton } from '../Styles';

export default function TodoForm(props) {
    const [inputValue, setInputValue] = useState();
    // const {dispatch} = props;

    const handleChange = e => {
        setInputValue(e.target.value);
    }

    const handleAdd = e => {
        e.preventDefault();
        if (inputValue !== "") {
            props.dispatch({ type: "ADD_TODO", payload: inputValue });
            setInputValue('');
        }        
    }

    const handleClear = e => {
        e.preventDefault();
        props.dispatch({ type: "CLEAR_COMPLETED" })
    }

    return (
        <StyledForm>
            <input
                onChange={handleChange}
                type="text"
                name="todo"
                placeholder="enter todo..."
                value={inputValue}
            />
            <br></br>
            <StyledButton onClick={handleAdd}>
                Add Todo
            </StyledButton>
            <StyledButton onClick={handleClear}>
                Clear Completed
            </StyledButton>
        </StyledForm>
    )
}
