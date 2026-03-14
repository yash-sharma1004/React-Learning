import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());
   
  useEffect(()=>{
    let interval= setInterval(()=>{
      setTime(new Date());
    },1000)
    return()=>clearInterval(interval);
  },[]);

  return (
    <>
    <h1>Time</h1>
      <p>{time.toLocaleTimeString()}</p>
    </>
  )
}

export default App
