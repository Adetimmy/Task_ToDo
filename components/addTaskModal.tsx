import React, { useState } from 'react';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { useForm } from 'react-hook-form'; 
import { zodResolver } from '@hookform/resolvers/zod'; 
import {ZodType, z}  from 'zod'; 
import { useStateContext } from '@/context/useContext';
import { Button } from './editModalbutton';
import { Icon } from './CTAbtn';
import { SetTimer } from './setTime';
import { Notification } from './10minutesNotification';
import { Add } from './multipleHandleEvent';
import { handleClose } from './handleCloseModalButton';

import "react-toastify/dist/ReactToastify.css";


interface Edit {
    editField:string 
}



export const AddTaskModal = () => {
  const { setField, setTaskValue, setTask, setLoading, time, field, taskValue, setError } = useStateContext();
  const [reminder, setReminder] = useState<boolean>(true);

// validation schema using zod to check before submit if the field is empty or not
const validationSchema:ZodType<Edit> = z.object({editField: z.string().min(5, {message: 'must be more than 5 letters'}), });
                

const { register, handleSubmit, getValues, formState: { errors }, reset } = useForm<Edit>({
    resolver: zodResolver(validationSchema), // Use zodResolver for validation
    defaultValues: { editField: taskValue }, // Set default values including the editField
  });

  const btn = [
    {
      title: time.calendar,
      icon: AiOutlineCalendar,
    },
    {
      title: time.startTime,
      icon: AiOutlineClockCircle,
    },
    {
      title: time.endTime,
      icon: AiOutlineClockCircle,
    },
  ];

  const handleField = async () => {
   await Add({ setTask, taskValue, setTaskValue, setLoading, setError })
   
    reset()
  };

  return (
    <form className="mt-2 xl:w-[350px] h-[280px]" onSubmit={handleSubmit(handleField)}>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-700 text-lg font-semibold">Add</p>
        <button className="text-gray-800" type="button" onClick={() => setField((prev:any) => {
            return{
                ...prev,
                calendar:!prev.calendar
            }
        }) }>
          <FaTimes size={20} />
        </button>
      </div>
      <input
        type="text"
        className={`h-[120px] w-full bg-gray-200 break-word p-2 focus:outline-blue-600 border-[2px] font-semibold  border-gray-400 text-gray-600 rounded-lg ${
          errors.editField ? 'border-red-500' : ''
        }`}
        {...register('editField')}
        onChange={(e) => setTaskValue(e.target.value)}
         autoFocus
      />
    
         { errors.editField && <p className="text-red-500 mt-1">{errors.editField?.message}</p>}

      <div className="my-5 flex justify-between items-center">
        {btn.map((button: any, i) => (
          <Button key={i} id={field.taskId}>
            {button.title}
            {<button.icon size={25} />}
          </Button>
        ))}
      </div>
      <SetTimer />
        {reminder && <Notification setReminder={setReminder}/>}

      <div className="flex justify-between items-center mt-4">
        <Icon title='Cancel' type="button" size={3/6} handle={() => handleClose({setField, setTaskValue})}/>
        <Icon title='Add' type="submit" size={3/6} />
      </div>
    </form>
  );
};


