import axios from "axios";

export const getTasksRequest = async () => {
  try {
    return await axios.get("http://localhost:4000/tasks");
  } catch (error) {
    console.error(error);
  }
};

export const getTaskRequest = async (id) => {
  try {
    return await axios.get(`http://localhost:4000/tasks/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export const createTaskRequest = async (task) => {
  try {
    return await axios.post("http://localhost:4000/tasks", task);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTaskRequest = async (id) => {
    try {
        return await axios.delete(`http://localhost:4000/tasks/${id}`);
    } catch (error) {
        console.error(error);
    }
}

export const editTaskRequest = async (id, task) => {
  try {
    return await axios.put(`http://localhost:4000/tasks/${id}`, task);
  } catch (error) {
    console.error(error);
  }
}

export const toggleTaskDoneRequest = async (id, done) => {
  try {
    return await axios.put(`http://localhost:4000/tasks/${id}`, {
      done
    });
} catch (error) {
    console.error(error);
}
}
