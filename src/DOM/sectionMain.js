import { removeAddTaskBtn, getInputValue} from "./sectionAside";
// import createTask from "../createTask";
import {getTaskArray,pushToTaskArray, getTaskById, deleteTasksById, updateTask,createTask} from "../taskCollection";



 function addTaskBtnListener() {
  const addTaskBtnEl = document.querySelector('.add-task-btn');
  const taskFormEl = document.querySelector('.tasks-form');
  const sectionMainUlEl = document.querySelector('.tasks-items');
  submitTaskFormListener(taskFormEl,sectionMainUlEl);
 
  addTaskBtnEl.addEventListener('click',() => {
     toggleTaskForm(taskFormEl);
    
  })
 }
 addTaskBtnListener();




 function toggleTaskForm(taskFormEl) {
  taskFormEl.classList.toggle('hidden');
 }

 function submitTaskFormListener(formEl, taskParent, taskId) {
  console.log('OVDE')
  const btnCancelTaskEl = document.querySelector('.btn--cancel-task');
  

  formEl.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskItems = {};

    taskItems.projectName = document.querySelector('.main-title').textContent;
    taskItems.title =  getInputValue(this.title);
    taskItems.details = getInputValue(this.details)
    taskItems.date = getInputValue(this.date);

    if(taskId) {
      const task = updateTask(taskId, taskItems)
     taskParent.append(renderTask(task));
    } else {
      const task = createTask(taskItems);
      task.pushToTaskArray();
      taskParent.append(renderTask(task));
    }


    formEl.classList.add('hidden');
  })

  btnCancelTaskEl.addEventListener('click', () => {
    formEl.classList.add('hidden');
    formEl.reset();
  });


 }


 

 export function addTasksItemsListener() {
  const tasksItemsEl = document.querySelector('.tasks-items');

  tasksItemsEl.addEventListener('click', function(e) {
    const uncheckCircle = e.target.closest('.fa-circle');
    const checkCircle = e.target.closest('.fa-circle--check');
    const unfillStar = e.target.closest('.fa-star--unfill');
    const fillStar = e.target.closest('.fa-star--fill');
    const verticalDots = e.target.closest('.fa-ellipsis-vertical');


    if(uncheckCircle) {
      const  changedTaskStatus = changeTaskStatus(uncheckCircle);
      const circleBoxEl = document.querySelector(`.task-header--circle-box[data-task-id='${changedTaskStatus.id}']`);
      circleBoxEl.innerHTML = '';
      circleBoxEl.innerHTML = `<i class="fa-solid fa-circle-check fa-circle--check fa-2x" style="color: #3fca48;" data-task-id='${changedTaskStatus.id}'></i>`
    }

    
    if(checkCircle) {
      const  changedTaskStatus = changeTaskStatus(checkCircle);
      const circleBoxEl = document.querySelector(`.task-header--circle-box[data-task-id='${changedTaskStatus.id}']`);
      circleBoxEl.innerHTML = '';
      circleBoxEl.innerHTML = `<i class="fa-regular fa-circle fa-circle--uncheck fa-2x" data-task-id='${changedTaskStatus.id}'></i>`
    }

    
    if(unfillStar) {
      const changedTaskStatus = changeTaskStatus(unfillStar);
      const starBoxEl = document.querySelector(`.task-header--star-box[data-task-id='${changedTaskStatus.id}']`);
      starBoxEl.innerHTML = '';
      starBoxEl.innerHTML = `<i class="fa-solid fa-star fa-star--fill fa-2x" style="color: #bcd11f;"></i>`
    }

 
    if(fillStar) {
      const  changedTaskStatus = changeTaskStatus(fillStar);
      const starBoxEl = document.querySelector(`.task-header--star-box[data-task-id='${changedTaskStatus.id}']`);
      starBoxEl.innerHTML = '';
      starBoxEl.innerHTML =  `<i class="fa-regular fa-star fa-star--unfill fa-2x"></i>`  
    }


    if(verticalDots) {
      const liEl = verticalDots.closest('li');
      const liId = liEl.dataset.taskId;
      const popUpTaskEl = document.querySelector(`.pop-up--task[data-task-id='${liId}'`);
      addPopUpEditListener(liId, popUpTaskEl, liEl);
      popUpTaskEl.classList.toggle('hidden');
    }

    
    
  })
 }

 function addPopUpEditListener(taskId, popUpTaskEl, liEl) {

  popUpTaskEl.addEventListener('click', function(e) {
    const editBtnEl = e.target.closest('.pop-up-btn--edit');
    const deleteBtnEl = e.target.closest('.pop-up-btn--delete');

    if(editBtnEl) {
      const task = getTaskById(Number(taskId));
      console.log(task);
      liEl.innerHTML = '';
      liEl.appendChild(createEditForm(task, liEl));
      popUpTaskEl.classList.add('hidden');
    }

    if(deleteBtnEl) {
      deleteTasksById(Number(taskId));
      liEl.remove();
      popUpTaskEl.classList.add('hidden');

    }

  })

 }

 function createEditForm(task, liEl) {
  const editTaskFormEl = document.createElement('form');
  editTaskFormEl.classList.add('tasks-form--edit','flex','flex--column','gap--sm','margin-top--sm');
  editTaskFormEl.innerHTML = `
  <div class="input-box flex flex--column">
    <label class="input-box-label" for="title">Title *</label>
    <input class="input-box-input" id="title" type="text" name="title" value="${task.title}" placeholder="What to do ?" required/>
  </div>

  <div class="input-box flex flex--column">
    <label class="input-box-label"  for="details">Details</label>
    <input class="input-box-input" id="details" placeholder="eg:I'm just gonna procrastinate, aren't i?" type="text" name="details" value="${task.details}"/>
  </div>

  <div class="input-box flex flex--column">
    <label class="input-box-label" for="date">Date *</label>
    <input class="input-box-input" id="date" type="date" name="date" value="${task.date}" required/>
  </div>

  <div class="tasks-form-btns flex flex--center gap--md">
    <button type="submit" class="btn btn--add btn--add-task">Add</button>
    <button type="button"  class="btn btn--cancel btn--cancel-task">Cancel</button>
  </div>`;

  submitTaskFormListener(editTaskFormEl,liEl, task.id);

  return editTaskFormEl;

 }



 function changeTaskStatus(iconEl) {
  const liEl = iconEl.closest('li');
  if(iconEl.classList.contains('fa-circle--check')) liEl.classList.remove('checked')
  if(iconEl.classList.contains('fa-circle--uncheck')) liEl.classList.add('checked')
  const liId = liEl.dataset.taskId;
  const task = getTaskById(Number(liId))
  const status = iconEl.classList.contains('circle') ? task.setIsCompleted() : task.setIsImportant()

  return {id: liId, status}

 }


//  function renderIcon(condition, emptyIcon, fillIcon) {
//   if(condition) {
//     fillIcon.classList.remove('hidden');
//     emptyIcon.classList.add('hidden');
//   } else {
//     fillIcon.classList.add('hidden');
//     emptyIcon.classList.remove('hidden');
//   }
//  }


 export function setInitSectionMain() {
  const allTasksHomeEl = document.querySelector('.home--all-tasks');
  allTasksHomeEl.classList.add('active');
  renderSectionMain('All Tasks', getTaskArray());
  removeAddTaskBtn();
}


 export function renderSectionMain(titleName, array) {
  const sectionMainHeadingEl = document.querySelector('.main-title');
  const sectionMainUlEl = document.querySelector('.tasks-items');

  renderMainHeading(
    sectionMainHeadingEl,
    titleName
    );

  renderTasks(
    sectionMainUlEl,
    array
    );

}

function renderMainHeading(headingEl,title) {
  headingEl.textContent = title;
}

function renderTasks(sectionMainUlEl, array) {
  sectionMainUlEl.innerHTML = "";
  array.forEach(task => {
    sectionMainUlEl.appendChild(renderTask(task));
  });
}

function renderTask(task) {
  const liEl = document.createElement('li');
  liEl.classList.add('tasks-item','margin-bottom--es');
  if(task.isCompleted) liEl.classList.add('checked');
  liEl.setAttribute('data-task-id',`${String(task.id)}`)
  
  liEl.innerHTML = `
  <div class="task">
    <div class="task-header flex">
      <div class="task-header--left flex flex--center-v gap--es">
       <div class='task-header--circle-box' data-task-id='${task.id}'>
        ${task.isCompleted ? `<i class="circle fa-solid fa-circle-check fa-circle--check fa-2x " style="color: #3fca48;"></i>`  : `<i class="circle fa-regular fa-circle fa-circle--uncheck fa-2x"></i>`}
        </div>
          <p class="subheading">${task.title}</p>
        </div>
      
      <div class="task-header--right flex flex--center-v gap--sm">
        <div class="task-date">${task.date}</div>
        <div class='task-header--star-box' data-task-id='${task.id}'>
        ${task.isImportant ? `<i class="fa-solid fa-star fa-star--fill  fa-2x" style="color: #bcd11f;"></i>` : `<i class="fa-regular fa-star fa-star--unfill fa-2x"></i>`}
        </div>
        <i class="fa-solid fa-ellipsis-vertical fa-2x"></i> 
        <div class="pop-up pop-up--task flex flex--column hidden" data-task-id='${task.id}'>
          <button class="pop-up-btn pop-up-btn--edit">Edit</button>
          <button class="pop-up-btn pop-up-btn--delete">Delete</button>
          </div>        
      </div>
    </div>
    <div class="task-body">
      <p class="task-body-text">
        ${task.details}
      </p>
    </div>
</div>`;

return liEl;

}
