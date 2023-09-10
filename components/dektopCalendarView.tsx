import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import enGB from "date-fns/locale/en-GB";
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { useState } from 'react'



export const DesktopCalendarView = () => {
    const [date, setDate] = useState<any>(new Date())

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB} >   
        <DateCalendar    
        value={date} 
        showDaysOutsideCurrentMonth 
        fixedWeekNumber={6}
        
        className='bg-white text-gray-700 dark:text-gray-600 border-2px font-extrabold border-1 rounded-md shadow-lg'
        onChange={value => setDate(value) }   
        />
    </LocalizationProvider>
  )
}
