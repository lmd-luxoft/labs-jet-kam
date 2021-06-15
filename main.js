import './style.css';
import {Employee} from './employees/model/Employee';
/* import { runUI, addEmployeeUI, openTab, searchEmployeeUI }
from './employees/ui-dev'; */
import { runUI, addEmployeeUI, openTab, searchEmployeeUI }
from './employees/ui-all';
/* import { runUI, addEmployeeUI, openTab, searchEmployeeUI} from './employees/ui'; */
window.addEmployeeUI = addEmployeeUI;
window.openTab = openTab;
window.searchEmployeeUI = searchEmployeeUI;
runUI();
/* window.onload = runUI(); */