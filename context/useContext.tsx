'use client'
import { greet } from '@/hook/day'
import { createContext, useContext, useEffect, useState } from 'react'

const StateContext = createContext<any | null>({})

interface contextType{
  children:React.ReactNode
}

const ContentProvider = ({children}:contextType) => {
const [task, setTask] = useState<any>()
const [taskValue, setTaskValue] = useState<string>(" ")
const [field, setField] = useState<{}>({
  edit:false,
  add:false,
  show:false,
  taskId:1
})
const { message, mnth, months, yea, week} = greet() as any

    
    return (
        <StateContext.Provider value={ {task, setTask, message, mnth, months, yea, week, taskValue, setTaskValue, field, setField}}>
        {children}
    </StateContext.Provider> 
  )
}

export default ContentProvider

export const useStateContext = () => useContext(StateContext)