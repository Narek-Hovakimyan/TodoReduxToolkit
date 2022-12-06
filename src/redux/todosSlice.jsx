import { createSlice } from "@reduxjs/toolkit";


const todos = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: Math.random(),
                text: action.payload.text,
                isCompleted: false,
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(item => item.id !== action.payload.id)
        },
        toggleCompete(state, action) {
            const todo = state.todos.find(item => item.id === action.payload.id)
            todo.isCompleted = !todo.isCompleted
        }
    }
})

export default todos.reducer;
export const { addTodo, removeTodo, toggleCompete } = todos.actions