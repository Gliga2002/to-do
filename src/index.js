import addToggleViewportColorListener from './DOM/sectionHeader';
import {homeListener, projectsListener,asideListener} from './DOM/sectionAside';
import {setInitSectionMain, addTasksItemsListener} from './DOM/sectionMain';

import './css/style.css';
import './css/general.css';

addToggleViewportColorListener();
setInitSectionMain();
asideListener();
homeListener();
projectsListener();
addTasksItemsListener()
