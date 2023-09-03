
// Add a new task using API
type Tas ={
  title:string,
  completed:false,
  Userid:1
}
export const addTask = async (task:any) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error(`Error adding task: ${response.status}`);
      }
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error:any) {
      throw new Error(`Error adding task: ${error.message}`);
    }
  };
  




