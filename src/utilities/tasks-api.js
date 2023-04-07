import sendRequest from './send-request';
const BASE_URL = '/api/tasks';

// this function is making the API/backend call to create data from our form
export async function createTask(taskData) {
  return await sendRequest(BASE_URL, 'POST', taskData);
}