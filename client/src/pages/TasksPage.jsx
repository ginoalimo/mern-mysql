import {useEffect} from 'react'
import { getTasksRequest } from '../api/tasks.api'

function TasksPage() {

  useEffect( () => {
    async function loadTasks() {
      const response = await getTasksRequest()
      //Axios Get Request Returning Undefined
      console.log(response);
    }
    loadTasks();
  }, [])

  return (

    <div>
      <h1>Tasks</h1>
      
    </div>
  )
}

export default TasksPage