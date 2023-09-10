import addToggleViewportColorListener from './DOM/sectionHeader';
import {homeListener, projectsListener,asideListener} from './DOM/sectionAside';
import {setInitSectionMain, taskListener} from './DOM/sectionMain';
import {getStorageData, setStorageProjectNames, setStorageTasksArray} from './taskCollection';

import './css/style.css';
import './css/general.css';

window.addEventListener('load',(e) => {
  getStorageData();
  setInitSectionMain();
})

window.addEventListener("beforeunload", function(event) {
  setStorageProjectNames();
  // event.preventDefault();
  // const taskArray = getTaskArray();
  setStorageTasksArray();
});

addToggleViewportColorListener();
// setInitSectionMain();
asideListener();
homeListener();
projectsListener();
taskListener();
