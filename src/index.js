import {homeListener, projectListener,asideListener} from './DOM/sectionAside';
import {setInitSectionMain, addTasksItemsListener} from './DOM/sectionMain';
import './css/style.css';
import './css/general.css';

setInitSectionMain();
asideListener();
homeListener();
projectListener();
addTasksItemsListener()
