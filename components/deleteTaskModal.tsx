import { FaTimes } from 'react-icons/fa'
import { Icon } from './CTAbtn';
import {AiOutlineCalendar, AiOutlineClockCircle} from "react-icons/ai"
import { useStateContext } from '@/context/useContext';
import { handleClose } from './handleCloseModalButton';
import { Delete, editButton } from './multipleHandleEvent';


export const DeleteTaskModal = () => {

    const {taskValue, setField, setTaskValue, task, setTask, field, setLoading, setError, time}  = useStateContext()


  return (
            <div className='xl:w-[350px] xl:h-[350px]'>
                <div className='flex justify-end items-center mb-3'>
                    
                    <button className='text-gray-800' type='button' onClick={() => handleClose({setField, setTaskValue})}>< FaTimes size={20}/></button>
                </div>
                <p className='text-gray-600 font-semibold text-base mt'>{taskValue}</p>
                <div className='flex flex-col gap-2  my-8'>
                    <div className='flex items-center gap-2 text-gray-700'>
                        <AiOutlineCalendar color="blue" size={20} /> 
                        <small className='font-bold text-xs'>{time.calendar}</small>
                    </div>
                    <div className='flex items-center gap-2 text-gray-700'>
                        <AiOutlineClockCircle color="blue" size={20} /> 
                        <small className='font-bold text-sm'>{time.startTime} - {time.endTime}</small>
                    </div>
                </div>


            
            <div className='flex justify-between items-center'>
                {/* {
                ["Delete", "Edit"].map((button:string) => (
                <Icon  title={button} type='button' size={12}/>
                 ))
                 } */}
                 <Icon  title="Delete" type='button' size={12} handle={() => Delete({task, setTask, setField,setTaskValue, field, setLoading, setError} )}/>
                 <Icon  title="Edit" type='button' size={12} handle={() => editButton({setField})} />
            </div>
        </div>
  )
}

