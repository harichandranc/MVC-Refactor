let tasks = [
  { id: 1, title: "Learn MVC", completed: false },
  { id: 2, title: "Refactor API", completed: false }
];

// get all
const getAllTasks = () => tasks;

// get one
const getTaskById = (id) => tasks.find(t => t.id == id);

// create
const createTask = (title) => {
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false
  };
  tasks.push(newTask);
  return newTask;
};

// update
const updateTask = (id, data) => {
  const task = tasks.find(t => t.id == id);
  if (!task) return null;

  task.title = data.title ?? task.title;
  task.completed = data.completed ?? task.completed;

  return task;
};

// delete
const deleteTask = (id) => {
  tasks = tasks.filter(t => t.id != id);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
