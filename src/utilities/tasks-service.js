import * as tasksAPI from './tasks-api';


// this function is taking data from our form and passing it to the function that makes the API call
export async function create(taskData) {
  return await tasksAPI.createTask(taskData);
}