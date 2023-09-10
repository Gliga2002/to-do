import {isToday, addDays, isWithinInterval} from 'date-fns';
import { generateUniqueId,removePreviousActiveProject } from './general';
import { renderProjectElBefore} from './DOM/sectionAside';

const ADDED_DAYS = 7;
// Imam live konekciju, to znaci da mi pamti manipulisane vrednosti jer koristim import/export
let taskArray = [];

export function getStorageData() {
  const addProjectBtnEl = document.querySelector('.add-project-btn');
  if(localStorage.getItem('tasks')) {
    const storedTaskArray = getStorageTaskItems();
    taskArray = [...storedTaskArray];

    const projectNamesArray = getStorageProjecNames();
    projectNamesArray.forEach(projectName => {
      renderProjectElBefore(addProjectBtnEl, projectName);
      removePreviousActiveProject();
    });
  } 
}

export function setStorageProjectNames() {
  const projectNameElNodeList = document.querySelectorAll('.project-name');
  const projectNameElArray = [...projectNameElNodeList];
  const projectNameArray = projectNameElArray.map((projectNameEl) => projectNameEl.textContent);
  localStorage.setItem('projectNames',JSON.stringify(projectNameArray));
}

export function setStorageTasksArray() {
  localStorage.setItem('tasks',JSON.stringify(taskArray));
}

function getStorageProjecNames() {
  const projectNamesArray = JSON.parse(localStorage.getItem('projectNames'));
  return projectNamesArray;
}

function getStorageTaskItems() {
  const storedTaskArray = JSON.parse(localStorage.getItem('tasks'));
  return storedTaskArray;
}


export function getTaskArray() {
  return taskArray;
}

export function deleteTaskById(taskId) {
  taskArray = taskArray.filter((task) => task.id !== taskId);
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
  return updatedArray
}

export function deleteAllTasksByProjectName(projectName) {
  taskArray = taskArray.filter(task => task.projectName !== projectName);
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

  return task.isCompleted
}

export function toggleIsImportant(task) {
  task.isImportant = task.isImportant ? false :true;

  return task.isImportant;
}

export function pushTaskToArray(task) {
  taskArray.push(task);
}

// CreateTask.prototype.toggleIsCompleted = function() {
//   this.isCompleted = this.isCompleted ? false : true;
//   return this.isCompleted;
// }

// CreateTask.prototype.toggleIsImportant = function() {
//   this.isImportant = this.isImportant ? false : true;
//   return this.isImportant;
// }

// CreateTask.prototype.pushToTaskArray = function() {
//   taskArray.push(this);
//   setStorageTasksArray();
// }
  
export function updateTask(taskId,taskItems)  {
  const task = getTaskById(taskId);
  task.title = taskItems.title;
  task.details = taskItems.details;
  task.date = taskItems.date;
  return task;
}

export function checkHeadType(homeTitle, array) {
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



