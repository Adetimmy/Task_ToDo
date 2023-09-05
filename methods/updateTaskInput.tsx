
// updating task using API
export type Tas ={
    title?:string,
    completed:false,
    Userid?:1,
    id?:number
  }
  export const updateTaskInput = async (task:Tas) => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({title:task.title}),
        });
        if (!response.ok) {
          throw new Error(`Error modufying task: ${response.status}`);
        }
  
        const updatedData = await response.json();
        return updatedData;
      } catch (error:any) {
        throw new Error(`Error modifying task: ${error.message}`);
      }
    };
    
  
  
  
  
  