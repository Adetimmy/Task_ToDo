import { deleteTask } from "@/methods/deleteTask"
import { task } from "./task"
import { updateTaskInput } from "@/methods/updateTaskInput"
import { addTask } from "@/methods/addTask"



export const handleDelete = async (id:number,
  children:React.ReactNode,
  {task, setTask, setField, setTaskValue, taskValue, edited}:any 
  ) => {

// deleting a task 
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
      setTaskValue("")
    } catch (error) {
      throw new Error("failed deleting task" + error ) 
    }

  }

  // perform a same call to action(CTA) on any of button selected
  else if(children === "Edit" || "Cancel"){
    setField((prev:task) => {
      return {
        ...prev,
        edit:!prev.edit
      }
    })
  }

  // saving modified task
  if( children === "Save"){

      try {
        const updatedTasks = task.map((item:any) => {
          
          if (item.id === id) {
    
            // update with modified field for the matching task
            return { ...item, title: edited };
          }
          return item;
        });
        // Update the state with the new tasks
        setTask(updatedTasks);
    
        // Update the task on the server
        await updateTaskInput({
          id, title: updatedTasks.find((task: any) => task.id === id)?.title,
          completed: false
        });
        setTaskValue("")
      } catch (error) {
        throw new Error("failed editing task" + error ) 
      }
     }

//@ts-ignore
  if( children.includes("Create New Task")){
    setField((prev:task) => {
      return {
        ...prev,
        add:false,
        edit:false,
        show:false,
        calendar:!prev.calendar
      }
    })
    
    }

    // adding task to using desktop view
   
    if( children === "Add"){
      try {
        const newTask = { Userid: 1, title: taskValue, completed: false };
        const responseData = await addTask(newTask);
        setTask((prev: any) => [...prev, responseData]);
      } catch (error) {
        console.log(error);
      }
  
      setTaskValue('')
    
     }


else{
return null
}
}