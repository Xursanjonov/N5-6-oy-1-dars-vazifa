import React, { memo, useState } from 'react'
import CreateBtn from './components/create'
import Natija from './pages/natija/Natija'
import DeleteBtn from './components/delete'
import Reset from './components/reset'
import { getStorage, setStorage } from './lib'
import './App.css'

const App = () => {
  const [newCreate, setNewCreate] = useState(getStorage('newCreate') ?? 1)
  const [newDelete, setNewDelete] = useState(getStorage('newDelete') ?? 1)

  setStorage('newCreate', newCreate)
  setStorage('newDelete', newDelete)

  return (
    <div className='app'>
      <h1 className='title'>Couter App</h1>
      <form className="app_form">
        <input className="input" onChange={(e) => setNewDelete(e.target.value)} type="number" placeholder='Decrement' />
        <input className="input" onChange={(e) => setNewCreate(e.target.value)} type="number" placeholder='Increment' />
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