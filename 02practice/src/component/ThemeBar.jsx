import React from 'react'
import { useState } from 'react'


function ThemeBar() {
const[theme, setTheme]= useState(false)



  return (
    <>
      <nav className='flex justify-between items-center px-20 text-green-400 py-10 bg-gray-200'>
        <h1 className='font-bold text-3xl '>Theme Changer</h1>
       <ul className='flex gap-4 '>
        <li>Home</li>
        <li>Page</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
        <button onClick={()=>setTheme(!theme)} className='py-2 px-4   rounded-2xl bg-green-400 text-white'>Theme Changer</button>
        
      </nav>
<div
        style={{
          background: theme ? "black": "white",
          color : theme ? "white": "black",
          height:"87vh",
        }}>
        

        </div>
    </>
  )
}

export default ThemeBar