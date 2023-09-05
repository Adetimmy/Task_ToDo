import { useStateContext } from "@/context/useContext"
import { deleteTask } from "@/methods/deleteTask"
import { task } from "./task"
import { handleDelete } from "./multipleHandleEvent"

export interface C{
    children:React.ReactNode,
    icon?:React.ReactNode
}

export const Icon = ({children,icon}:C) => {
  const {field, task, setTask, setField, setTaskValue, taskValue, edited} = useStateContext()




  const transparentBtn = "text-gray-600 border-2 border-gray-300 hover:bg-blue-600 hover:border-transparent hover:text-gray-200"
  const blueBtn = "bg-blue-600 border-transparent hover:bg-transparent hover:border-2 hover:text-gray-600 hover:border-gray-300"

  return (
    <button className={`flex gap-2 p-2 ${children== 'Edit' ? blueBtn : children === "Save"? blueBtn : transparentBtn } w-[45%] font-semibold justify-center border-gray-200 rounded-md`}
  onClick={ () => handleDelete(field.taskId, children, {task, setTask, setField, setTaskValue, taskValue, edited})}
    >
        {icon}
        {children}
    </button>
  )
}
   