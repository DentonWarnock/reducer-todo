import React, { useReducer} from 'react';
import { initialState, todoReducer} from './reducers/todoReducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

 
  return (
    <div className="App">
      <h1>Todo List - Reducer</h1>
      <TodoForm dispatch={dispatch}/>
      <TodoList dispatch={dispatch} state={state} />      
    </div>
  );
}

export default App;
