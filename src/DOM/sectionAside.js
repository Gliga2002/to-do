import {setInitSectionMain} from "./sectionMain";
import {checkHeadType, getTaskArray,getTasksByProjectName,deleteAllTasksByProjectName, updateTasksProjectName, checkProjectNameExistance} from "../taskCollection";
import { getInputValue, setInputFocus, getElementId, renderSectionMainHomeTasks, renderSectionMainProjectTasks, generateUniqueId} from "../general";


export function asideListener() {
  const asideEl = document.querySelector('aside');

  asideEl.addEventListener('click', (e) => {
    const homeEl = e.target.closest('.home')
    const projectEl = e.target.closest('.project');
    const deleteBtnEl = e.target.closest('.pop-up-btn--delete');

    if(homeEl) setActiveClass(homeEl)
    
    // Since deleteBtnEl is inside projectEl, i want to exlucde that btn when click projectEl
    if(projectEl && !deleteBtnEl) setActiveClass(projectEl)
  })
}

function setActiveClass(activeEl) {
  removePreviousActiveEl();
  activeEl.classList.add('active');
}

function removePreviousActiveEl() {
  removePreviousActiveHome();
  removePreviousActiveProject();
}

export function removePreviousActiveProject() {
  const projectNodeList = document.querySelectorAll('.project');
  projectNodeList.forEach((project) => project.classList.remove('active'));
}

function removePreviousActiveHome() {
  const homeNodeList = document.querySelectorAll('.home');
  homeNodeList.forEach((home) => home.classList.remove('active'));
}



export function homeListener() {
  const homesEl = document.querySelector('.homes');
  

  homesEl.addEventListener('click', function(e) {
    const tasksFrom = document.querySelector('.tasks-form');
    const homeEl = e.target.closest('.home');
    if(!homeEl) return;
    // remove task form if exist
    if(tasksFrom && !tasksFrom.classList.contains('hidden')) tasksFrom.classList.add('hidden');

    const homeTitle= homeEl.querySelector('p.subheading').textContent;
    const filteredTaskArray = checkHeadType(homeTitle, getTaskArray());

    renderSectionMainHomeTasks(homeTitle, filteredTaskArray);
  })
}




export function projectsListener() {
  const projectsEl = document.querySelector('.projects');

  projectsEl.addEventListener('click', function(e) {
    const projectEl = e.target.closest('.project');
    const projectAddBtnEl = e.target.closest('.add-project-btn');

    const deleteBtnEl = e.target.closest('.pop-up-btn--delete');

    if(projectAddBtnEl) {
      renderProjectFormBefore(projectAddBtnEl);
    }

    // Since deleteBtnEl is inside projectEl, i want to exlucde that btn when click projectEl
    if(projectEl  && !deleteBtnEl) {
      const projectName = projectEl.querySelector('p.project-name').textContent;
      const projectTasksArray = getTasksByProjectName(projectName);

      // Refaktorisi
      const tasksFrom = document.querySelector('.tasks-form');
      if(tasksFrom && !tasksFrom.classList.contains('hidden')) tasksFrom.classList.add('hidden');

      renderSectionMainProjectTasks(projectName, projectTasksArray);
    }
  })
}

function renderProjectFormBefore(projectAddBtnEl) {
  const projectsEl = document.querySelector('.projects');
  const projectFormEl = createProjectForm();
  projectsEl.insertBefore(projectFormEl, projectAddBtnEl);
  setInputFocus(projectFormEl.querySelector('input.input-box-input'));
  projectFormListener(projectFormEl);
}



function projectFormListener(projectFormEl, oldProjectName) {
  const addProjectBtnEl = document.querySelector('.add-project-btn');

  projectFormEl.addEventListener('click', function(e) {
    e.preventDefault();
    const addBtnEl = e.target.closest('.btn--add');
    const cancelBtnEl = e.target.closest('.btn--cancel');

    const projectBoxEl = projectFormEl.closest('.project--box');
    const boxId = projectBoxEl ? getElementId(projectBoxEl) : '';

    if(addBtnEl) {
      const inputProjectEl = projectFormEl.querySelector('input.input-box-input');
      const projectName = getInputValue(inputProjectEl);
      // Check if projectName already exist
      const isSame = hasSameProjectName(inputProjectEl, projectName);
    
      if(!projectName || isSame) return;
     
      projectFormEl.remove();

     if(boxId) {
      renderProjectElInside(projectBoxEl, projectName, boxId);

      const newArray = updateTasksProjectName(oldProjectName, projectName);
      renderSectionMainProjectTasks(projectName, newArray);
      return;
     }

     renderProjectElBefore(addProjectBtnEl, projectName);
     
     const projectTasksArray = getTasksByProjectName(projectName)
     renderSectionMainProjectTasks(projectName, projectTasksArray);
    }

    if(cancelBtnEl) {
      projectFormEl.remove();
     if(boxId) renderProjectElInside(projectBoxEl, oldProjectName, boxId); 
    }
  })
}

function hasSameProjectName(inputEl, projectName) {
  const projectNameList = Array.from(document.querySelectorAll('.project-name'));
  const isSame = projectNameList ? checkProjectNameExistance(projectNameList, projectName) : false;

  if(isSame) document.querySelector('.error').classList.remove('hidden');
  else document.querySelector('.error').classList.add('hidden');

  inputEl.value = projectName;
  setInputFocus(inputEl);

  return isSame;
}


function projectBoxListener(projectBoxEl) {
  projectBoxEl.addEventListener('click', function(e) {
    const projectDots = e.target.closest('.project-dots');
    if(!projectDots) return;

    const projectBoxId = getElementId(projectBoxEl);
    const popUpProjectEl = document.querySelector(`.pop-up--project[data-id='${projectBoxId}'`);
    popUpProjectEl.classList.toggle('hidden');
    if(!popUpProjectEl.classList.contains('hidden')) popUpProjectElListener(popUpProjectEl);
  })
}

function popUpProjectElListener(popUpProjectEl) {
  popUpProjectEl.addEventListener('click', (e) => {
    const renameBtnEl = e.target.closest('.pop-up-btn--rename');
    const deleteBtnEl = e.target.closest('.pop-up-btn--delete');

    const projectBoxEl = popUpProjectEl.closest('.project--box');
    const projectName = projectBoxEl.querySelector('.project-name').textContent;
   
    if(renameBtnEl) renderRenameProjectFormInside(projectBoxEl, projectName);

    if(deleteBtnEl) deleteProjectEl(projectBoxEl, projectName);
  })
}

function renderRenameProjectFormInside(projectBoxEl, projectName) {
  projectBoxEl.innerHTML = '';
  const projectRenameFormEl = appendRenameFormElInside(projectBoxEl, projectName);
  const projectRenameFormInputEl = projectRenameFormEl.querySelector('input.input-box-input');
  projectRenameFormInputEl.value = projectName;
  setInputFocus(projectRenameFormInputEl);
  projectFormListener(projectRenameFormEl, projectName);
}

function appendRenameFormElInside(projectBoxEl, projectName) {
  const projectRenameFormEl = createProjectForm(projectName)
  projectBoxEl.append(projectRenameFormEl);
  return projectRenameFormEl;
}

function deleteProjectEl(projectBoxEl, projectName) {
  deleteAllTasksByProjectName(projectName);
  projectBoxEl.remove();
  setInitSectionMain();
}

function renderProjectElInside(boxEl, projectName, boxId) {
  if(boxId) {
    boxEl.innerHTML = createProject(projectName, boxId);
    return
  }
  boxEl.innerHTML = createProject(projectName);
}

export function renderProjectElBefore(addProjectBtnEl, projectName) {
  const projectsEl = document.querySelector('.projects');
  
  const projectBoxEl = createProjectElInsideBox(projectName);
  projectBoxListener(projectBoxEl);

  projectsEl.insertBefore(projectBoxEl, addProjectBtnEl);
}

function createProjectElInsideBox(projectName) {
  removePreviousActiveEl();
  const projectId = generateUniqueId();
  const projectBox = document.createElement('div');
  projectBox.classList.add('project--box');
  projectBox.setAttribute('data-id',projectId);

  projectBox.innerHTML = createProject(projectName, projectId);

  return projectBox;
}

function createProject(projectName, projectId) {
  return `<div class="project flex flex--center-v active">
  <i class="fa-solid fa-bars fa-2x"></i>
  <p class="project-name">${projectName}</p>
  <i class="project-dots fa-solid fa-ellipsis-vertical fa-2x"></i>

  <div class="pop-up pop-up--project flex flex--column hidden" data-id="${projectId}">
    <button class="pop-up-btn pop-up-btn--rename">Rename</button>
    <button class="pop-up-btn pop-up-btn--delete">Delete</button>
  </div>
 </div>
 `
}

function createProjectForm(projectName) {
  const formEl = document.createElement('form');
  formEl.classList.add('project-form','add-project');
  formEl.innerHTML = `
  <div class="project-form-input-box flex flex--center-v">
    <i class="fa-solid fa-bars fa-2x"></i>
    <input type="text" name='projectName' ${projectName ? `value='${projectName}'` : ''} placeholder="Enter Project Name" class="input-box-input margin-left--es"/>
   </div>
   <p class='error hidden'>* Project with that name already exist!</p>
   <div class="project-form-btns flex flex--center gap--md margin-top--es">
    <button class="btn btn--add">Add</button>
    <button class="btn btn--cancel">Cancel</button>
  </div>`

  return formEl;
}




