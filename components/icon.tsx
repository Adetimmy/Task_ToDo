import { useStateContext } from "@/context/useContext"
import { deleteTask } from "@/methods/deleteTask"
import { task } from "./task"

export interface C{
    children:React.ReactNode,
    icon?:React.ReactNode
}

export const Icon = ({children,icon}:C) => {
  const {field, task, setTask, setField} = useStateContext()

  const handleDelete = async (id:number) => {

    if( children === "Delete"){
      try {
        
        //filtering data and matching up with one selected and filtering out deleted task
        const updatedTasks = task.filter((task:any) => task.id !== id)
      
        //updating state with available or non deleted data 
        setTask(updatedTasks)
       
        // deleting the particular task from the server
        await deleteTask(id)
        setField((prev:task) => {
          return {
            ...prev,
            show:!prev.show
          }
        })
      } catch (error) {
        throw new Error("failed deleting task" + error ) 
      }

    }
else{
  return null
}
  }



  const transparentBtn = "text-gray-600 border-2 border-gray-300 hover:bg-blue-600 hover:border-transparent hover:text-gray-200"
  const blueBtn = "bg-blue-600 border-transparent hover:bg-transparent hover:border-2 hover:text-gray-600 hover:border-gray-300"

  return (
    <button className={`flex gap-2 p-2 ${children== 'Edit' ? blueBtn : children === "Save"? blueBtn : transparentBtn } w-[45%] font-semibold justify-center border-gray-200 rounded-md`}
    onClick={ () => handleDelete(field.taskId)}
    >
        {icon}
        {children}
    </button>
  )
}
   