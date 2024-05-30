import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../../context/slice/counterSlice'

const Reset = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.counterSlice.count)

    return (
        <button disabled={count < 0} onClick={() => dispatch(reset())}
            className={count <= 0 ? 'resetBtnOff' : 'resetBtnOn'}>Reset</button>
    )
}

export default memo(Reset)