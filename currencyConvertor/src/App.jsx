import { useState } from 'react'
import Input from './components/Input'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

import './App.css'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {
 
const [amount,setAmount]=useState(0)
const [from, setFrom]=useState("usd")
const [to,setTo]=useState("inr")
const [convertedAmount, setConvertedAmount]= useState(0)

const currencyInfo=currencyInfo(from)

const options=object.keys(currencyInfo)

const swap=()=>{
       setFrom(to)
       setTo(from)
       setConvertedAmount(amount)
       setAmount(convertedAmount)


}

  return (
    <>
      <h1 className='text-3xl text-center bg-orange-500' >Currency App</h1>
    </>
  )
}

export default App
