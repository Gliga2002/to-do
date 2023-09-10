import {isToday, addDays, isWithinInterval} from 'date-fns';

const ADDED_DAYS = 7;
// Imam live konekciju, to znaci da mi pamti manipulisane vrednosti jer koristim import/export
let taskArray = [];


export function getTaskArray() {
  console.log(taskArray);
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


export function createTask(taskitems) {
  const id = Date.now();
  
  function toggleIsCompleted() {
    this.isCompleted = this.isCompleted ? false : true;

    console.log(this);

    return this.isCompleted;
  }

  function toggleIsImportant() {
    this.isImportant = this.isImportant ? false : true;

    console.log(this);

    return this.isImportant;
  }

   function pushToTaskArray() {
    taskArray.push(this);
  }

  return {id,
    projectName:taskitems.projectName, 
    title:taskitems.title,
    details:taskitems.details,
    date:taskitems.date, 
    isCompleted:false,
    isImportant:false,
    setIsCompleted:toggleIsCompleted,
    setIsImportant:toggleIsImportant,
    pushToTaskArray:pushToTaskArray
  }
}

export function updateTask(taskId,taskItems)  {
  const task = getTaskById(Number(taskId));
  task.title = taskItems.title;
  task.details = taskItems.details;
  task.date = taskItems.date;
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



