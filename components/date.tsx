import DateSelection from './dateSelection'

type DateProp = {
  mnth:number,
  months:String[],
  year:number,
}
const DateHeader = ({mnth, months, year}:DateProp) => {

  return (
  <>
    <div className='overflow-hidden'>
        <p className='font-semibold text-sm'>{months[mnth]}{','} {" "}{year}</p>
        <DateSelection />
    </div>
  </>
  )
}

export default DateHeader