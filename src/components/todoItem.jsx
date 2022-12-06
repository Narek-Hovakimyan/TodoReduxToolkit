import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleCompete } from '../redux/todosSlice'

const TodoItem = ({ id, text,isCompleted }) => { 
    const dispatch = useDispatch()
    return (
        <div>
            <input type="checkbox" checked={isCompleted} onChange={() => dispatch(toggleCompete({id}))} />
            <div>{text}</div>
            <button onClick={() => dispatch(removeTodo({id}))} >X</button>
        </div>
    )
}

export default TodoItem