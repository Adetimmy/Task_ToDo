import { useStateContext } from "@/context/useContext"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import enGB from "date-fns/locale/en-GB";
import enUS from "date-fns/locale/en-GB";
import {DatePicker, LocalizationProvider, TimePicker} from "@mui/x-date-pickers"
import { useState } from "react";
import { parseISO } from "date-fns";


export const SetTimer = () => {
    const { dateDisplay, time, setTime } = useStateContext()
    const [date, setDate] = useState<Date>(new Date())
  
    return (
    <>
        {dateDisplay.calendar &&    
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB} >   
            <DatePicker    
            value={date} 
            onChange={e => setTime( (prev:any) => {
                return {
                    ...prev,
                    calendar: e?.toLocaleDateString()
                }
            })}   
            />
        </LocalizationProvider>
        }
     
        {dateDisplay.start && 
         <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS} >   
            <TimePicker  
             label="Start Time"  
            value={parseISO(time.startTime)} 
            onChange={e => setTime( (prev:any) => {
                return {
                    ...prev,
                    startTime: e?.toLocaleTimeString([], {
                        hour:"2-digit",
                        minute:"2-digit"
                    })
                }
            })}   
         />
        </LocalizationProvider> }

        {dateDisplay.end && 
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS} >   
            <TimePicker    
            label="End Time"
            value={parseISO(time.endTime)} 
            onChange={e => setTime( (prev:any) => {
                return {
                    ...prev,
                    endTime: e?.toLocaleTimeString([], {
                        hour:"2-digit",
                        minute:"2-digit"
                    })
                }
            })}   
         />
        </LocalizationProvider>}
    </>
  )
}
