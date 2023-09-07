export function updateTask(taskId, array, updatedTaskObject) {

  const updateTask =findTask(taskId, array);

  updateTask.title = updatedTaskObject.title;
  updateTask.details = updatedTaskObject.details;
  updateTask.date = updatedTaskObject.date;
  updateTask.isImportant = updatedTaskObject.isImportant;
  updateTask .isCompleted= updatedTaskObject.isCompleted;

  return updateTask;
}

export function updateTaskStatus(taskId, array, isCompleted) {

  const updateTask = findTask(taskId, array);

  updateTask.isCompleted = isCompleted;

  return updateTask;

}

export function updateTaskImportance(taskId, array, isImportant) {
  const updateTask = findTask(taskId, array);

  updateTask.isImportant = isImportant;

  return updateTask;
}

export function updateTaskProjectName(oldProjectName, newProjectName, array) {
  const updateTask = array.filter((task) => task.projectName === oldProjectName).map(task => task.projectName = newProjectName );

  return updateTask;
}

function findTask(taskId, array) {
  const updateTask = array.find(task => task.id === taskId);

  return updateTask
}
