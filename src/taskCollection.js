import { isThisWeek, isToday} from 'date-fns'
// Imam live konekciju, to znaci da mi pamti manipulisane vrednosti jer koristim import/export
let taskArray = [];

export function getTaskArray() {
  return taskArray;
}

export function pushToTaskArray(task) {
  taskArray.push(task);
  console.log(taskArray);
}

export function deleteTasksByProjectName(projectName) {
  taskArray = taskArray.filter((task) => task.projectName !== projectName)
  return taskArray;
}

export function getTasksByProjectName(projectName) {
 const filteredArray =  taskArray.filter(task => {
    console.log(task.projectName, projectName);
    return task.projectName === projectName
  });
  console.log('FILTRIRAM');
  console.log(taskArray);
  return filteredArray;
}

export function updateProjectNameTask(oldProjectName, newProjectName) {
  taskArray = taskArray.filter(task => task.projectName === oldProjectName).map(task => task.projectName = newProjectName);
  return taskArray;
}

export function checkHeadType(homeTitle, array) {
  console.log(array);
  if(homeTitle === 'All Tasks') return array;
  if(homeTitle === 'Today') return array.filter((task) => isToday(new Date(task.date)));
  if(homeTitle === 'Next 7 Days') return array.filter((task) => isThisWeek(new Date(task.date)));
  if(homeTitle === 'Important') return array.filter((task) => task.isImportant);
}



