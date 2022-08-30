import axios from "axios";

const DEFAULT_URL = "https://mern-mysql-git-master-razurs.vercel.app"

export const getTasksRequest = async () => {
  try {
    return await axios.get(`${DEFAULT_URL}/tasks`);
  } catch (error) {
    console.error(error);
  }
};

export const getTaskRequest = async (id) => {
  try {
    return await axios.get(`${DEFAULT_URL}/tasks/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export const createTaskRequest = async (task) => {
  try {
    return await axios.post(`${DEFAULT_URL}/tasks`, task);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTaskRequest = async (id) => {
    try {
        return await axios.delete(`${DEFAULT_URL}/tasks/${id}`);
    } catch (error) {
        console.error(error);
    }
}

export const editTaskRequest = async (id, task) => {
  try {
    return await axios.put(`${DEFAULT_URL}/tasks/${id}`, task);
  } catch (error) {
    console.error(error);
  }
}

export const toggleTaskDoneRequest = async (id, done) => {
  try {
    return await axios.put(`${DEFAULT_URL}/tasks/${id}`, {
      done
    });
} catch (error) {
    console.error(error);
}
}
