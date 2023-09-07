import {homeListener, projectListener} from './DOM/sectionAside';
import {setInitSectionMain, addTasksItemsListener} from './DOM/sectionMain';
import './css/style.css';
import './css/general.css';

setInitSectionMain();
homeListener();
projectListener();
addTasksItemsListener()
