import { useStateContext } from "@/context/useContext";
import { useRef, useEffect } from "react";

const DateSelection = () => {
  // week for both day of the week and date
  const { week } = useStateContext() as any;
  const currentDate = new Date().getDate();
  const scrollRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  // to check the floating date movement might be adjusted to the view of the user
  if(currentDate){
    if (scrollRef.current) {
      // Adjust this value to your desired left offset
      const desiredLeftOffset = 230;
      const scrollAmount = scrollRef.current.scrollLeft - desiredLeftOffset;
  
      scrollRef.current.scrollTo({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  }
  
}, [currentDate])




  return (
    <div className='flex flex-row gap-3 overflow-x-scroll date mt-4 lg:py-2 pr-8 lg:w-6/6' ref={scrollRef}>
      {week.map((days: any) => (
        <div
          className={`${days.i === currentDate ? "bg-[#3F5BF6] text-gray-200 border-0" : ""} flex px-2 py-1.5 lg:py-1 shadow-md text-[#344054] text-[11.5px] lg:text-base font-bold dark:text-gray-100 justify-between items-center flex-col rounded-md min-w-[50px] lg:min-w-[105px] lg:min-h-[75px] min-h-[56px] border-gray-600 border hover:bg-[#3F5BF6]`}
          key={days.i}
        >
          <small>{days.dayOfWeekString}</small>
          <small>{days.i}</small>
        </div>
      ))}
    </div>
  );
};

export default DateSelection;
