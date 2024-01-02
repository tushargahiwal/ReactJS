import { useCallback, useState } from 'react'

// import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [number,SetNumber]=useState(false)
  const [charall,setCharall]=useState(false)
  const [password,setPassword]=useState("")

  const passwordGenerator=() =>{
    useCallback(() => {
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(number)
      {
        str+="0123456789"
      }

      if(charall)
      {
        str+="~!@#$%^&*{}[]"
      }

      for(let i=1;i<=Array.length;i++)
      {
        let char=Math.floor(Math.random()*str.length+1);
        pass=str.charAt(char);
      }

      setPassword(pass);

    },[length,number,charall,setPassword])
  }

  return (
    <>

   <div className='w-full max-w-md mx-auto shadow-md-rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
    <h1 className='text-white text-center my-3'> password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        >
        </input>

        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>

      
   </div>
     
    </>
  )
}

export default App
