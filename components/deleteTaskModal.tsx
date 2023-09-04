import { FaTimes } from 'react-icons/fa'
import Button from '@mui/material/Button';
import { Icon } from './icon';
import {AiOutlineCalendar, AiOutlineClockCircle} from "react-icons/ai"
import { useStateContext } from '@/context/useContext';
import { task } from './task';

export const DeleteTaskModal = () => {

    const {setField, taskValue, setTaskValue, field} = useStateContext()

    // to close the select task pop-up modal 
     const handleClose = () => {
         setField((prev:task) => {
             return {
               ...prev,
               show:false
             }
           })
           setTaskValue("")
     }

  return (
            <div>
                <div className='flex justify-between items-center'>
                    <p className='text-gray-700 text-lg font-semibold'>{field.edit && "Edit" }</p>
                    <button className='text-gray-800' type='button' onClick={handleClose}>< FaTimes size={20}/></button>
                </div>
                <p className='text-gray-600 font-semibold text-base mt'>{taskValue}</p>
                <div className='flex flex-col gap-2  my-8'>
                    <div className='flex items-center gap-2 text-gray-700'>
                        <AiOutlineCalendar color="blue" size={20} /> 
                        <small className='font-bold text-sm'>20th January, 2023</small>
                    </div>
                    <div className='flex items-center gap-2 text-gray-700'>
                        <AiOutlineClockCircle color="blue" size={20} /> 
                        <small className='font-bold text-sm'>8:00 - 10:00 AM</small>
                    </div>
                </div>


            
            <div className='flex justify-between items-center'>
                {
                         ["Delete", "Edit"].map((button:any) => (
                        <Icon key={button}>{button}</Icon>
                    ))
                }
            </div>
        </div>
  )
}

