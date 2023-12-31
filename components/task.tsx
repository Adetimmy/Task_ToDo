import { useStateContext } from "@/context/useContext"
import { updateTask } from "@/methods/updateTaskCompleted.Status"
import { ChangeEvent, ReactComponentElement } from "react"
import { toast } from 'react-toastify';

interface DataProps{
    completed:boolean,
    id:number
    title:string
    userId:number
} 
export interface task{
  edit:boolean,
  add:boolean,
  show:boolean,
  calendar:boolean
}


type C = {
    task:DataProps
} 

const Task = ({task}:C) => {

const {task:tasks, setTask, setField, setTaskValue, time} = useStateContext()

const handleChange = async (e:ChangeEvent<HTMLInputElement>, id:number) => {
 
    try {
      const updatedTasks = tasks.map((item:any) => {
        if (item.id === id) {
  
          // Toggle the 'completed' field for the matching task
          return { ...item, completed: !item.completed };
        }
        return item;
      });
  
      // Update the state with the new tasks
      setTask(updatedTasks);
  
      // Update the task on the server
      await updateTask({ id, completed: updatedTasks.find((task:any) => task.id === id)?.completed });
  
  
    } catch (error) {
      toast.error("An unexpected error occurred", {
        position: toast.POSITION.TOP_CENTER,
      })

    }
  

};

const handleOpen = (id:number, e:any) => {
  
  const fort = tasks.map((task:any) => task ).find((task:any) => task.id === id)

  if(e.target.classList[0].includes("break-words","text-[#475467]")){
    setTaskValue(fort.title)
    setField((prev:task) => {
      return {
        ...prev,
        show:true, 
        calendar:false,
        taskId: id,
      }
    })
  }


}

  return (
    <>
    <section  className={`bg-[#F9FAFB] border-b border-[rgba(75, 85, 99,.2)] getlen py-2 px-4 my-5  w-full  flex items-center h-auto  dark:hover:bg-gray-300 text-[#101828] dark:hover:text-gray-700 shadow-sm hover:shadow-md `}
    onClick={(e) => handleOpen (task.id, e)}
    >


        <div className="text-[14px] flex gap-5 items-center w-full">
            <input type="checkbox"  className="radio mr-2 accent-blue-600" checked={task.completed} onChange={(e) => handleChange(e, task.id)}/>
            <div className="w-5/6">
                <article className={` break-words title${task.id} font-semibold ${task.completed? "line-through opacity-40" : ""} `}>{task.title}
                </article>
                <small className={`text-[#475467] time${task.id} ${task.completed? "line-through opacity-40" : ""}`}>{time.startTime} - {time.endTime}</small>
            </div>
        </div>
      <div className="">
            <small className={`text-[#475467] cal${task.id}`}>{time.calendar}</small>
      </div>
    </section>
   
  </>
  )
}

export default Task