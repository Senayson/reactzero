import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import TodoList from './todos/TodoList';


console.log('Senay')
const App = () => {
  return ( <div className="App">
        <h1>
          <TodoList />
        </h1>
    </div>)
}

export default hot(module)(App);