import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../todoItem/TodoItem'
import styles from './TodoList.module.css'
import Input from '../input/Input'
import HideCompleted from '../../hideCompleted/HideCompleted'


const TodoList = () => {
    const state = useSelector(state => state.todos)
    useEffect(() => {
        if (state.todos.length) {
            localStorage.setItem('todos', JSON.stringify(state.todos))
        }

    }, [state.todos])


    return (
        <div className={styles.wrapper}>
            <div >
                <HideCompleted />
                <Input />
            </div>
            <div>
                {!state.todos.length
                    ?
                    <div className={styles.empty_zone} >
                        <p>your life is a blank page. You write on it.</p>
                        <h4>So start by adding your tasks here.</h4>
                    </div>
                    : <div >
                        <ul className={styles.tasks_list}>
                            {state.todos.map(item => {
                                return !item.isCompleted || !state.hideCompleted ? (
                                    <TodoItem key={item.id} {...item} />
                                ) : null
                            })}
                        </ul>

                    </div>}
            </div>


        </div>
    )
}

export default TodoList