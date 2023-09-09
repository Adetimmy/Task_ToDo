import { useStateContext } from "@/context/useContext"
import { C } from "./CTAbtn"



export const Button = ({children, icon}:C) => {

 
    const { time, setDisplay} = useStateContext();


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      
      if (e.currentTarget.textContent === time.calendar) {
        setDisplay((prev:any) => ({
          ...prev,
          calendar: !prev.calendar,
          start: false,
          end: false,
        }));
      } else if (e.currentTarget.textContent === time.startTime) {
        setDisplay((prev:any) => ({
          ...prev,
          start: !prev.start,
          end: false,
          calendar: false,
        }));
      } else if (e.currentTarget.textContent === time.endTime) {
        setDisplay((prev:any) => ({
          ...prev,
          start: false,
          end: !prev.end,
          calendar: false,
        }));
      }
    };
  
    return (
      <button
        className={`flex flex-row-reverse items-center gap-1 py-2 px-1 w-[32%] font-semibold text-xs justify-center border-[2px] text-gray-700 border-gray-400 rounded-lg`}
        onClick={handleClick}
      >
        {icon}
        {children}
      </button>
    );
  };

  