import { deleteTask } from "@/methods/deleteTask"
import { task } from "./task"
import { updateTaskInput } from "@/methods/updateTaskInput"
import { addTask } from "@/methods/addTask"
import { toast } from 'react-toastify';


// deleting a task 
export const Delete = async ({ task, setTask, setField, setTaskValue, field, setLoading }: any) => {
  const { taskId: id } = field;
  setLoading(true);
  try {
    // Filter out the task to be deleted
    const updatedTasks = task.filter((task: any) => task.id !== id);

    // Update the state with the remaining tasks
    setTask(updatedTasks);

    // Attempt to delete the task from the server
    await deleteTask(id);

    // If the deletion was successful, update the UI state
    setField((prev: any) => ({
      ...prev,
      show: false,
      edit: false,
      add: false,
      calendar: !prev.calendar,
    }));

    setLoading(false);
    setTaskValue("");
    toast.success("Deleted a task successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (error) {
    // Handle specific error conditions
     if (error instanceof Error) {
      toast.error("Failed to delete task", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      // Handle other unexpected errors
      toast.error("An unexpected error occurred", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }
};

 
  // perform a same call to action(CTA) on any of button selected

  export const closeModal =(setField:any) => {
      setField((prev:task) => {
      return {
        ...prev,
        edit:!prev.edit
      }
    })
  }

  //updating modified task
export const Edit = async ({field, task, setTask, setTaskValue, taskValue, setLoading, setField}:any) => {
    const {taskId:id} = field
  try {
    const updatedTasks = task.map((item:any) => {
      setLoading(true)
      if (item.id === id) {

        // update with modified field for the matching task
        return { ...item, title: taskValue };
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
    setField((prev:task) => {
      return {
        ...prev,
        show:false,
        edit:false,
        add:false,
        calendar:!prev.calendar

      }
    })
    setLoading(false)
    setTaskValue("")
    toast.info(`Edited sucessfully`, {
      position: toast.POSITION.TOP_CENTER
    });
  } catch (error) {
    // Handle specific error conditions
    if (error instanceof Error) {
      toast.info("Failed to edit task", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      // Handle other unexpected errors
      toast.error("An unexpected error occurred", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }
}
  


export const editButton = ({setField}:any) => {
  setField((prev:task) => {
        return {
          ...prev,
          edit:!prev.edit
        }
      })
    }


// adding a new task     
export const Add = async ({setTask, taskValue, setTaskValue, setLoading, setError }:any) => {
    setLoading(true)
    try {
    const newTask = { Userid: 1, title: taskValue, completed: false };
    const responseData = await addTask(newTask);
    setTask((prev: any) => [...prev, responseData]);
    setLoading(false)
    setTaskValue('')
    toast.success("Added a task sucessfully!", {
      position: toast.POSITION.TOP_CENTER
    });
    } catch (error) {
    // Handle specific error conditions
    if (error instanceof Error) {
      toast.error("Failed to add task", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      // Handle other unexpected errors
      toast.error("An unexpected error occurred", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }



}


//toggling button for display
export const createNewTaskButton = (setField:any) => {
 
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