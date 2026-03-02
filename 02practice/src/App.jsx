import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Theme() {
  const [Dark,setDark] = useState(false)

  return (
    <>
    <div style={{
    background:Dark?"black":"white",
    color: Dark?  "white":"black",
   height:"50vh"
    }}>


    </div>
     
      <h1> Toggle</h1>
    <button onClick={() => setDark(!Dark)}>Theme Toggle</button>
   {/* <h1 class="text-3xl text-blue-500 font-bold underline">
    Hello world!
  </h1> */}
    </>
  )
}

export default Theme
 
