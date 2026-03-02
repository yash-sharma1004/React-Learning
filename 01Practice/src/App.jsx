import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter, setCounter] = useState(0)

  function add(){
    if(counter < 20){
      setCounter(counter +1)
    }
  }
  function remove(){
    if(counter > 0){
      setCounter(counter -1)
    }                                
  }
function reset(){
  setCounter(0)
}


  return (
    <>
    <h1>counter value  :{counter}</h1>
    <p>my age : {counter}</p>
      <button onClick={() => add()} >Increment</button> {""}
      <button onClick={() => remove()} >Decrement</button> 
      <br />
      <br /> test
      <button onClick={()=> reset()}>reset</button>
      <p>let's start counting :{counter}</p>
    </>
  )
}

export default App
