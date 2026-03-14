import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { contacts } from '../../../db/contacts.js'




function Contact() {

  const { id }=useParams()

  // const newArr = contacts. ((user)=>{user.id==Number(id)})
  const newArr = contacts.find((user)=>user.id == id)
  
  console.log(newArr)
  return (
   <>
   {/* {newArr.map((user)=> { */}
     <div>
      <h1>{newArr.name}</h1>
          <h2>{newArr.phone}</h2>
    </div>
   
   {/* {
     contacts.map((user)=>{ 
      if(user.id == Number.parseInt(id)){     
       return(
         <div>
          <h1>{user.name}</h1>
          <h2>{user.phone}</h2>
        </div>
       )
       
      }else{
       return <h1>Not Found</h1>
      }
     })
  // if(!user) return <><h1>not found</h1></>
  // console.log(user)
   } */}
   </>
  )
}

export default Contact