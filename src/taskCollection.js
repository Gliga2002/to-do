import {isToday, addDays, isWithinInterval} from 'date-fns';
import { generateUniqueId } from './general';
import { renderProjectElBefore , removePreviousActiveProject} from './DOM/sectionAside';

const ADDED_DAYS = 7;
// Imam live konekciju, to znaci da mi pamti manipulisane vrednosti jer koristim import/export
let taskArray = [];

export function getStorageData() {
  const addProjectBtnEl = document.querySelector('.add-project-btn');
  if(localStorage.getItem('tasks')) {
    const storedTaskArray = JSON.parse(localStorage.getItem('tasks'));

    taskArray = [...storedTaskArray];
    // taskArray.filter((item, index, array) => {
    // const firstIndex = array.findIndex((el) => el.projectName === item.projectName);

    // return index === firstIndex;
    // }).map((task) => renderProjectElBefore(addProjectBtnEl, task.projectName))
    const projectNamesArray = getStorageProjecNames();
    projectNamesArray.forEach(projectName => {
      renderProjectElBefore(addProjectBtnEl, projectName);
      removePreviousActiveProject();
    });
  } else {
    console.log('NO TASKS');
  }
}

function setStorageTasksArray() {
  localStorage.setItem('tasks',JSON.stringify(taskArray));
  console.log('SETUJEM')
}

function getStorageProjecNames() {
  const projectNamesArray = JSON.parse(localStorage.getItem('projectNames'));
  return projectNamesArray;

}




export function getTaskArray() {
  return taskArray;
}

export function deleteTaskById(taskId) {
  taskArray = taskArray.filter((task) => task.id !== taskId);
  setStorageTasksArray();
}

export function getTasksByProjectName(projectName) {
 const filteredArray =  taskArray.filter(task => task.projectName === projectName);
 return filteredArray;
}

export function getTaskById(taskId) {
  return taskArray.find(task =>task.id === taskId);
}

export function updateTasksProjectName(oldProjectName, newProjectName) {
  if(!taskArray.some(task => task.projectName === oldProjectName)) return [];
  taskArray.filter(task => task.projectName === oldProjectName).map(task => task.projectName = newProjectName)
  const updatedArray = taskArray.filter(task => task.projectName === newProjectName );
  setStorageTasksArray();
  return updatedArray
}

export function deleteAllTasksByProjectName(projectName) {
  taskArray = taskArray.filter(task => task.projectName !== projectName);
  setStorageTasksArray();
  return taskArray;
}

export function checkProjectNameExistance(projectNameElList, projectName) {
  return projectNameElList.some(projectNameEl => projectNameEl.textContent === projectName);
}


export function CreateTask(taskitems) {
  this.id = generateUniqueId();
  this.projectName = taskitems.projectName;
  this.title = taskitems.title;
  this.details = taskitems.details;
  this.date  = taskitems.date;
  this.isCompleted = false;
  this.isImportant = false;
}

export function toggleIsCompleted(task) {
  task.isCompleted = task.isCompleted ? false :true;
  setStorageTasksArray();

  return task.isCompleted
}

export function toggleIsImportant(task) {
  task.isImportant = task.isImportant ? false :true;
  setStorageTasksArray();

  return task.isImportant;
}

export function pushTaskToArray(task) {
  taskArray.push(task);
  console.log(taskArray);
  setStorageTasksArray();
}

// CreateTask.prototype.toggleIsCompleted = function() {
//   this.isCompleted = this.isCompleted ? false : true;

//   console.log('TASK AFTER CHANGE ISCompleted')
//   console.log(this);
//   setStorageTasksArray();

//   return this.isCompleted;
// }

// CreateTask.prototype.toggleIsImportant = function() {
//   this.isImportant = this.isImportant ? false : true;

//   console.log('TASK AFTER CHANGE ISimportant')
//   console.log(this);
//   setStorageTasksArray();

//   return this.isImportant;
// }


// CreateTask.prototype.pushToTaskArray = function() {
//   taskArray.push(this);
//   console.log(taskArray);
//   setStorageTasksArray();
// }
  



export function updateTask(taskId,taskItems)  {
  const task = getTaskById(taskId);
  task.title = taskItems.title;
  task.details = taskItems.details;
  task.date = taskItems.date;
  setStorageTaskArray();
  return task;
}

export function checkHeadType(homeTitle, array) {
  console.log(array);
  if(homeTitle === 'All Tasks') return array;
  if(homeTitle === 'Today') return array.filter((task) => isToday(new Date(task.date)));
  if(homeTitle === 'Next 7 Days') {
    const dateNow = new Date();

    const add7Days = addDays(dateNow, ADDED_DAYS);

    return array.filter((task) => {
      const currentDate = getCurrentDate(task.date)
      return isWithinInterval(currentDate, {start: dateNow,end: new Date(add7Days)})
    });
  }
  if(homeTitle === 'Important') return array.filter((task) => task.isImportant);
}

function getCurrentDate(taskDate) {
 const currentDate = new Date();

 const dateString = taskDate;

 const dateComponents = dateString.split('-');

 currentDate.setFullYear(parseInt(dateComponents[0], 10));
 currentDate.setMonth(parseInt(dateComponents[1], 10) - 1); // Months are zero-based
 currentDate.setDate(parseInt(dateComponents[2], 10));

 return currentDate;
}



