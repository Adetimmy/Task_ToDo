import { useStateContext } from "@/context/useContext"
import { C } from "./CTAbtn"

export const Button = ({children, icon}:C) => {
  const {time, setDisplay} = useStateContext()
  const handleClick = (e:any) => {
 
    if (e.target.textContent === time.calendar ) {
      setDisplay((prev:any) => {
        return {
          ...prev,
          calendar: !prev.calendar,
          startTime:false,
          endTime:false 
        }
      })
     } 

     else if(e.target.textContent === time.startTime){
      console.log(true)
      setDisplay((prev:any) => {
        return {
          ...prev,
          start: !prev.start, 
          end:false,
          calendar:false
        }
      })
     }


     else if(e.target.textContent === time.endTime){
      setDisplay((prev:any) => {
        return {
          ...prev,
          end: !prev.end, 
          start:false,
          calendar:false
        }
      })
     }
    
    else{
      return null
    }
  }

    return (
      <button className={`flex flex-row-reverse items-center gap-1 py-2 px-1 w-[32] font-semibold text-xs justify-center border-[2px] text-gray-700 border-gray-400 rounded-lg`}
       onClick={(e) => handleClick(e)}  >
          {icon}
          {children}
      </button>
    )


}

