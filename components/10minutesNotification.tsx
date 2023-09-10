import Image from 'next/image';
import Bell from '../asset/bell-03.svg';
import { FaTimes } from 'react-icons/fa';
import { Dispatch, SetStateAction } from 'react';

export const Notification = ({setReminder}:any) => {

  return (
    
        <div className="flex justify-between items-center w-full text-gray-700">
          <div className="flex justify-center gap-2 my-5">
            <Image src={Bell} alt="bell-icon" sizes="25" />
            <p className="font-semibold text-gray-700">10 Minute before</p>
          </div>
          <button onClick={() => setReminder(false)}>
            <FaTimes size={20} />
          </button>
        </div>
      
  )

}