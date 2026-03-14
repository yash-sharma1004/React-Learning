import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("")

  return (
    <>
    <div className={`h-screen bg-${color}-500`} >
      <div className='w-32 h-screen flex flex-col justify-center space-y-8 px-2'>
       
          <button onClick={()=>{setColor("red")}} className='bg-red-500 cursor-pointer text-white py-2 px-4 rounded-xl shadow-2xl'> red </button>
          <button onClick={()=>{setColor("blue")}} className='bg-blue-500 cursor-pointer text-white py-2 px-4 rounded-xl shadow-2xl'> blue </button>
          <button onClick={()=>{setColor("yellow")}} className='bg-yellow-300 cursor-pointer text-white py-2 px-4 rounded-xl shadow-2xl'> yellow </button>
          <button onClick={()=>{setColor("pink")}} className='bg-pink-500 cursor-pointer text-white py-2 px-4 rounded-xl shadow-2xl'> pink </button>
          <button onClick={()=>{setColor("amber")}} className='bg-orange-400 cursor-pointer text-white py-2 px-4 rounded-xl shadow-2xl'> orange </button>
          <button onClick={()=>{setColor("green")}} className='bg-green-500 cursor-pointer text-white py-2 px-4 rounded-xl shadow-2xl'> green </button>
          <button onClick={()=>{setColor("purple")}} className='bg-purple-500 cursor-pointer text-white py-2 px-4 rounded-xl shadow-2xl'> purple </button>
          <button onClick={()=>{setColor("slate")}} className='bg-slate-300 cursor-pointer text-black py-2 px-4 rounded-xl shadow-2xl'> slate </button>
          <button onClick={()=>{setColor("sky")}} className='bg-sky-500 cursor-pointer text-white py-2 px-4 rounded-xl shadow-2xl'> sky </button>
      
      </div>
 
<div>

</div>
    </div>
    </>
  )
}

export default App
