// api/taskApi.js

// Fetch tasks from API

export const fetchTasks = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!response.ok) {
        throw new Error(`Error fetching tasks: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error:any) {
      throw new Error(`Error fetching tasks: ${error.message}`);
    }
  };
  