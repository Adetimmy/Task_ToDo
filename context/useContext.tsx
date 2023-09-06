'use client'
import { greet } from '@/hook/day'
// import { format } from 'date-fns'
import { createContext, useContext, useEffect, useState } from 'react'

const StateContext = createContext<any | null>({})

interface contextType{
  children:React.ReactNode
}

const ContentProvider = ({children}:contextType) => {
const timing = new Date()
//  const newToday = format(new Date(), "Today")

const [task, setTask] = useState<any>()
const [taskValue, setTaskValue] = useState<string>(" ")
const [edited, setEdited] = useState<string>(taskValue)
const [dateDisplay, setDisplay] = useState<object>({
  calendar:false,
  start:false,
  end:false
})
const [time, setTime] = useState<{}>({
  startTime:timing.toLocaleTimeString([],{
    hour:"2-digit",
    minute:"2-digit"
  }) ,
  endTime:new Date(72 * 60 * 60 * 1000).toLocaleTimeString([],{
    hour:"2-digit",
    minute:"2-digit"
  }),
  calendar:"today"
})
const [field, setField] = useState<object>({
  edit:false,
  add:false,
  show:false,
  taskId:1
})
const { message, mnth, months, yea, week} = greet() as any

    
    return (
        <StateContext.Provider value={ {task, setTask, message, mnth, months, yea, week, taskValue, setTaskValue, field, setField, edited, setEdited, time, setTime, dateDisplay, setDisplay}}>
        {children}
    </StateContext.Provider> 
  )
}

export default ContentProvider

export const useStateContext = () => useContext(StateContext)