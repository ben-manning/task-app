import { useState } from "react";
import * as tasksService from '../../utilities/tasks-service';


export default function NewTaskPage() {
  const [task, setTask] = useState({
    name: '',
    description: ''
  });

  function handleChange(evt) {
    setTask({ ...task, [evt.target.name]: evt.target.value });
  }

  // this function takes the form data and passes it to the service function that will make the API call
  async function handleSubmit(evt) {
    evt.preventDefault();
    await tasksService.create(task);
    setTask({ name: '', description: '' })
  }

  return (
    <>
    <h1>New Task</h1>
    <form action="" onSubmit={handleSubmit}>
    <label htmlFor="name">Name:
        <input type="text" name="name" id="name" value={ task.name } onChange={handleChange} />
      </label>
      <label htmlFor="description">Description:
        <input type="text" name="description" id="description" value={ task.description } onChange={handleChange} />
      </label>
      <input type="submit" value="Add Task" />
    </form>
    </>
  )
}