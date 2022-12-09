import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '../components/checkbox/Checkbox'
import { hideToggleCompete } from '../redux/todosSlice'
import styles from './HideCompleted.module.css';


const HideCompleted = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.todos.hideCompleted)
    useEffect(() => { localStorage.setItem('hideCompleted', JSON.stringify(state)) },
        [state]);



    return (
        <div className={styles.check}>
            <Checkbox
                checked={state}
                onClick={() => dispatch(hideToggleCompete())}
            />
            <span>Hide completed</span>
        </div>
    )
}

export default HideCompleted