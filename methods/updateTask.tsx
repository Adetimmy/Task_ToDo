import { fetchTasks } from "./fetchTask";

// Add a new task using API
type Tas ={
  title:string,
  completed:false,
  Userid:1
}
export const updateTask = async (task:any) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({completed:task.completed}),
      });
      if (!response.ok) {
        throw new Error(`Error adding task: ${response.status}`);
      }

      const updatedData = await response.json();
      return updatedData;
    } catch (error:any) {
      throw new Error(`Error adding task: ${error.message}`);
    }
  };
  




