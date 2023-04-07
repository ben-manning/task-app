import { useState } from "react";


export default function NewTaskPage() {
  const [task, setTask] = useState({
    name: '',
    description: ''
  });

  function handleChange(evt) {
    setTask({ ...task, [evt.target.name]: evt.target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    alert(task)
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
        <input type="text" name="description" id="description" onChange={handleChange} />
      </label>
      <input type="submit" value="Add Task" />
    </form>
    </>
  )
}