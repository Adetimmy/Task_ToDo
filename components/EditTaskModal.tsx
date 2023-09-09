import { useStateContext } from "@/context/useContext"
import {AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai"
import { Button } from "./editModalbutton"
import { Icon } from './CTAbtn';
import Image from "next/image";
import Bell from "../asset/bell-03.svg"
import { FaTimes } from "react-icons/fa";

import { handleClose } from "./handleCloseModalButton";
import { useState } from "react";
import { SetTimer } from "./setTime";


const EditTaskModal = () => {
    const { setField, setTaskValue, setEdited, time, field, taskValue } = useStateContext()
    const [reminder, setReminder] = useState<boolean>(true)
    const [editField, setEditField] = useState<string>(taskValue)


    const btn = [
        {
            title: time.calendar,
            icon: AiOutlineCalendar
        },
        {
            title: time.startTime,
            icon: AiOutlineClockCircle
        },
        {
            title: time.endTime,
            icon: AiOutlineClockCircle
        },
    ]


    const handleField = (e:any) => {
        setEditField(e.target.value)
        setEdited(editField)
    }
  return (
    <form className="mt-2" onSubmit={(e) => e.preventDefault() }>
        <div className='flex justify-between items-center mb-4'>
                <p className='text-gray-700 text-lg font-semibold'>{"Edit" }</p>
                <button className='text-gray-800' type='button' onClick={() => handleClose({setField, setTaskValue})}>< FaTimes size={20}/></button>
        </div>
        <input type="text" className="h-[180px] w-full bg-gray-200 break-word p-2 focus:outline-blue-600 border-[2px] text-base font-semibold  border-gray-400 text-gray-600 rounded-lg" onChange={handleField} required autoFocus value={editField}/>
        <div className="my-5 flex justify-between items-center">
            {btn.map((button:any, i) => (
                <Button key={i} id={field.taskId}>{button.title}{<button.icon size={25}/>}</Button>
            ))}
        </div>
         <SetTimer />       
        { reminder &&
        <div className="flex justify-between items-center w-full text-gray-700">
            <div className="flex justify-center gap-2 my-5">
                <Image src={Bell}  alt="bell-icon" sizes="25"/>
                <p className="font-semibold text-gray-700 ">10 Minute before</p>
            </div>
            <button onClick={() => setReminder(!reminder)}><FaTimes size={20} /></button>
        </div>
        }

        <div className='flex justify-between items-center mt-4'>
               {
                    ["Cancel", "Save"].map((button:any) => (
                        <Icon key={button}>{button}</Icon>
                    ))
               }
       </div>
    </form>
  )
}

export default EditTaskModal