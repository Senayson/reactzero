import { create } from "enhanced-resolve";

export const CREATE_TODO = 'CREATE_TODO';

export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text },
});
//action creators obstruct away the actual code for actions

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: {text},
})