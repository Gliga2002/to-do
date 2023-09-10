import addToggleViewportColorListener from './DOM/sectionHeader';
import {homeListener, projectsListener,asideListener} from './DOM/sectionAside';
import {setInitSectionMain, taskListener} from './DOM/sectionMain';
import {getStorageData} from './taskCollection';

import './css/style.css';
import './css/general.css';

window.addEventListener('load',(e) => {
  getStorageData();
  setInitSectionMain();
})

window.addEventListener("beforeunload", function(event) {
  const projectNameElNodeList = document.querySelectorAll('.project-name');
  const projectNameElArray = [...projectNameElNodeList];
  console.log(projectNameElArray);
  const projectNameArray = projectNameElArray.map((projectNameEl) => projectNameEl.textContent);
  this.localStorage.setItem('projectNames',JSON.stringify(projectNameArray));
  // event.preventDefault();
});

addToggleViewportColorListener();
// setInitSectionMain();
asideListener();
homeListener();
projectsListener();
taskListener();
