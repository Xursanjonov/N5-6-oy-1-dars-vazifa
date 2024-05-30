import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../context/slice/counterSlice'
import { getStorage } from '../../lib'

const CreateBtn = () => {
    const newCreateCount = +getStorage('newCreate')
    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(increment(newCreateCount ? newCreateCount : 1))} className='createBtn'>CreateBtn</button>
    )
}

export default (CreateBtn)