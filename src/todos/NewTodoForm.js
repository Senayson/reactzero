import React, {useState} from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import './NewTodoForm.css';


//connect()(component)

const NewTodoForm = ({todos, onCreatePressed}) =>{ 

    const [inputValue, setInputValue] = useState('');

    return(
    <div  className="new-todo-form">
        <input type='text' 
        placeholder="type your new todo here"
        className="new-todo-input"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}/>
        <button className="new-todo-button"> Create Todo</button>
    </div>
)};

const mapStateToProps = state => ({
    todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);