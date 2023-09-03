"use client"
import {useEffect, useState} from "react" 
import Task from "./task"
import { fetchTasks } from "@/methods/fetchTask"

const Tasks = () => {
    const [tasks, setTasks] = useState<any>()
    useEffect(() => {
        const fetchData = async () => {
          try {
            const fetchedTasks = await fetchTasks(); // Fetch your tasks from API
            setTasks(fetchedTasks);
            
          } catch (error) {
            console.error("Error fetching tasks:", error);
          }
        };
    
        fetchData();
      }, []);

      const task = tasks?.map((v:any) => v )
   

      
  return (
    <>
        {
            task.splice(0, 9).map((task:any) => (
                <Task task={task}/>
            ))
        }
    </>
  )
}

export default Tasks