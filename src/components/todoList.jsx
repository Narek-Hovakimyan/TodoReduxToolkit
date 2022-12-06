import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from './todoItem'
import { addTodo } from '../redux/todosSlice'


const TodoList = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.todos.todos)
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const handelAddTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo({ text }))
        setText('')
    }

    useEffect(() => {
        setTodos(state)
    }, [state, dispatch])

    return (
        <div>
            <div>
                <form onSubmit={text ? handelAddTodo : (e)=>e.preventDefault()} >
                    <input type="text" value={text} onChange={e => setText(e.target.value)} />
                    <button type='submit'>Add</button>
                </form>
            </div>

            <div>
                {todos?.map(item => {
                    return (
                        <TodoItem key={item.id} {...item} />
                    )
                })}
            </div>


        </div>
    )
}

export default TodoList