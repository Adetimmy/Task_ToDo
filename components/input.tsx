"use client"
import { useStateContext } from "@/context/useContext"
import { addTask } from "@/methods/addTask"
import {BiSend} from "react-icons/bi"

const Input = () => {
    const {taskValue, setTaskValue} = useStateContext()

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        try {
            const newTask = { Userid:1, title:taskValue, completed:false  };
           await addTask(newTask)
  
        } catch (error) {
          console.log(error)  
        }
        setTaskValue('')
    }
  return (
    <form onSubmit={handleSubmit} method="post" action="https://jsonplaceholder.typicode.com/todos" className="mt-24 bg-gray-200 rounded-lg  relative w-full flex items-center p-2">
        <input type='text' className='min-h-[50px] md:w-11/12 w-10/12  text-[#101828] focus:outline-[0.3px] focus:outline-blue-300  p-3 bg-transparent' placeholder='Input Task' required title={taskValue} onChange={(e) => setTaskValue(e.target.value)} value={taskValue}/>
        <button type='submit' className="absolute right-3  bg-blue-600 rounded-full p-2 hover:opacity-80">
            <BiSend size={20}/>
        </button>
    </form>
  )
}

export default Input