import {useEffect, useState} from "react" 
import Task from "./task"
import { fetchTasks } from "@/methods/fetchTask"
import { useStateContext } from "@/context/useContext"

const Tasks = () => {
    const {task, setTask, page, setError,} = useStateContext()
    useEffect(() => {
  
        const fetchData = async () => {
          try {
            const fetchedTasks = await fetchTasks(); // Fetch your tasks from API
            setTask(fetchedTasks);
            throw new Error("Error fetching tasks");
          } catch (error) {
            setError(error)
          }
        
        };
        fetchData();
      }, []);

      const tasks = task?.map((v:any) => v )
   
      const start = page - 9

      
  return (
    <>
        {
            tasks?.slice(start, page).reverse().map((task:any, i:any) => (
                <Task task={task} key={i}/>
            ))
        }


        
    </>
  )
}

export default Tasks