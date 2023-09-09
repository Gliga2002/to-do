import { getInputValue, getElementId, renderTask, renderSectionMainHomeTasks, setInputFocus} from "../general";

import {getTaskArray, getTaskById, deleteTasksById, updateTask,createTask} from "../taskCollection";

(function () {
  const addTaskBtnEl = document.querySelector('.add-task-btn');
  const sectionMainUlEl = document.querySelector('.tasks-items');
  const tasksDiv = document.querySelector('.tasks');

  const taskFormEl = createTaskForm();
  tasksDiv.insertBefore(taskFormEl, addTaskBtnEl);
  
  submitTaskFormListener(taskFormEl, sectionMainUlEl);
  cancelTaskFormListener(taskFormEl.querySelector('.btn--cancel-task'))
 
  addTaskBtnEl.addEventListener('click',() => {
     toggleTaskForm(taskFormEl);
     setInputFocus(taskFormEl.querySelector('input[name="title"]')) 
  })
 })();
 
 function toggleTaskForm(taskFormEl) {
  taskFormEl.classList.toggle('hidden');
 }

 function submitTaskFormListener(formEl, appendTaskEl) { 
  formEl.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskItems = {};

    taskItems.projectName = document.querySelector('.main-title').textContent;
    taskItems.title =  getInputValue(this.title);
    taskItems.details = getInputValue(this.details)
    taskItems.date = getInputValue(this.date);

    const taskId = getElementId(appendTaskEl);

    if(taskId) {
      const task = updateTask(taskId, taskItems)
      // taskParent treba da mi bude li
      appendTaskEl.append(renderTask(task));
    } else {
      const task = createTask(taskItems);
      task.pushToTaskArray();
      // taskParent treba da mi bude ul
      appendTaskEl.append(renderTask(task));
    }

    formEl.classList.add('hidden');
  })
 }

 function cancelTaskFormListener(btnCancelTaskEl) {
  const formEl = btnCancelTaskEl.closest('form')
  btnCancelTaskEl.addEventListener('click', () => {
    formEl.classList.add('hidden');
    formEl.reset();
  });
 }


 export function taskListener() {
  const tasksItemsEl = document.querySelector('.tasks-items');

  tasksItemsEl.addEventListener('click', function(e) {
    const uncheckCircle = e.target.closest('.fa-circle');
    const checkCircle = e.target.closest('.fa-circle--check');
    const unfillStar = e.target.closest('.fa-star--unfill');
    const fillStar = e.target.closest('.fa-star--fill');
    const verticalDots = e.target.closest('.fa-ellipsis-vertical');


    if(uncheckCircle) {
      toggleCheckedClass(uncheckCircle);
      const  changedTaskStatus = changeTaskStatus(uncheckCircle);
      const circleBoxEl = document.querySelector(`.task-header--circle-box[data-id='${changedTaskStatus.id}']`);
      const checkCircleIcon = `<i class="fa-solid fa-circle-check fa-circle--check fa-2x" style="color: #3fca48;" data-id='${changedTaskStatus.id}'></i>`
      changeTaskStatusUI(circleBoxEl, checkCircleIcon)
    }

    if(checkCircle) {
      toggleCheckedClass(checkCircle);
      const  changedTaskStatus = changeTaskStatus(checkCircle);
      const circleBoxEl = document.querySelector(`.task-header--circle-box[data-id='${changedTaskStatus.id}']`);
      const uncheckCircleIcon = `<i class="fa-regular fa-circle fa-circle--uncheck fa-2x" data-id='${changedTaskStatus.id}'></i>`;
      changeTaskStatusUI(circleBoxEl, uncheckCircleIcon);
    }

    if(unfillStar) {
      const changedTaskStatus = changeTaskStatus(unfillStar);
      const starBoxEl = document.querySelector(`.task-header--star-box[data-id='${changedTaskStatus.id}']`);
      const fillStarIcon = `<i class="fa-solid fa-star fa-star--fill fa-2x" style="color: #bcd11f;"></i>`;
      changeTaskStatusUI(starBoxEl, fillStarIcon);
    }

    if(fillStar) {
      const  changedTaskStatus = changeTaskStatus(fillStar);
      const starBoxEl = document.querySelector(`.task-header--star-box[data-id='${changedTaskStatus.id}']`);
      const unfillStarIcon = `<i class="fa-regular fa-star fa-star--unfill fa-2x"></i>`  
      changeTaskStatusUI(starBoxEl, unfillStarIcon)
    }

    if(verticalDots) {
      togglePopUpEdit(verticalDots)
    }
  })
 }

 function toggleCheckedClass(iconEl) {
  const liEl = iconEl.closest('li');
  if(iconEl.classList.contains('fa-circle--check')) liEl.classList.remove('checked')
  if(iconEl.classList.contains('fa-circle--uncheck')) liEl.classList.add('checked')
 }

 function changeTaskStatus(iconEl) {
  const liEl = iconEl.closest('li');
  const liId = getElementId(liEl);
  const task = getTaskById(Number(liId))
  const status = iconEl.classList.contains('circle') ? task.setIsCompleted() : task.setIsImportant()

  return {id: liId, status}
 }

 function changeTaskStatusUI(boxEl, icon) {
  boxEl.innerHTML = '';
  boxEl.innerHTML = icon;
 }

 function togglePopUpEdit(verticalDots) {
  const liId = getElementId(verticalDots.closest('li'));
  const popUpTaskEl = document.querySelector(`.pop-up--task[data-id='${liId}'`);
  popUpTaskEl.classList.toggle('hidden');
  addPopUpEditListener(popUpTaskEl);
 }

 function addPopUpEditListener(popUpTaskEl) {
  popUpTaskEl.addEventListener('click', function(e) {
    const liEl = popUpTaskEl.closest('li')
    const taskId = getElementId(liEl);
    const editBtnEl = e.target.closest('.pop-up-btn--edit');
    const deleteBtnEl = e.target.closest('.pop-up-btn--delete');

    if(editBtnEl) {
      const task = getTaskById(Number(taskId));
      liEl.innerHTML = '';
      console.log(task);
      const taskFormEditEl = createTaskForm(task);
      liEl.appendChild(taskFormEditEl);
      setInputFocus(taskFormEditEl.querySelector('input[name="title"]'))
      submitTaskFormListener(taskFormEditEl, liEl);
      cancelTaskFormListener(taskFormEditEl.querySelector('.btn--cancel-task'))

      popUpTaskEl.classList.add('hidden');
    }

    if(deleteBtnEl) {
      deleteTasksById(Number(taskId));
      liEl.remove();
      popUpTaskEl.classList.add('hidden');

    }

  })

 }

function createTaskForm(task) {
  console.log(task);
  const taskFormEl = document.createElement('form');
  console.log(taskFormEl);
  taskFormEl.classList.add(`${task ? 'tasks-form--edit' :'tasks-form'}`,'flex','flex--column','gap--sm','margin-top--sm',`${!task ? 'hidden' :'edit'}`);
  taskFormEl.innerHTML = `
  <div class="input-box flex flex--column">
    <label class="input-box-label" for="title">Title *</label>
    <input class="input-box-input" id="title" type="text" name="title" ${task?.title ? `value='${task.title}'` : ''} placeholder="What to do ?" required/>
  </div>

  <div class="input-box flex flex--column">
    <label class="input-box-label"  for="details">Details</label>
    <input class="input-box-input" id="details" placeholder="eg:I'm just gonna procrastinate, aren't i?" type="text" name="details" ${task?.details ? `value='${task.details}'` : ''}/>
  </div>

  <div class="input-box flex flex--column">
    <label class="input-box-label" for="date">Date *</label>
    <input class="input-box-input" id="date" type="date" name="date" ${task?.date ? `value='${task.date}'` : ''} required/>
  </div>

  <div class="tasks-form-btns flex flex--center gap--md">
    <button type="submit" class="btn btn--add btn--add-task">Add</button>
    <button type="button"  class="btn btn--cancel btn--cancel-task">Cancel</button>
  </div>`;

  return taskFormEl;

 }

 export function setInitSectionMain() {
  const allTasksHomeEl = document.querySelector('.home--all-tasks');
  allTasksHomeEl.classList.add('active');

  renderSectionMainHomeTasks('All Tasks', getTaskArray());
}







