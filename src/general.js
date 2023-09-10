export function getInputValue(inputEl) {
  const inputValue = inputEl.value;
  inputEl.value = "";
  return inputValue;
}

export function setInputFocus(inputEl) {
  inputEl.select();
}

export function generateUniqueId() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000000); // Adjust the range as needed
  return `${timestamp}-${random}`;
}

export function getElementId(element) {
  return element.dataset.id;
}

export function renderSectionMainHomeTasks(title, array) {
  renderSectionMain(title, array);
  removeAddTaskBtn()
}

export function renderSectionMainProjectTasks(title,array) {
  renderSectionMain(title, array);
  addAddTaskBtn()
}

 function removeAddTaskBtn() {
  document.querySelector('.add-task-btn').classList.add('hidden');
}

 function addAddTaskBtn() {
  document.querySelector('.add-task-btn').classList.remove('hidden');
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

export function renderTask(task) {
  const liEl = document.createElement('li');
  liEl.classList.add('tasks-item','margin-bottom--es');
  if(task.isCompleted) liEl.classList.add('checked');
  liEl.setAttribute('data-id',`${String(task.id)}`)
  
  liEl.innerHTML = `
  <div class="task">
    <div class="task-header flex">
      <div class="task-header--left flex flex--center-v gap--es">
       <div class='task-header--circle-box' data-id='${task.id}'>
        ${task.isCompleted ? `<i class="circle fa-solid fa-circle-check fa-circle--check fa-2x " style="color: #3fca48;"></i>`  : `<i class="circle fa-regular fa-circle fa-circle--uncheck fa-2x"></i>`}
        </div>
          <p class="subheading">${task.title}</p>
        </div>
      
      <div class="task-header--right flex flex--center-v gap--sm">
        <div class="task-date">${task.date}</div>
        <div class='task-header--star-box' data-id='${task.id}'>
        ${task.isImportant ? `<i class="fa-solid fa-star fa-star--fill  fa-2x" style="color: #bcd11f;"></i>` : `<i class="fa-regular fa-star fa-star--unfill fa-2x"></i>`}
        </div>
        <i class="fa-solid fa-ellipsis-vertical fa-2x"></i> 
        <div class="pop-up pop-up--task flex flex--column hidden" data-id='${task.id}'>
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

export function removePreviousActiveEl() {
  removePreviousActiveHome();
  removePreviousActiveProject();
}

export function removePreviousActiveProject() {
  const projectNodeList = document.querySelectorAll('.project');
  projectNodeList.forEach((project) => project.classList.remove('active'));
}

export function removePreviousActiveHome() {
  const homeNodeList = document.querySelectorAll('.home');
  homeNodeList.forEach((home) => home.classList.remove('active'));
}

export function hideTasksFormWhenSwitch() {
  const taskForm = document.querySelector('.tasks-form');
  if(taskForm && !taskForm.classList.contains('hidden')) taskForm.classList.add('hidden');
}