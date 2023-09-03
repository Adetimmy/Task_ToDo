
// Add a new task using API
type Tas ={
  name:string,
  id:number
}
export const addTask = async (task:Tas) => {
    try {
      const response = await fetch("http://localhost:3000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({task:task}),
      });
      if (!response.ok) {
        throw new Error(`Error adding task: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error:any) {
      throw new Error(`Error adding task: ${error.message}`);
    }
  };
  




