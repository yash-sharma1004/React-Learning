import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")

  return (
    <>
    <div>
      <input
       type="text"
        placeholder="type something...." 
        value={inputValue}
       onChange={(e) =>setInputValue(e.target.value)}
    
      />
      
      <p>you type : {inputValue}</p>
      
    </div>
     
    </>
  )
}

export default App
