import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)

  // let counter=5;

  const addValue=() => {
  //  alert("Value Added successfully");
  counter=counter+1;
  setCounter(counter);
  }

  const decreseValue= () => {
    
     if(counter<=0)
      {
       counter=0;
     }

     else
     {
        counter=counter-1;
     }

     setCounter(counter);
  }
  
  return (
    <>
      <h3>Counter Web Page</h3>
      <h2>Counter value :{counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br/>
      <button onClick={decreseValue}>decrease value</button>

    </>
  )
}

export default App
