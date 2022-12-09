import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleCompete } from '../../redux/todosSlice'
import Checkbox from '../checkbox/Checkbox'
import DeleteBtn from '../deleteBtn/DeleteBtn'
import PopUp from '../popUp/PopUp'
import styles from './TodoItem.module.css'

const TodoItem = (props) => {
    const { id, text, isCompleted } = props
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();

    return (
        <div >
            <li className={styles.list_item} >
                <Checkbox checked={isCompleted} onClick={() => dispatch(toggleCompete(id))} />
                <span style={{ color: !isCompleted ? '#666666' : '#ACACAC' }}>{text}</span>
                <DeleteBtn onClick={() => setModal(true)} />
            </li>
            {
                modal ? (<PopUp todo={props} setModal={setModal} />) : null
            }

        </div>
    )
}

export default TodoItem