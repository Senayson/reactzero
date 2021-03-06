import React from "react";
import TodoListItem from './TodoListItem';
import { connect } from "react-redux";
import { removeTodo } from "./actions";
import './TodoList.css';
import NewTodoForm from './NewTodoForm';

const TodoList = ({todos = [{text: [], onRemovePressed}]}) => {
    return (<div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} />)}
    </div>)
}
const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text))
})

export default connect(mapStateToProps,  mapDispatchToProps)(TodoList);