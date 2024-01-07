import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/simpleTodos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>learn about redux toolkit</h1>
    <AddTodo></AddTodo>
    <Todos></Todos>
    </>
  )
}


export default App
