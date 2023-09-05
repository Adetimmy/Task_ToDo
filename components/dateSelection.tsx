import { useStateContext } from "@/context/useContext";
import { useRef, useMemo } from "react";

const DateSelection = () => {
  // week for both day of the week and date
  const { week } = useStateContext() as any;
  const currentDate = new Date().getDate();

  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Use useMemo to prevent scrollRef from re-rendering
  const memoizedScrollRef = useMemo(() => scrollRef, []);

  // to check the floating date movement might be adjusted to the view of the user
  if (memoizedScrollRef.current) {
    // Adjust this value to your desired left offset
    const desiredLeftOffset = 120;
    const scrollAmount = memoizedScrollRef.current.scrollLeft - desiredLeftOffset;

    memoizedScrollRef.current.scrollTo({
      left: -scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <div className='flex  flex-row gap-3 overflow-x-scroll date mt-4 md:py-2' ref={memoizedScrollRef}>
      {week.map((days: any) => (
        <div
          className={`${days.i === currentDate ? "bg-[#3F5BF6] text-gray-200 border-0" : ""} flex px-2 py-1.5 md:py-1 text-[#344054] text-[11.5px] md:text-base font-bold dark:text-gray-100 justify-between items-center flex-col rounded-md min-w-[50px] lg:min-w-[105px] lg:min-h-[75px] min-h-[56px] border-gray-600 border `}
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
