// delete a task using API

export const deleteTask = async ({dup,task}:any) => {
    try {
      const response = await fetch("http://localhost:3000/api", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({data:{dup, task}}),
      });
      if (!response.ok) {
        throw new Error(`Error deleting task: ${response.status}`);
      }
      const data = await response.json()
      return data;
    } catch (error) {
        console.log(error)
    }
  };