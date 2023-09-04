import { useStateContext } from "@/context/useContext"
import {AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai"
import { Button } from "./editModalbutton"
import { Icon } from './icon';
import Image from "next/image";
import Bell from "../asset/bell-03.svg"
import { FaTimes } from "react-icons/fa";

const EditTaskModal = () => {
    const {taskValue} = useStateContext()

    const btn = [
        {
            title: "Today",
            icon: AiOutlineCalendar
        },
        {
            title: "8:50am",
            icon: AiOutlineClockCircle
        },
        {
            title: "10:00am",
            icon: AiOutlineClockCircle
        },
    ]
  return (
    <div className="mt-16 ">
        <input type="text" className="h-[180px] w-full bg-gray-200 p-2 focus:outline-blue-600 border-[2px] text-base font-semibold place-self-start border-gray-400 text-gray-600 rounded-lg" defaultValue={taskValue}/>
        <div className="my-5 flex justify-between items-center">
            {btn.map((button:any) => (
                <Button key={button.title}>{button.title}{<button.icon size={25}/>}</Button>
            ))}
        </div>
        
        <div className="flex justify-between items-center w-full text-gray-700">
            <div className="flex justify-center gap-2 my-5">
            <Image src={Bell}  alt="bell-icon" sizes="25"/>
            <p className="font-semibold text-gray-700 ">10 Minute before</p>
            </div>
            <FaTimes size={25} />
        </div>
        

        <div className='flex justify-between items-center mt-4'>
               {
                    ["Cancel", "Save"].map((button:any) => (
                        <Icon key={button}>{button}</Icon>
                    ))
               }
       </div>
    </div>
  )
}

export default EditTaskModal