"use client"
import { useStateContext } from "@/context/useContext"
import { addTask } from "@/methods/addTask"
import {BiSend} from "react-icons/bi"
import {FaMicrophone} from "react-icons/fa"

const Input = () => {
    const {taskValue, setTaskValue, setTask} = useStateContext()

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        try {
            const newTask = { Userid:1, title:taskValue, completed:false  };
            const data = await addTask(newTask) 
            setTask((prev:any) => [...prev, data])

        } catch (error) {
          console.log(error)  
        }
        setTaskValue('')
    }

  return (
 
      <form onSubmit={handleSubmit} method="post" action="https://jsonplaceholder.typicode.com/todos" className="mb-7 bg-gray-200 rounded-lg  relative w-full flex items-center p-2 min-h-[30px]">
        <input type='text' className='md:w-11/12 w-10/12  text-[#101828] focus:outline-[0.3px] focus:outline-blue-300  p-3 bg-transparent' placeholder='Input Task' title={taskValue} onChange={(e) => setTaskValue(e.target.value)} value={taskValue} required autoFocus/>
        <button type='submit' className="absolute right-5 text-blue-600 hover:opacity-80">
          {taskValue.length < 1? <FaMicrophone size={25}/>:<BiSend size={25}/> }  
        </button>
      </form>
      
 

  )
}

export default Input