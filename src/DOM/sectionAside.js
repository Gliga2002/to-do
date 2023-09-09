import { renderSectionMain, setInitSectionMain} from "./sectionMain";
import {checkHeadType, getTaskArray,getTasksByProjectName,deleteAllTasksByProjectName, updateTasksProjectName, isProjectNameExist} from "../taskCollection";


export function asideListener() {
  const asideEl = document.querySelector('aside');
  const allTasksHomeEl = document.querySelector('.home--all-tasks');

  let previousClickedEl = allTasksHomeEl;

  asideEl.addEventListener('click', (e) => {
    const homeEl = e.target.closest('.home')
    const projectEl = e.target.closest('.project');
    const addBtnEl = e.target.closest('.btn--add')

    if(homeEl) previousClickedEl = setActiveClass(homeEl, previousClickedEl)
     
    if(projectEl) previousClickedEl = setActiveClass(projectEl, previousClickedEl)

    // Remove prevActiveHome
    if(addBtnEl) previousClickedEl.classList.remove('active');

  })
}



function setActiveClass(activeEl, prevActiveEl) {
  removePreviousActiveProject();
  if(prevActiveEl) prevActiveEl.classList.remove('active');
      activeEl.classList.add('active');
      prevActiveEl = activeEl;
      return prevActiveEl;
}



export function homeListener() {
  const homesEl = document.querySelector('.homes');

  homesEl.addEventListener('click', function(e) {
    const homeEl = e.target.closest('.home');
    if(!homeEl) return;

    const homeTitle= homeEl.children[1].textContent;

    const filteredTaskArray = checkHeadType(homeTitle, getTaskArray())
    renderSectionMain(homeTitle, filteredTaskArray);

    removeAddTaskBtn()
  })
}

// ove dve fje ne trebaju tu da budu
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
    const projectDots = e.target.closest('.project-dots')


    const renameBtnEl = e.target.closest('.pop-up-btn--rename');
    const deleteBtnEl = e.target.closest('.pop-up-btn--delete');

    if(projectAddBtnEl) {

      const projectFormEl = createProjectForm()

      projectsEl.insertBefore(projectFormEl, projectAddBtnEl);
      // create stardandr project form and insert it before projectAdd Btn El

      projectFormListener(projectFormEl);
    }

    if(projectDots) {
      const projectBoxEl = projectDots.closest('.project--box');
      const projectBoxId = projectBoxEl.dataset.projectId;
      const popUpProjectEl = document.querySelector(`.pop-up--rename[data-project-id='${projectBoxId}'`);
      popUpProjectEl.classList.toggle('hidden');
      popUpProjectElListener(popUpProjectEl, projectBoxEl, projectBoxId);
    }
    

    // Ako knilknem rename i delete button kao da sam kliknuo projectEl i ovo se izvrsava
    if(projectEl && !renameBtnEl && !deleteBtnEl) {
      console.log('OVDE SAM NA KRAJU')
      const projectName = projectEl.children[1].textContent;
      renderSectionMain(
        projectName,
        getTasksByProjectName(projectName));

      addAddTaskBtn();
    }

  
  })
}

function popUpProjectElListener(popUpProjectEl,projectBoxEl, projectBoxId) {

  
  popUpProjectEl.addEventListener('click', (e) => {
    const renameBtnEl = e.target.closest('.pop-up-btn--rename');
    const deleteBtnEl = e.target.closest('.pop-up-btn--delete');
    const projectName = projectBoxEl.children[0].children[1].textContent;
   

    if(renameBtnEl) {
      projectBoxEl.innerHTML = '';
      // apenduj samo createRenameProjectForm (ista kao prosla)
      const projectFormEl = createProjectForm(projectName)
      projectBoxEl.append(projectFormEl);
      const projectFormInputEl = projectFormEl.children[0].children[1];
      projectFormInputEl.value = projectName;
      projectFormListener(projectFormEl, projectBoxId, projectName);
      
    }

    if(deleteBtnEl) {
      deleteAllTasksByProjectName(projectName);
      projectBoxEl.remove();
      setInitSectionMain();
      
    }
  })

}

function projectFormListener(projectFormEl, boxId, oldProjectName) {
  // selektuj creatovanu formu
  
  const addProjectBtnEl = document.querySelector('.add-project-btn');

  // sve ostalo isto
  projectFormEl.addEventListener('click',(e) => {
    console.log('OVDE');
    e.preventDefault();
    const inputProjectEl = projectFormEl.children[0].children[1];
    const addBtnEl = e.target.closest('.btn--add');
    const cancelBtnEl = e.target.closest('.btn--cancel');

    if(addBtnEl) {
     
     const projectName = getInputValue(inputProjectEl);
     if(!projectName) return;


     // remove ovaj el
     projectFormEl.remove();

     // ako ga update nemoj
   


     if(boxId) {
      const newArray = updateTasksProjectName(oldProjectName, projectName);
      const projectBoxEl = document.querySelector(`.project--box[data-project-id='${boxId}']`);
      projectBoxEl.innerHTML = createProjectEl(projectName, boxId);
      renderSectionMain(projectName, newArray);
      return;
     }

     renderProjectElBefore(addProjectBtnEl, projectName);
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

// function renderProjectEl(parentEl, projectName) {
//   parentEl.innerHTML = projectName;
// }

function renderProjectElBefore(addProjectBtnEl, projectName) {
  const projectsEl = document.querySelector('.projects');
  
  // OVDE JE ZABUNA ON JE STAVIO OVDE FORM EL
  const projectBoxEl = createProjectInsideDivEl(projectName);
  projectsEl.insertBefore(projectBoxEl, addProjectBtnEl);

  // Ovo ne treba tu da bude
  addAddTaskBtn();
}

function createProjectInsideDivEl(projectName) {
  removePreviousActiveProject();
  const projectId = Date.now();
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project--box');
  projectDiv.setAttribute('data-project-id',projectId);


  projectDiv.innerHTML = `
  <div class="project flex flex--center-v active">
   <i class="fa-solid fa-bars fa-2x"></i>
   <p class="project-name">${projectName}</p>
   <i class="project-dots fa-solid fa-ellipsis-vertical fa-2x"></i>

   <div class="pop-up pop-up--rename flex flex--column hidden" data-project-id="${projectId}">
     <button class="pop-up-btn pop-up-btn--rename">Rename</button>
     <button class="pop-up-btn pop-up-btn--delete">Delete</button>
   </div>
  </div>
  `

  return projectDiv;
}

function removePreviousActiveProject() {
  const projectNodeList = document.querySelectorAll('.project');
  projectNodeList.forEach((project) => project.classList.remove('active'));
}

function createProjectEl(projectName, projectId) {
  return `<div class="project flex flex--center-v active">
  <i class="fa-solid fa-bars fa-2x"></i>
  <p class="project-name">${projectName}</p>
  <i class="project-dots fa-solid fa-ellipsis-vertical fa-2x"></i>

  <div class="pop-up pop-up--rename flex flex--column hidden" data-project-id="${projectId}">
    <button class="pop-up-btn pop-up-btn--rename">Rename</button>
    <button class="pop-up-btn pop-up-btn--delete">Delete</button>
  </div>
 </div>
 `
}



function createProjectForm(projectName) {
  const form = document.createElement('form');
  form.classList.add('project-form','add-project');
  form.innerHTML = `
  <div class="project-form-input-box flex flex--center-v margin-bottom--es">
    <i class="fa-solid fa-bars fa-2x"></i>
    <input type="text" name='projectName' ${projectName ? `value='${projectName}'` : ''} placeholder="Enter Project Name" class="input-box-input margin-left--es"/>
   </div>
   <div class="project-form-btns flex flex--center gap--md">
    <button class="btn btn--add">Add</button>
    <button class="btn btn--cancel">Cancel</button>
  </div>`
  
  return form;
}


