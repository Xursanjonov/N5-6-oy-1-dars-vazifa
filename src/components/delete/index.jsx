import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement } from '../../context/slice/counterSlice'

const DeleteBtn = () => {
    const dispatch = useDispatch()
    const { count, deleteCount } = useSelector(state => state.counterSlice)

    return (
        <button disabled={count < 1} onClick={() => dispatch(decrement(deleteCount))}
            className={`${count <= 0 ? 'deleteBtnOff' : 'deleteBtnOn'}`}>DeleteBtn</button>
    )
}

export default (DeleteBtn)