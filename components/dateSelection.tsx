'use client'

import { greet } from "@/hook/day";
import { useRef } from "react";

const DateSelection = () => {

    // week for  both day of the week and date
    const{week} = greet() as any
   
    const currentDate = new Date().getDate()

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const hour = new Date().getHours()
    
    // to check for another day so the floating date movement might be  adjusted to the view of the user
if (scrollRef.current) {
    scrollRef.current.scrollTo({
       left: hour === 0? scrollRef.current.scrollLeft - 90 : NaN,
        behavior: 'smooth',
    });
  }


  return (
    <div className='flex  flex-row gap-3 overflow-x-scroll mt-4' ref={scrollRef}>
    {week.map((days:any) => (
      <div className={`${days.i === currentDate? "bg-[#3F5BF6] border-0":""} flex px-2 py-1.5 text-[#344054] text-[11.5px] font-bold dark:text-gray-300 justify-between items-center flex-col rounded-md min-w-[50px] min-h-[56px] border-gray-600 border `}  key={days.i}>
     
          <small>{days.dayOfWeekString}</small>
          <small>{days.i}</small>
    
      </div>
    ))}
    </div>
  )
}

export default DateSelection