import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import validation from '../../hooks/Validation'
import { addTodo } from '../../redux/todosSlice'
import DeleteBtn from '../deleteBtn/DeleteBtn'
import styles from './Input.module.css'

const Input = () => {
    const dispatch = useDispatch()
    const [isValid, setValid] = useState(true)
    const [text, setText] = useState('')
    const [isFocused, setFocused] = useState(false);
    const valid = validation(text)


    const handelAddTodo = e => {
        e.preventDefault()
        if (text.trim().length) {
            dispatch(addTodo(text))
        }
        setText('')
    }

    useEffect(() => {
        setValid(valid)
    }, [text])

    return (
        <form className={styles.input_section} onSubmit={text ? handelAddTodo : (e) => e.preventDefault()} >
            <h2>Task</h2>
            <div className={styles.task_input} >
                <div
                    className={styles.input_box}
                    style={{ border: isValid ? '1px solid #FFCD04' : '1px solid #FF3104', }}
                >
                    <input type="text"
                        onFocus={() => {
                            setFocused(true);
                        }}
                        onBlur={() => {
                            setFocused(false);
                        }}
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder='Write here' />
                    {isFocused ? <DeleteBtn onClick={() => setText('')} /> : null}
                </div>
                <button className={styles.add_button} disabled={!isValid} onClick={() => handelAddTodo()} type='submit'>Add</button>
            </div>
            {!isValid ? <span style={{ color: 'red' }} >Task content can contain max 54 characters.s</span> : null}
        </form>
    )
}

export default Input