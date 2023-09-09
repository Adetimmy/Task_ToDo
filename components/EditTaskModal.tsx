import React, { useState, useEffect } from 'react';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import { useForm } from 'react-hook-form'; 
import { zodResolver } from '@hookform/resolvers/zod'; 
import {ZodType, z}  from 'zod'; 
import { useStateContext } from '@/context/useContext';
import { Button } from './editModalbutton';
import { Icon } from './CTAbtn';
import Bell from '../asset/bell-03.svg';
import { handleClose } from './handleCloseModalButton';
import { SetTimer } from './setTime';


interface Edit {
    editField:string 
}


const EditTaskModal = ({ title }: { title: string }) => {
  const { setField, setTaskValue, setEdited, time, field, taskValue } = useStateContext();
  const [reminder, setReminder] = useState<boolean>(true);

// validation schema using zod to check before submit if the field is empty or not
const validationSchema:ZodType<Edit> = z.object({editField: z.string().min(5, {message: 'This field is required'}), });
                

const { register, handleSubmit, formState: { errors } } = useForm<Edit>({
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

  const handleField = (data:Edit) => {
    setEdited(data.editField);
  };

  return (
    <form className="mt-2 xl:w-[350px] h-[380px]" onSubmit={handleSubmit(handleField)}>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-700 text-lg font-semibold">{title}</p>
        <button className="text-gray-800" type="button" onClick={() => handleClose({ setField, setTaskValue })}>
          <FaTimes size={20} />
        </button>
      </div>
      <input
        type="text"
        className={`h-[180px] w-full bg-gray-200 break-word p-2 focus:outline-blue-600 border-[2px] font-semibold  border-gray-400 text-gray-600 rounded-lg ${
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
      {reminder && (
        <div className="flex justify-between items-center w-full text-gray-700">
          <div className="flex justify-center gap-2 my-5">
            <Image src={Bell} alt="bell-icon" sizes="25" />
            <p className="font-semibold text-gray-700">10 Minute before</p>
          </div>
          <button onClick={() => setReminder(!reminder)}>
            <FaTimes size={20} />
          </button>
        </div>
      )}

      <div className="flex justify-between items-center mt-4">
        {['Cancel', `${field.calendar? "Save":"Add"}`].map((button: any) => (
          <Icon key={button}>{button}</Icon>
        ))}
      </div>
    </form>
  );
};

export default EditTaskModal;
