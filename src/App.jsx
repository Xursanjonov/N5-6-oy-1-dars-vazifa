import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import CreateBtn from './components/create'
import DeleteBtn from './components/delete'
import { setCreateCount, setDeleteCount } from './context/slice/counterSlice'
import Reset from './components/reset'
import Natija from './pages/natija/Natija'
import './App.css'

const App = () => {
  const dispatch = useDispatch()

  return (
    <div className='app'>
      <h1 className='title'>Couter App</h1>
      <form className="app_form">
        <input className="input" onChange={e => dispatch(setDeleteCount(e.target.value))} type="number" placeholder='Decrement' />
        <input className="input" onChange={e => dispatch(setCreateCount(e.target.value))} type="number" placeholder='Increment' />
      </form>
      <div className="app__btns">
        <DeleteBtn />
        <Natija />
        <CreateBtn />
      </div>
      <Reset />
    </div>
  )
}

export default memo(App)