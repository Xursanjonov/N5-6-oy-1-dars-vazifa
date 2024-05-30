import React, { memo } from 'react'
import { useSelector } from 'react-redux'

const Natija = () => {
    const count = useSelector(state => state.counterSlice.count)

    return (
        <h1 className='totalCount'>{count}</h1>
    )
}

export default memo(Natija)