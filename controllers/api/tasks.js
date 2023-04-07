const Task = require('../../models/task');

module.exports = {
  create
}

async function create(req, res) {
  // add the user id of the logged in user to the request body object
  req.body.userId = req.user._id
  try {
    const newTask = await Task.create(req.body);
    console.log(newTask);
    res.json(newTask)
  } catch (err) {
    res.json(400)
  }
}