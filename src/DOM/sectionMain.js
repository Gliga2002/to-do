import { removeAddTaskBtn, getInputValue} from "./sectionAside";
import createTask from "../createTask";
import taskCollection from "../taskCollection";
const taskArrayFunctions = taskCollection();


export function setInitSectionMain() {
  const allTasksHomeEl = document.querySelector('.home--all-tasks');
  allTasksHomeEl.classList.add('home--clicked');
  renderSectionMain('All Tasks', taskArrayFunctions.getTaskArray());
  removeAddTaskBtn();
}



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

    taskArrayFunctions.pushToTaskArray(task);



    sectionMainUlEl.append(renderTask(task));

    taskFormEl.classList.add('hidden');
  })

  btnCancelTaskEl.addEventListener('click', () => {
    taskFormEl.classList.add('hidden');
    taskFormEl.reset();
  });


 }
 submitTaskFormListener();


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
        <i class="fa-regular fa-circle fa-2x"></i>
        <p class="subheading">${task.title}</p>
      </div>
      <div class="task-header--right flex flex--center-v gap--sm">
        <div class="task-date">${task.date}</div>
        <i class="fa-regular fa-star fa-2x"></i>
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
