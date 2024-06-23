import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../context/slice/counterSlice'

const CreateBtn = () => {
    const dispatch = useDispatch()
    const createCount = useSelector(state => state.counterSlice.createCount)

    return (
        <button onClick={() => dispatch(increment(createCount))} className='createBtn'>CreateBtn</button>
    )
}

export default (CreateBtn)