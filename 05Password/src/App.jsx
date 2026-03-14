import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("false")

  return (
    <>
    <input 
    type="text"
    placeholder='text something '
    value={count}
    onChange={(e)=>setCount(e.target.value)}

    
    />
    
     {count!=null?<h1>hello</h1>:<h1>heyy!!!!</h1>}
     <button onClick={()=>setCount(!count)}>change</button>
    </>
  )
}

export default App
