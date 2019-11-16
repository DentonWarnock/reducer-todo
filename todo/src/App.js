import React, { useState, useReducer} from 'react';
import { initialState, todoReducer} from './reducers/todoReducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        Todo List - Reducer
      </header>
      <div className="App-form">
        <TodoForm dispatch={dispatch}/>
      </div>
      <div className="App-list">
        <TodoList dispatch={dispatch} state={state}/>
      </div>
    </div>
  );
}

export default App;
