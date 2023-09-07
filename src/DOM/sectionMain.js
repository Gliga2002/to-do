import { removeAddTaskBtn, getInputValue} from "./sectionAside";
import createTask from "../createTask";
import {getTaskArray,pushToTaskArray, getTaskById} from "../taskCollection";



 function addTaskBtnListener() {
  const addTaskBtnEl = document.querySelector('.add-task-btn');
  const taskFormEl = document.querySelector('.tasks-form');
 
  addTaskBtnEl.addEventListener('click',() => {
     toggleTaskForm(taskFormEl);
  })
 }
 addTaskBtnListener();


 function toggleTaskForm(taskFormEl) {
  taskFormEl.classList.toggle('hidden');
 }

 function submitTaskFormListener() {
  const taskFormEl = document.querySelector('.tasks-form');
  const btnCancelTaskEl = document.querySelector('.btn--cancel-task');
  const sectionMainUlEl = document.querySelector('.tasks-items');

  taskFormEl.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskItems = {};

    taskItems.projectName = document.querySelector('.main-title').textContent;
    taskItems.title =  getInputValue(this.title);
    taskItems.details = getInputValue(this.details)
    taskItems.date = getInputValue(this.date);

    const task = createTask(taskItems);

    pushToTaskArray(task);

    sectionMainUlEl.append(renderTask(task));

    taskFormEl.classList.add('hidden');
  })

  btnCancelTaskEl.addEventListener('click', () => {
    taskFormEl.classList.add('hidden');
    taskFormEl.reset();
  });


 }
 submitTaskFormListener();

 export function addTasksItemsListener() {
  const tasksItemsEl = document.querySelector('.tasks-items');

  tasksItemsEl.addEventListener('click', function(e) {
    // const circleIcon = document.querySelector('.fa-circle');
    // const fillCircleIcon = document.querySelector('.fa-circle--check');
    // const starIcon = document.querySelector('.fa-star--unfill');
    // const fillStarIcon = document.querySelector('.fa-star--fill')


    //refaktorisi

    const uncheckCircle = e.target.closest('.fa-circle')
    if(uncheckCircle) {
      const liEl = uncheckCircle.closest('li');
      liEl.classList.add('checked')
      const liId = liEl.dataset.taskId;
      const task = getTaskById(Number(liId))
      const isCompleted = task.setIsCompleted();
      const checkCircle = document.querySelector(`.fa-circle--check[data-task-id='${liId}']`)
      renderIcon(isCompleted, uncheckCircle,checkCircle )

      
      
    }

    const checkCircle = e.target.closest('.fa-circle--check')
    if(checkCircle) {
      const liEl = checkCircle.closest('li');
      liEl.classList.remove('checked')
      const liId = liEl.dataset.taskId;
      const task = getTaskById(Number(liId))
      const isCompleted = task.setIsCompleted();
      const uncheckCircle = document.querySelector(`.fa-circle--uncheck[data-task-id='${liId}']`)
      renderIcon(isCompleted, uncheckCircle, checkCircle)

      
    }

    const unfillStar = e.target.closest('.fa-star--unfill')
    if(unfillStar) {
      const liEl = unfillStar.closest('li');
      const liId = liEl.dataset.taskId;
      const task = getTaskById(Number(liId))
      const isImportant = task.setIsImportant();
      const filledStar = document.querySelector(`.fa-star--fill[data-task-id='${liId}']`)
      renderIcon(isImportant, unfillStar, filledStar)
      
    }

    const fillStar = e.target.closest('.fa-star--fill')
    if(fillStar) {
      const liEl = fillStar.closest('li');
      const liId = liEl.dataset.taskId;
      const task = getTaskById(Number(liId))
      const isImportant = task.setIsImportant();
      const unfillStar = document.querySelector(`.fa-star--unfill[data-task-id='${liId}']`)
      renderIcon(isImportant, unfillStar, fillStar)
      
    }
    
  })
 }


 function renderIcon(condition, emptyIcon, fillIcon) {
  if(condition) {
    console.log(emptyIcon)
    console.log(fillIcon);
    fillIcon.classList.remove('hidden');
    emptyIcon.classList.add('hidden');
  } else {
    fillIcon.classList.add('hidden');
    emptyIcon.classList.remove('hidden');
  }
 }



 export function setInitSectionMain() {
  const allTasksHomeEl = document.querySelector('.home--all-tasks');
  allTasksHomeEl.classList.add('home--clicked');
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
  liEl.setAttribute('data-task-id',`${String(task.id)}`)
  liEl.innerHTML = `
  <div class="task">
    <div class="task-header flex">
      <div class="task-header--left flex flex--center-v gap--es">
        <i class="fa-solid fa-circle-check fa-circle--check fa-2x hidden" style="color: #3fca48;" data-task-id='${task.id}'></i>
        <i class="fa-regular fa-circle fa-circle--uncheck fa-2x" data-task-id='${task.id}'></i>
        <p class="subheading">${task.title}</p>
      </div>
      <div class="task-header--right flex flex--center-v gap--sm">
        <div class="task-date">${task.date}</div>
        <i class="fa-solid fa-star fa-star--fill hidden fa-2x" style="color: #bcd11f;" data-task-id='${task.id}'></i>
        <i class="fa-regular fa-star fa-star--unfill fa-2x" data-task-id='${task.id}'></i>
        <i class="fa-solid fa-ellipsis-vertical fa-2x"></i> 
        <div class="pop-up pop-up--edit flex flex--column hidden">
          <button class="pop-up-btn">Edit</button>
          <button class="pop-up-btn">Delete</button>
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
