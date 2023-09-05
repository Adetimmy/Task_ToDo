
// updating task using API
export type Tas ={
  title?:string,
  completed:false,
  Userid?:1,
  id?:number
}
export const updateTask = async (task:Tas) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({completed:task.completed}),
      });
      if (!response.ok) {
        throw new Error(`Error completing task: ${response.status}`);
      }

      const updatedData = await response.json();
      return updatedData;
    } catch (error:any) {
      throw new Error(`Error completing task: ${error.message}`);
    }
  };
  




