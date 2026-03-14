import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Toaster, toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // new arr is localArr
  const localArr = JSON.parse(localStorage.getItem("data")) || [];
  // json.parse[convert elements into array]
  const [task, setTask] = useState(localArr)
  const [Input, setInput] = useState("")
//const id =toast.loading()

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(task))
    // json.stingfy used to convert an array into a string
  }, [task])


const enter=()=>{
 if(Input.length<=0){
  alert (" no message enterd");
return;
}else if(Input.trim()===""){
   alert (" no message enterd");
  }
  else{setTask([...task, Input])}

}





  const delBtn = (i) => {
    let newArr = task.filter((item, index) => index != i)
    console.log(newArr);
   toast("deleted",{style:{
      background:" green",
      color:"white",
      border: "2px solid black"
    },
    position:"bottom-center"
  })
  const id = toast.loading("loading...")
  setTimeout(()=>{
   toast.success("successfully deleted",{
    style:{
      background:"green",
      color:"white",
      border: "2px solid black"
    },
    // duration:6000,
    position:"top-center",
  id: id
   })
  },2000)
    setTask(newArr)
  }

  return (
    <>
      <nav className='flex bg-slate-300 min-h-20 justify-center items-center'>

        <input className='bg-slate-100 h-12 py-2 px-6 rounded-l-4xl w-[40%] '
          type="text"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='bg-green-500 text-white h-12 py-2 px-6 rounded-r-4xl' onClick={enter}>add input </button>

      </nav>

      <main className='flex flex-col justify-between px-8 py-4 m-8 bg-slate-300 '>
        {task.length <= 0 ? <h1>no todo</h1> : 
        task.map((item, index) => {
          return (
          <div key={index} className='border-b flex justify-between p-6'>
            <h1  className='p-4 rounded-xl'>{item}{index}</h1>
            <button onClick={() => { delBtn(index) }} className='p-4 rounded-xl bg-red-400 hover:bg-red-500 text-white' >del</button>
          </div>
          )
        })}
      </main>
      {/* <ToastContainer/> */}
      <Toaster/>
    </>
  )
}

export default App
