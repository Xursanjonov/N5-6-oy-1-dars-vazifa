import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement } from '../../context/slice/counterSlice'
import { getStorage } from '../../lib'

const DeleteBtn = () => {
    const newDeleteCount = getStorage('newDelete')
    const dispatch = useDispatch()
    const count = useSelector(state => state.counterSlice.count)

    return (
        <button disabled={count < 1} onClick={() => dispatch(decrement(newDeleteCount))}
            className={`${count <= 0 ? 'deleteBtnOff' :'deleteBtnOn'}`}>DeleteBtn</button>
    )
}

export default memo(DeleteBtn)