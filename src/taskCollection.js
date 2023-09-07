let taskArray = [];

export default function taskCollection() {

 function getTaskArray() {
   return taskArray;
 }

 function pushToTaskArray(task) {
  taskArray.push(task);
  console.log(taskArray);
}


function deleteTasksByProjectName(projectName) {
  taskArray = taskArray.filter((task) => task.projectName !== projectName)
  return taskArray;
}

 function getTasksByProjectName(projectName) {

 const filteredArray =  taskArray.filter(task => {
    console.log(task.projectName, projectName);
    return task.projectName === projectName
  });
  console.log('FILTRIRAM');
  console.log(taskArray);
  return filteredArray;
}

 function updateProjectNameTask(oldProjectName, newProjectName) {
    taskArray = taskArray.filter(task => task.projectName === oldProjectName).map(task => task.projectName = newProjectName);
    return taskArray;
   }



  return {getTaskArray, deleteTasksByProjectName, deleteTasksByProjectName, getTasksByProjectName, updateProjectNameTask, pushToTaskArray}
}