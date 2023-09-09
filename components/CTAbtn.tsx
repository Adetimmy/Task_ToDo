import { useStateContext } from "@/context/useContext"
import { handleDelete } from "./multipleHandleEvent"

export interface C{
    children:React.ReactNode,
    icon?:React.ReactNode,
    id?:number
}

export const Icon = ({children,icon}:C) => {
  const {field, task, setTask, setField, setTaskValue, taskValue, edited} = useStateContext()


  const transparentBtn = "text-gray-600 border-2 border-gray-300 hover:bg-blue-600 hover:border-transparent hover:text-gray-200"
  const blueBtn = "bg-blue-600 border-transparent hover:bg-transparent hover:border-2 hover:text-gray-600 hover:border-gray-300"
  const conditionsOnButtonColor = children== 'Edit' ? blueBtn : children === "Save"? blueBtn : children === "Create New Task"? transparentBtn : children === "Add"? blueBtn : transparentBtn
 
  return (
    <button className={`flex gap-2 p-2 ${conditionsOnButtonColor} w-[45%]  font-semibold justify-center mb-5 items-center border-gray-200 rounded-md`}
  onClick={ () => handleDelete(field.taskId, children, {task, setTask, setField, setTaskValue, taskValue, edited})}
    >
        {icon}
        {children}
    </button>
  )
}
   