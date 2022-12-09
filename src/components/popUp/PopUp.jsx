import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../../redux/todosSlice';
import styles from './PopUp.module.css';
const PopUp = (props) => {
    const { setModal, todo: { id } } = props
    const dispatch = useDispatch()

    const modalClick = e => {
        let className;
        if (e.target) {
            className = e.target.className
        }
        if (className === styles.pop_up_container) {
            setModal(false)
        }
    }
    const handleDelete = () => {
        dispatch(removeTodo(id))
        setModal(false)
    }


    return (
        <div
        onClick={modalClick}
        className={styles.pop_up_container}>
        <div className={styles.pop_up_box}>
           <p>Are you sure you want to delete?</p>
           <div>
              <span onClick={handleDelete}>Yes</span>
              <span
                 onClick={() => {
                    setModal(false);
                 }}>
                 No
              </span>
           </div>
        </div>
     </div>
    )
}

export default PopUp