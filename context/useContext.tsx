'use client'
import { greet } from '@/hook/day'
// import { format } from 'date-fns'
import { createContext, useContext, useEffect, useState } from 'react'
import { number } from 'zod'

const StateContext = createContext<any | null>({})

interface contextType{
  children:React.ReactNode
}

const ContentProvider = ({children}:contextType) => {
const timing = new Date()
//  const newToday = format(new Date(), "Today")

const [task, setTask] = useState<any>()
const [taskValue, setTaskValue] = useState<string>(" ")
const [page, setPage] = useState<number>(9)
const [screenSize, setScreenSize] = useState< number>(0)
const [edited, setEdited] = useState<string>(taskValue)
const [loading, setLoading] = useState<boolean>(false)
const [error, setError] = useState<string | null>(null)
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
  calendar:new Date().toDateString()
})

const [field, setField] = useState<object>({
  edit:false,
  add:false,
  show:false,
  taskId:1,
  calendar:true
})

const { message, mnth, months, yea, week} = greet() as any

    
useEffect( () => {
  const handleResize = () => setScreenSize(window.innerWidth)

  window.addEventListener('resize', handleResize)

  handleResize()
   
  return () => window.removeEventListener('resize', handleResize)
}, []) 

useEffect(() => {
  if(screenSize < 1300){
    setField((prev) => {
      return {
        ...prev,
        calendar:false
      }
    })
  }
  else{
    setField({
     
        edit:false,
        add:false,
        show:false,
        calendar:true
      }
    )
  }

}, [screenSize])


    return (
        <StateContext.Provider value={ {task, setTask, message, mnth, months, yea, week, taskValue, setTaskValue, field, setField, edited, setEdited, time, setTime, dateDisplay, setDisplay, page, setPage, loading, setLoading,
          error, setError}}>
        {children}
    </StateContext.Provider> 
  )
}

export default ContentProvider

export const useStateContext = () => useContext(StateContext)