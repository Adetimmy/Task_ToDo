"use client"
import {useEffect, useState} from "react" 
import Task from "./task"
import { fetchTasks } from "@/methods/fetchTask"
import { useStateContext } from "@/context/useContext"

const Tasks = () => {
    const {task, setTask} = useStateContext()
    useEffect(() => {
        const fetchData = async () => {
          try {
            const fetchedTasks = await fetchTasks(); // Fetch your tasks from API
            setTask(fetchedTasks);
            
          } catch (error) {
            console.error("Error fetching tasks:", error);
          }
        };
    
        fetchData();
      }, []);

      const tasks = task?.map((v:any) => v )
   

      
  return (
    <>
        {
            tasks?.splice(0, 9).map((task:any) => (
                <Task task={task} key={task.id}/>
            ))
        }

        
    </>
  )
}

export default Tasks