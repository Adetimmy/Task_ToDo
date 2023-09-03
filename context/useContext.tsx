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
const { message, mnth, months, yea, week} = greet() as any

    
    return (
        <StateContext.Provider value={ {task, setTask, message, mnth, months, yea, week, taskValue, setTaskValue}}>
        {children}
    </StateContext.Provider> 
  )
}

export default ContentProvider

export const useStateContext = () => useContext(StateContext)