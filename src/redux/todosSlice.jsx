import { createSlice } from "@reduxjs/toolkit";

const hide = JSON.parse(localStorage.getItem('hideCompleted') )|| false;
const todo = JSON.parse(localStorage.getItem('todos') )|| []

const todos = createSlice({
    name: 'todos',
    initialState: {
        hideCompleted: hide,
        todos: todo
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: Math.random(),
                text: action.payload,
                isCompleted: false,
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(item => item.id !== action.payload)
        },
        toggleCompete(state, action) {
            const todo = state.todos.find(item => item.id === action.payload)
            todo.isCompleted = !todo.isCompleted
        },
        hideToggleCompete(state) {
            state.hideCompleted = !state.hideCompleted
        }
    }
})

export default todos.reducer;
export const { addTodo, removeTodo, toggleCompete, hideToggleCompete } = todos.actions