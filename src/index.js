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

addToggleViewportColorListener();
// setInitSectionMain();
asideListener();
homeListener();
projectsListener();
taskListener();
