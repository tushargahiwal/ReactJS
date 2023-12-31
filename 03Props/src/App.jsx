import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    un:"Tushar",
    age:23
  }

  return (
    <>
      <h1 className='bg-gr  -*en-400 text-black p-4 rounded-xl'>Tailwind test</h1>
        <Card channel="Tushar Gahiwal" someobj={myobj}></Card>
    </>
  )
}

export default App
