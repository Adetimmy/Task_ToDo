import { useDate } from '@/hook/useDate'

interface DaysProp{
  dayOfWeekString:string,
  i:number
}
type DateProp = {
  mnth:number,
  months:String[],
  year:number,
  date:DaysProp[]
}
const DateHeader = ({mnth, months, year, date}:DateProp) => {
const dateDay = new Date().getDate()

  return (
  <>
    <div className='mt-12 w-full overflow-hidden'>
        <p className='font-extrabold text-sm'>{months[mnth]}{','} {" "}{year}</p>
        <div className='flex  flex-row gap-3 overflow-hidden mt-4 '>
        {date.map((days) => (
          <div className={`${days.i === dateDay? "bg-[#3F5BF6] border-0":""} flex px-2 py-1.5 text-[#344054] text-[11.5px] font-bold dark:text-gray-300 justify-between items-center flex-col rounded-md min-w-[50px] min-h-[56px] border-gray-600 border `}  key={days.i}>
         
              <small>{days.dayOfWeekString}</small>
              <small>{days.i}</small>
        
          </div>
        ))}
        </div>

 
    </div>
  </>
  )
}

export default DateHeader