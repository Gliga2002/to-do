import { renderSectionMain} from "./sectionMain";
import {checkHeadType, getTaskArray,getTasksByProjectName } from "../taskCollection";


export function homeListener() {
  const homesEl = document.querySelector('.homes');
  const homeArray = document.querySelectorAll('.home')

  homesEl.addEventListener('click', function(e) {
    const homeEl = e.target.closest('.home');
    if(!homeEl) {
      removeClickedClass(homeArray);
      return;
    }

    removeClickedClass(homeArray);
    homeEl.classList.add('home--clicked');

    const homeTitle= homeEl.children[1].textContent;

    const filteredTaskArray = checkHeadType(homeTitle, getTaskArray())
    renderSectionMain(homeTitle, filteredTaskArray);

    removeAddTaskBtn()
  })
}


function removeClickedClass(homesEl) {
  homesEl.forEach(homeEl => {
    if(homeEl.classList.contains('home--clicked')) homeEl.classList.remove('home--clicked'); 
  })
}

export function removeAddTaskBtn() {
  document.querySelector('.add-task-btn').classList.add('hidden');
}

function addAddTaskBtn() {
  document.querySelector('.add-task-btn').classList.remove('hidden');
}

export function projectListener() {
  const projectsEl = document.querySelector('.projects');

  projectsEl.addEventListener('click', function(e) {
    const projectEl = e.target.closest('.project');
    const projectAddBtnEl = e.target.closest('.add-project-btn');

    const projectFormEl = document.querySelector('.add-project'); 

    if(projectAddBtnEl) {
      projectFormEl.classList.remove('hidden');
      projectFormListener();
    }

    if(projectEl) {
      const projectName = projectEl.children[1].textContent;
      renderSectionMain(
        projectName,
        getTasksByProjectName(projectName));

      addAddTaskBtn();
    }
  })
}

function projectFormListener() {
  const projectFormEl = document.querySelector('.add-project');
  const inputProjectEl = document.querySelector('.add-project .input-box-input');
  
  projectFormEl.addEventListener('click',(e) => {
    e.preventDefault();
    const addBtnEl = e.target.closest('.btn--add');
    const cancelBtnEl = e.target.closest('.btn--cancel');

    if(addBtnEl) {
     
     const projectName = getInputValue(inputProjectEl);
     if(!projectName) return;

     renderProjectEl(projectFormEl, projectName);

     projectFormEl.classList.add('hidden');

     renderSectionMain(projectName,getTasksByProjectName(projectName))
    }


    if(cancelBtnEl) projectFormEl.classList.add('hidden');

  })
}

export function getInputValue(inputEl) {
  const inputValue = inputEl.value;
  inputEl.value = "";
  return inputValue;
}

function renderProjectEl(projectFormEl, projectName) {
  const projectsEl = document.querySelector('.projects');
  
  const projectBoxEl = createProjectEl(projectName);
  projectsEl.insertBefore(projectBoxEl, projectFormEl);

  addAddTaskBtn();
}

function createProjectEl(projectName) {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project--box');

  projectDiv.innerHTML = `
  <div class="project flex flex--center-v">
   <i class="fa-solid fa-bars fa-2x"></i>
   <p class="project-name">${projectName}</p>
   <i class="project-dots fa-solid fa-ellipsis-vertical fa-2x"></i>

   <div class="pop-up pop-up--rename flex flex--column hidden">
     <button class="pop-up-btn pop-up--btn--rename">Rename</button>
     <button class="pop-up-btn pop-up-btn--delete">Delete</button>
   </div>
  </div>
  `

  return projectDiv;
}


