"use client"
import * as React from 'react';
import { useStateContext } from "@/context/useContext"
import { addTask } from "@/methods/addTask"
import { Tooltip } from "@mui/material"
import {BiSend} from "react-icons/bi"
import {FaMicrophone} from "react-icons/fa"
import IconButton from '@mui/material/IconButton';

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
 
      <form onSubmit={handleSubmit} method="post" action="https://jsonplaceholder.typicode.com/todos" className="dark:bg-gray-300 bg-gray-200 rounded-lg  relative w-full flex items-center p-2 h-[60px]">
        <input type='text' className='md:w-11/12 w-10/12  text-[#101828] dark:text-gray-600 focus:outline-[0.3px] focus:outline-blue-600 h-[45px] focus:border-0 p-3 bg-transparent' placeholder='Input Task' title={taskValue} onChange={(e) => setTaskValue(e.target.value)} value={taskValue} required autoFocus={true}/>

          <div className='w-1/6 flex justify-center'>
            <Tooltip title="Record" placement="top">
              <IconButton>
                <button type='submit' className=" absolute -right-42 text-blue-600 hover:opacity-80">
                  { taskValue.length < 1? <FaMicrophone size={25}/> :  <BiSend  size={25}/>}
                </button>
              </IconButton>        
            </Tooltip>
          </div>

   

      </form>
      
 

  )
}

export default Input